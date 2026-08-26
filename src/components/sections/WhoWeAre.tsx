import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { Icon } from "../../assets/icons/Icon";
import styles from "./WhoWeAre.module.scss";

const facts = [
  { icon: "calendar" as const, label: "Founded 2013 by Kalpana & Vishal Patel" },
  { icon: "users" as const, label: "15+ In-House Team Members" },
  { icon: "mapPin" as const, label: "Based in Vadodara, India" },
];

export function WhoWeAre() {
  return (
    <section className="section section-alt">
      <div className={`container-custom ${styles.inner}`}>
        <Reveal className={styles.copy}>
          <h2>
            Building technology that moves <span className="text-gradient">businesses forward</span>
          </h2>
          <p className="lead">
            We work with clients across multiple continents — from early-stage startups to established
            enterprises — turning complex requirements into secure, scalable software with senior engineers
            involved from day one.
          </p>
          <Button to="/about-us" variant="secondary">
            Learn About Us
          </Button>
        </Reveal>

        <Reveal delay={2} className={styles.proofRow}>
          <img
            className={styles.proofPhoto}
            src="/images/office2.webp"
            alt="Adroit Infosol team members working in the Vadodara office"
            width={340}
            height={230}
            loading="lazy"
          />
          <ul className={styles.facts}>
            {facts.map((f) => (
              <li key={f.label}>
                <Icon name={f.icon} size={18} />
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
