import { Reveal } from "../ui/Reveal";
import styles from "./TeamCard.module.scss";

interface Props {
  name: string;
  role: string;
  bio?: string;
  /** Headshot path. Falls back to initials on a brand gradient if omitted. */
  photo?: string;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TeamCard({ name, role, bio, photo, delay }: Props) {
  return (
    <Reveal delay={delay} className={styles.wrap}>
      <article className={`${styles.card} ${bio ? styles.leader : ""}`}>
        <div className={styles.photo}>
          {photo ? (
            <img src={photo} alt={name} loading="lazy" />
          ) : (
            <span className={styles.initials} aria-hidden="true">
              {initials(name)}
            </span>
          )}
        </div>
        <div className={styles.body}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.role}>{role}</p>
          {bio && <p className={styles.bio}>{bio}</p>}
        </div>
      </article>
    </Reveal>
  );
}
