import { Icon } from "../../assets/icons/Icon";
import { Reveal } from "../ui/Reveal";
import styles from "./TestimonialCard.module.scss";

interface Props {
  name: string;
  quote: string;
  role?: string;
  badge?: string;
  rating?: number;
  photo?: string;
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

export function TestimonialCard({
  name,
  quote,
  role,
  badge,
  rating,
  photo,
  delay,
}: Props) {
  return (
    <Reveal delay={delay} className={styles.wrap}>
      <figure className={styles.card}>
        <div className={styles.header}>
          <div className={styles.quoteHousing}>
            <Icon name="quote" size={18} />
          </div>

          <div className={styles.badgeArea}>
            {rating ? (
              <div className={styles.ratingGroup}>
                <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
                  {[...Array(rating)].map((_, i) => (
                    <Icon key={i} name="star" weight="fill" size={13} className={styles.starIcon} />
                  ))}
                </div>
                <span className={styles.verifiedTag}>
                  <Icon name="checkCircle" size={12} weight="bold" />
                  <span>{badge || "Verified Client"}</span>
                </span>
              </div>
            ) : badge ? (
              <span className={styles.teamTag}>
                <Icon name="users" size={12} />
                <span>{badge}</span>
              </span>
            ) : null}
          </div>
        </div>

        <blockquote>
          <p className={styles.quoteText}>{quote}</p>
        </blockquote>

        <figcaption className={styles.caption}>
          {photo ? (
            <img
              className={styles.avatarPhoto}
              src={photo}
              alt=""
              aria-hidden="true"
              width={42}
              height={42}
              loading="lazy"
            />
          ) : (
            <div className={styles.avatar} aria-hidden="true">
              {initials(name)}
            </div>
          )}
          <div className={styles.authorMeta}>
            <span className={styles.name}>{name}</span>
            {role && <span className={styles.role}>{role}</span>}
          </div>
        </figcaption>
      </figure>
    </Reveal>
  );
}
