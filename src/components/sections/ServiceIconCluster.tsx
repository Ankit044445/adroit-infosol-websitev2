import { Icon, type IconName } from "../../assets/icons/Icon";
import { services } from "../../data/content";
import styles from "./ServiceIconCluster.module.scss";

const tones: Array<"green" | "sky" | "indigo"> = ["green", "sky", "indigo", "sky", "green", "indigo", "green", "sky"];

/** Compact bento of service icons used as the Services-page hero visual -
 * a quick, glanceable preview of the catalogue instead of a stock photo. */
export function ServiceIconCluster() {
  return (
    <div className={styles.cluster} aria-hidden="true">
      {services.map((s, i) => (
        <div key={s.slug} className={`${styles.tile} ${styles[tones[i % tones.length]]}`}>
          <Icon name={s.icon as IconName} size={22} />
        </div>
      ))}
    </div>
  );
}
