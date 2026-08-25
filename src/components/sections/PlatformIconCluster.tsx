import { Icon, type IconName } from "../../assets/icons/Icon";
import styles from "./ServiceIconCluster.module.scss";

const platforms: Array<{ name: string; icon: IconName }> = [
  { name: "Android", icon: "android" },
  { name: "iOS", icon: "ios" },
  { name: "Web", icon: "web" },
  { name: "Hybrid", icon: "crossplatform" },
  { name: "LimeSurvey", icon: "survey" },
  { name: "IoT", icon: "iot" },
];

const tones: Array<"green" | "sky" | "indigo"> = ["green", "sky", "indigo", "sky", "green", "indigo"];

/** Platforms actually shipped in the portfolio below - distinct from the
 * Services page hero, which shows the service catalog instead. 3 columns
 * (not the shared 4-col default) so these 6 tiles fill two even rows
 * instead of leaving a half-empty trailing row. */
export function PlatformIconCluster() {
  return (
    <div className={styles.cluster} style={{ gridTemplateColumns: "repeat(3, 1fr)" }} aria-hidden="true">
      {platforms.map((p, i) => (
        <div key={p.name} className={`${styles.tile} ${styles[tones[i % tones.length]]}`} title={p.name}>
          <Icon name={p.icon} size={24} />
        </div>
      ))}
    </div>
  );
}
