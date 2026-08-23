import { Icon } from "../../assets/icons/Icon";
import { Reveal } from "../ui/Reveal";
import { faqs } from "../../data/content";
import styles from "./Faq.module.scss";

export function Faq() {
  return (
    <div className={styles.list}>
      {faqs.map((item, i) => (
        <Reveal key={item.q} as="div" delay={((i % 6) + 1) as 1}>
          <details className={styles.item}>
            <summary className={styles.question}>
              {item.q}
              <Icon name="chevronDown" size={18} className={styles.caret} />
            </summary>
            <p className={styles.answer}>{item.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
