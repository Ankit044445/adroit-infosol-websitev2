import { useEffect, useRef } from "react";

// pointer tilt, skipped on touch and reduced-motion
export function useTilt<T extends HTMLElement>(maxDeg = 6) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduced) return;

    function handleMove(e: PointerEvent) {
      const rect = el!.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el!.style.setProperty("--tilt-x", `${(-py * maxDeg).toFixed(2)}deg`);
      el!.style.setProperty("--tilt-y", `${(px * maxDeg).toFixed(2)}deg`);
    }

    function handleLeave() {
      el!.style.setProperty("--tilt-x", "0deg");
      el!.style.setProperty("--tilt-y", "0deg");
    }

    el.addEventListener("pointermove", handleMove);
    el.addEventListener("pointerleave", handleLeave);
    return () => {
      el.removeEventListener("pointermove", handleMove);
      el.removeEventListener("pointerleave", handleLeave);
    };
  }, [maxDeg]);

  return ref;
}
