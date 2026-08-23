import { Icon } from "../../assets/icons/Icon";
import { Reveal } from "../ui/Reveal";
import styles from "./TestimonialCard.module.scss";

interface Props {
  name: string;
  quote: string;
  role?: string;
  delay?: 1 | 2 | 3 | 4;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialCard({ name, quote, role, delay }: Props) {
  return (
    <Reveal delay={delay} className={styles.wrap}>
      <figure className={styles.card}>
        <Icon name="quote" size={30} className={styles.quoteIcon} />
        <blockquote>
          <p>{quote}</p>
        </blockquote>
        <figcaption className={styles.caption}>
          <span className={styles.avatar} aria-hidden="true">
            {initials(name)}
          </span>
          <span>
            <span className={styles.name}>{name}</span>
            {role && <span className={styles.role}>{role}</span>}
          </span>
        </figcaption>
      </figure>
    </Reveal>
  );
}
