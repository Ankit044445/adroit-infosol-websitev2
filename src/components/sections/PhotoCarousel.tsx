import { Icon } from "../../assets/icons/Icon";
import { Reveal } from "../ui/Reveal";
import { useCarousel } from "../../hooks/useCarousel";
import styles from "./PhotoCarousel.module.scss";

interface CarouselItem {
  src?: string;
  alt: string;
  caption?: string;
}

interface Props {
  title: string;
  description?: string;
  items: CarouselItem[];
  autoPlayMs?: number;
}

export function PhotoCarousel({ title, description, items, autoPlayMs = 2800 }: Props) {
  const { trackRef, index, prev, next, goToDot, interactionHandlers } = useCarousel(items.length, autoPlayMs);

  return (
    <Reveal className={styles.wrap}>
      <div className={styles.head}>
        <div className={styles.headCopy}>
          <h2 className={styles.heading}>{title}</h2>
          {description && <p className={`lead ${styles.lead}`}>{description}</p>}
        </div>
        <div className={styles.nav}>
          <button type="button" onClick={prev} aria-label="Previous photo">
            <Icon name="chevronLeft" size={20} />
          </button>
          <button type="button" onClick={next} aria-label="Next photo">
            <Icon name="chevronRight" size={20} />
          </button>
        </div>
      </div>

      <div className={styles.track} ref={trackRef} {...interactionHandlers}>
        {items.map((item, i) => (
          <figure className={styles.slide} key={item.alt + i}>
            <div className={`${styles.frame} ${item.src ? "" : styles.placeholder}`}>
              {item.src ? (
                <img src={item.src} alt={item.alt} loading="lazy" />
              ) : (
                <>
                  <Icon name="image" size={34} />
                  <span>Photo coming soon</span>
                </>
              )}
            </div>
            {item.caption && <figcaption>{item.caption}</figcaption>}
          </figure>
        ))}
      </div>

      <div className={styles.dots} role="tablist" aria-label={`${title} slides`}>
        {items.map((item, i) => (
          <button
            key={item.alt + i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
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
