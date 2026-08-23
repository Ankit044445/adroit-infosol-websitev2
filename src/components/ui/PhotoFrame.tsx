import { Reveal } from "./Reveal";
import styles from "./PhotoFrame.module.scss";

interface PhotoFrameProps {
  src: string;
  alt: string;
  ratio?: "square" | "portrait" | "landscape";
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export function PhotoFrame({ src, alt, ratio = "landscape", delay, className = "" }: PhotoFrameProps) {
  return (
    <Reveal delay={delay} className={`${styles.frame} ${styles[ratio]} ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </Reveal>
  );
}
