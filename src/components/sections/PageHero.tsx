import type { ReactNode } from "react";
import { GradientBlob } from "../ui/GradientBlob";
import { Reveal } from "../ui/Reveal";
import styles from "./PageHero.module.scss";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  visual?: ReactNode;
  children?: ReactNode;
}

/** Hero used on interior pages. Optionally split with a page-specific visual
 * (photo, stat panel, or icon cluster) so every page reads as its own
 * moment instead of a repeated text-only template. */
export function PageHero({ eyebrow, title, description, visual, children }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <GradientBlob variant="sky" className={`blob-decor ${styles.blobA}`} />
      <GradientBlob variant="green" className={`blob-decor ${styles.blobB}`} />
      <div className={`container-custom ${styles.inner} ${visual ? styles.split : ""}`}>
        <div className={styles.copy}>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={`lead ${styles.desc}`}>{description}</p>
          {children}
        </div>
        {visual && (
          <Reveal delay={2} className={styles.visual}>
            {visual}
          </Reveal>
        )}
      </div>
    </section>
  );
}
