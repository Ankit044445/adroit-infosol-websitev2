import { Icon, type IconName } from "../../assets/icons/Icon";
import { Reveal } from "../ui/Reveal";
import styles from "./TeamCard.module.scss";

interface Props {
  name: string;
  role: string;
  bio?: string;
  /** Real headshot path, e.g. "/images/team/kalpana-patel.jpg". Until this is
   * supplied the card renders an honest photo-slot placeholder at the same
   * size/aspect a real photo would use, so dropping in real headshots later
   * is a pure data change - no layout rework. */
  photo?: string;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
}

// Small role-derived accent badge (real data, not decoration) so a grid of
// a dozen otherwise-identical placeholder cards reads as a mix of real
// specializations at a glance instead of one flat repeated tile.
function roleIcon(role: string): IconName {
  const r = role.toLowerCase();
  if (r.includes("qa")) return "checkCircle";
  if (r.includes("android")) return "android";
  if (r.includes("ios")) return "ios";
  if (r.includes("flutter")) return "crossplatform";
  if (r.includes("cto") || r.includes("technical")) return "code";
  if (r.includes("ceo") || r.includes("founder")) return "star";
  if (r.includes("project") || r.includes("manager")) return "briefcase";
  return "code";
}

export function TeamCard({ name, role, bio, photo, delay }: Props) {
  return (
    <Reveal delay={delay} className={styles.wrap}>
      <article className={`${styles.card} ${bio ? styles.leader : ""}`}>
        <div className={`${styles.photo} ${photo ? "" : styles.photoPlaceholder}`}>
          {photo ? (
            <img src={photo} alt={name} loading="lazy" />
          ) : (
            <Icon name="user" size={bio ? 30 : 22} />
          )}
          <span className={styles.roleBadge} aria-hidden="true">
            <Icon name={roleIcon(role)} size={13} />
          </span>
        </div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        {bio && <p className={styles.bio}>{bio}</p>}
      </article>
    </Reveal>
  );
}
