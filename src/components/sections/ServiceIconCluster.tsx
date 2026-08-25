import { Icon, type IconName } from "../../assets/icons/Icon";
import { services } from "../../data/content";
import styles from "./ServiceIconCluster.module.scss";

const tones: Array<"green" | "sky" | "indigo"> = [
  "green", "sky", "indigo", "sky",
  "green", "indigo", "green", "sky"
];

/** Clean symmetrical 4x2 matrix of service icons for Services hero */
export function ServiceIconCluster() {
  return (
    <div className={styles.cluster} aria-hidden="true">
      {services.map((s, i) => (
        <div
          key={s.slug}
          className={`${styles.tile} ${styles[tones[i % tones.length]]}`}
          title={s.title}
        >
          <Icon name={s.icon as IconName} size={24} />
        </div>
      ))}
    </div>
  );
}

