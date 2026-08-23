import { Icon, type IconName } from "../../assets/icons/Icon";
import { Reveal } from "../ui/Reveal";
import styles from "./FeatureCard.module.scss";

interface Props {
  icon: IconName;
  title: string;
  desc: string;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  tone?: "indigo" | "green" | "sky";
}

export function FeatureCard({ icon, title, desc, delay, tone = "green" }: Props) {
  return (
    <Reveal delay={delay} className={styles.wrap}>
      <article className={`${styles.card} ${styles[tone]}`}>
        <div className={styles.iconWrap}>
          <Icon name={icon} size={22} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
      </article>
    </Reveal>
  );
}
