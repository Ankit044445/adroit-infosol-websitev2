import { useCallback, useEffect, useRef, useState } from "react";

const RESUME_DELAY = 4000;

/**
 * Scroll-snap carousel controller: index state, autoplay (paused on
 * hover/focus/touch and by an explicit persistent toggle per WCAG 2.2.2),
 * and drag/swipe-to-index sync. UI-agnostic - components own the markup.
 */
export function useCarousel(itemCount: number, autoPlayMs = 3200) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const isProgrammaticScroll = useRef(false);
  const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const goTo = useCallback(
    (nextIndex: number) => {
      const track = trackRef.current;
      if (!track) return;
      const bounded = (nextIndex + itemCount) % itemCount;
      const slide = track.children[bounded] as HTMLElement | undefined;
      if (!slide) return;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      isProgrammaticScroll.current = true;
      // Scroll the track's own horizontal axis directly instead of
      // slide.scrollIntoView(), which can also nudge the page's vertical
      // scroll position when the carousel isn't fully inside the viewport.
      const scrollPaddingLeft = parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0;
      const delta = slide.getBoundingClientRect().left - track.getBoundingClientRect().left - scrollPaddingLeft;
      track.scrollTo({ left: track.scrollLeft + delta, behavior: reduceMotion ? "auto" : "smooth" });
      setIndex(bounded);
      window.clearTimeout(scrollEndTimer.current);
      scrollEndTimer.current = setTimeout(
        () => {
          isProgrammaticScroll.current = false;
        },
        reduceMotion ? 50 : 500
      );
    },
    [itemCount]
  );

  const pauseForInteraction = useCallback(() => {
    setInteractionPaused(true);
    window.clearTimeout(resumeTimer.current);
  }, []);

  const resumeAfterInteraction = useCallback(() => {
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setInteractionPaused(false), RESUME_DELAY);
  }, []);

  const prev = () => {
    pauseForInteraction();
    goTo(index - 1);
    resumeAfterInteraction();
  };
  const next = () => {
    pauseForInteraction();
    goTo(index + 1);
    resumeAfterInteraction();
  };
  const goToDot = (i: number) => {
    pauseForInteraction();
    goTo(i);
    resumeAfterInteraction();
  };
  const toggleUserPaused = () => setUserPaused((p) => !p);

  const reducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isPlaying = !userPaused && !interactionPaused && !reducedMotion && itemCount > 1;

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => goTo(index + 1), autoPlayMs);
    return () => clearInterval(id);
  }, [index, isPlaying, autoPlayMs, goTo]);

  // Keep the index in sync when the user drags/swipes the track directly
  // instead of using the arrow buttons.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let debounce: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      if (isProgrammaticScroll.current) return;
      window.clearTimeout(debounce);
      debounce = setTimeout(() => {
        const slides = Array.from(track.children) as HTMLElement[];
        const trackLeft = track.getBoundingClientRect().left;
        let closest = 0;
        let closestDist = Infinity;
        slides.forEach((slide, i) => {
          const dist = Math.abs(slide.getBoundingClientRect().left - trackLeft);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setIndex(closest);
      }, 120);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.clearTimeout(debounce);
    };
  }, []);

  useEffect(
    () => () => {
      window.clearTimeout(scrollEndTimer.current);
      window.clearTimeout(resumeTimer.current);
    },
    []
  );

  return {
    trackRef,
    index,
    prev,
    next,
    goToDot,
    toggleUserPaused,
    userPaused,
    isPlaying,
    reducedMotion,
    interactionHandlers: {
      onMouseEnter: pauseForInteraction,
      onMouseLeave: resumeAfterInteraction,
      onFocus: pauseForInteraction,
      onBlur: resumeAfterInteraction,
      onTouchStart: pauseForInteraction,
    },
  };
}
