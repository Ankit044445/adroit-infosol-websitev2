import type { ReactNode } from "react";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { GradientBlob } from "../ui/GradientBlob";
import styles from "./CtaBanner.module.scss";

interface Props {
  title: string;
  description: string;
  ctaLabel: string;
  ctaTo: string;
  children?: ReactNode;
  /** Extra breathing room above/below - reserved for the homepage's closing moment. */
  spacious?: boolean;
}

export function CtaBanner({ title, description, ctaLabel, ctaTo, children, spacious = false }: Props) {
  return (
    <section className={`section ${spacious ? styles.spacious : ""}`}>
      <div className="container-custom">
        <div className={styles.panel}>
          <GradientBlob variant="green" className={`blob-decor ${styles.blobA}`} />
          <GradientBlob variant="sky" className={`blob-decor ${styles.blobB}`} />
          <Reveal className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{description}</p>
            {children}
            <Button to={ctaTo} variant="onDark" size="lg">
              {ctaLabel}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
