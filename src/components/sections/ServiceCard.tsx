import { Link } from "react-router-dom";
import { Icon, type IconName } from "../../assets/icons/Icon";
import { Reveal } from "../ui/Reveal";
import type { ServiceItem } from "../../data/content";
import styles from "./ServiceCard.module.scss";

interface Props {
  service: ServiceItem;
  index?: number;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  detailed?: boolean;
}

export function ServiceCard({ service, index, delay, detailed = false }: Props) {
  return (
    <Reveal delay={delay} className={styles.wrap}>
      <article id={service.slug} className={styles.card}>
        <div className={styles.cardTop}>
          <div className={styles.iconWrap}>
            <Icon name={service.icon as IconName} size={26} />
          </div>
          {typeof index === "number" && (
            <span className={styles.index} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.desc}>{detailed ? service.detail : service.short}</p>
        <div className={styles.statRow}>
          <strong>{service.stat.value}</strong>
          <span>{service.stat.label}</span>
        </div>
        <Link to={`/services/${service.slug}`} className={styles.link}>
          Explore Service
          <Icon name="arrowRight" size={16} />
        </Link>
      </article>
    </Reveal>
  );
}
