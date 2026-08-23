import { Reveal } from "../ui/Reveal";
import { processSteps } from "../../data/content";
import styles from "./ProcessSteps.module.scss";

export function ProcessSteps() {
  return (
    <ol className={styles.list}>
      {processSteps.map((step, i) => (
        <Reveal as="li" key={step.title} delay={((i % 6) + 1) as 1} className={styles.item}>
          <span className={styles.node} aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className={styles.content}>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.desc}>{step.desc}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
