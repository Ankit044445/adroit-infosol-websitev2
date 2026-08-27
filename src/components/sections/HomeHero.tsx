import { Icon } from "../../assets/icons/Icon";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { GradientBlob } from "../ui/GradientBlob";
import styles from "./HomeHero.module.scss";

export function HomeHero() {
  return (
    <section className={styles.hero}>
      <GradientBlob variant="indigo" className={`blob-decor ${styles.blobA}`} />
      <GradientBlob variant="green" className={`blob-decor ${styles.blobB}`} />

      <div className={`container-custom ${styles.inner}`}>
        <Reveal className={styles.copy}>
          <h1 className={styles.title}>
            Your Trusted <span className={styles.highlight}>Technology Partner</span> Since 2013
          </h1>
          <p className={`lead ${styles.desc}`}>
            Enterprise IT solutions and product development, based in Vadodara, India. We turn ideas into
            reliable, scalable software for startups, SMEs, and enterprises.
          </p>
          <div className={styles.ctaRow}>
            <Button to="/contact-us" size="lg">
              Schedule a Free Consultation
            </Button>
            <Button to="/about-us" variant="secondary" size="lg">
              Learn About Us
            </Button>
          </div>
        </Reveal>

        <Reveal delay={2} className={styles.photoBand}>
          <img
            className={styles.photo}
            src="/images/team-group-2026.webp"
            alt="The full Adroit Infosol team at our Vadodara office"
            width={2000}
            height={1013}
            loading="eager"
            fetchPriority="high"
          />
          <span className={styles.photoBadge}>
            <Icon name="users" size={18} />
            <span>15+ Team Members</span>
          </span>
        </Reveal>
      </div>
    </section>
  );
}
