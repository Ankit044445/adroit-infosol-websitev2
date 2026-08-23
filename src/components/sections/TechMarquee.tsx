import type { CSSProperties } from "react";
import { techStack } from "../../data/content";
import { Icon } from "../../assets/icons/Icon";
import styles from "./TechMarquee.module.scss";

type MaskStyle = CSSProperties & { "--mark-src": string };

export function TechMarquee() {
  const items = [...techStack, ...techStack];
  return (
    <div className={styles.marquee} role="list" aria-label="Technologies we work with">
      <div className={`marquee-track ${styles.track}`}>
        {items.map((tech, i) => (
          <span
            role="listitem"
            className={styles.pill}
            key={`${tech.name}-${i}`}
            aria-hidden={i >= techStack.length}
          >
            {tech.slug ? (
              <span
                className={styles.mark}
                style={{ "--mark-src": `url(https://cdn.simpleicons.org/${tech.slug})` } as MaskStyle}
              />
            ) : (
              <Icon name="code" size={16} className={styles.fallbackIcon} />
            )}
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}
