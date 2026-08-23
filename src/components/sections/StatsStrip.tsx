import { Icon, type IconName } from "../../assets/icons/Icon";
import { Reveal } from "../ui/Reveal";
import { useCountUp } from "../../hooks/useCountUp";
import { stats } from "../../data/content";
import styles from "./StatsStrip.module.scss";

function StatValue({ raw }: { raw: string }) {
  const match = raw.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : raw;
  const { ref, value } = useCountUp<HTMLSpanElement>(target);

  return (
    <span ref={ref} className={styles.value}>
      {value}
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  return (
    <div className={styles.strip}>
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={((i % 6) + 1) as 1} className={styles.card}>
          <div className={styles.iconWrap}>
            <Icon name={s.icon as IconName} size={22} />
          </div>
          <StatValue raw={s.value} />
          <span className={styles.label}>{s.label}</span>
        </Reveal>
      ))}
    </div>
  );
}
