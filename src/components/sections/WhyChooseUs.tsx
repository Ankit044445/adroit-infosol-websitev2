import { Icon, type IconName } from "../../assets/icons/Icon";
import { Reveal } from "../ui/Reveal";
import { homeDifferentiators, stats } from "../../data/content";
import styles from "./WhyChooseUs.module.scss";

const highlights = homeDifferentiators;
const yearsStat = stats[0];

export function WhyChooseUs() {
  return (
    <div className={styles.grid}>
      <Reveal className={styles.flagship}>
        <div className={styles.flagshipTop}>
          <span className={styles.flagshipValue}>{yearsStat.value}</span>
          <span className={styles.flagshipTag}>Established 2013</span>
        </div>
        <h3 className={styles.flagshipTitle}>Over a Decade of Proven Engineering Trust</h3>
        <p className={styles.flagshipLabel}>
          Helping startups, SMEs, and enterprises turn complex ideas into robust, scalable software with end-to-end transparency and dedicated senior talent.
        </p>
      </Reveal>

      {highlights.map((v, i) => (
        <Reveal key={v.title} delay={((i % 4) + 1) as 1} className={styles.tile}>
          <div className={styles.tileHeader}>
            <div className={styles.iconHousing}>
              <Icon name={v.icon as IconName} size={20} />
            </div>
            <h3 className={styles.tileTitle}>{v.title}</h3>
          </div>
          <p className={styles.tileDesc}>{v.desc}</p>
        </Reveal>
      ))}
    </div>
  );
}
