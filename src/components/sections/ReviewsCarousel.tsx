import type { ReactNode } from "react";
import { Icon } from "../../assets/icons/Icon";
import { Reveal } from "../ui/Reveal";
import { TestimonialCard } from "./TestimonialCard";
import { useCarousel } from "../../hooks/useCarousel";
import styles from "./ReviewsCarousel.module.scss";

interface ReviewItem {
  name: string;
  role: string;
  quote: string;
  photo?: string;
}

interface Props {
  title: ReactNode;
  items: ReviewItem[];
  autoPlayMs?: number;
}

export function ReviewsCarousel({ title, items, autoPlayMs = 3200 }: Props) {
  const { trackRef, index, prev, next, goToDot, interactionHandlers } = useCarousel(items.length, autoPlayMs);

  return (
    <Reveal className={styles.wrap}>
      <div className={styles.head}>
        <div>
          <h2>{title}</h2>
        </div>
        <div className={styles.nav}>
          <button type="button" onClick={prev} aria-label="Previous review">
            <Icon name="chevronLeft" size={20} />
          </button>
          <button type="button" onClick={next} aria-label="Next review">
            <Icon name="chevronRight" size={20} />
          </button>
        </div>
      </div>

      <div className={styles.track} ref={trackRef} {...interactionHandlers}>
        {items.map((item) => (
          <div className={styles.slide} key={item.name}>
            <TestimonialCard name={item.name} role={item.role} quote={item.quote} photo={item.photo} badge="Team Voice" />
          </div>
        ))}
      </div>

      <div className={styles.dots} role="tablist" aria-label="Client testimonial slides">
        {items.map((item, i) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to review ${i + 1}`}
            className={styles.dotBtn}
            onClick={() => goToDot(i)}
          >
            <span className={i === index ? styles.pillActive : styles.pill} />
          </button>
        ))}
      </div>
    </Reveal>
  );
}
