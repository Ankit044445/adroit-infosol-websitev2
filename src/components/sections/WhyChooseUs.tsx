import { Icon, type IconName } from "../../assets/icons/Icon";
import { Reveal } from "../ui/Reveal";
import { values, stats } from "../../data/content";
import styles from "./WhyChooseUs.module.scss";

// Pulled from the same real `values` data shown in full on the About page -
// just the 4 most decision-relevant to a prospect skimming the homepage,
// paired with the real "years in business" stat as the anchor tile.
const highlights = values.slice(0, 4);
const yearsStat = stats[0];

export function WhyChooseUs() {
  return (
    <div className={styles.grid}>
      <Reveal className={styles.flagship}>
        <span className={styles.flagshipValue}>{yearsStat.value}</span>
        <span className={styles.flagshipLabel}>
          Building reliable software for startups and enterprises since 2013
        </span>
      </Reveal>

      {highlights.map((v, i) => (
        <Reveal key={v.title} delay={((i % 6) + 1) as 1} className={styles.tile}>
          <Icon name={v.icon as IconName} size={22} />
          <span>{v.title}</span>
        </Reveal>
      ))}
    </div>
  );
}
