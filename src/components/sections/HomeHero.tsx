import { Icon } from "../../assets/icons/Icon";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { GradientBlob } from "../ui/GradientBlob";
import { useTilt } from "../../hooks/useTilt";
import styles from "./HomeHero.module.scss";

export function HomeHero() {
  const tiltRef = useTilt<HTMLDivElement>(4);

  return (
    <section className={styles.hero}>
      <GradientBlob variant="indigo" className={`blob-decor ${styles.blobA}`} />
      <GradientBlob variant="green" className={`blob-decor ${styles.blobB}`} />

      <div className={`container-custom ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">
            <Icon name="sparkles" size={14} /> AI-Assisted Development
          </span>
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
        </div>

        <Reveal delay={2} className={styles.visual}>
          <div className={styles.frame} ref={tiltRef}>
            {/* Temporary stock photo (team activity) until a real Adroit
                Infosol team-at-work photo is provided - swap the src below. */}
            <img src="/images/stock-team-hero.webp" alt="Software team collaborating around a screen" loading="eager" />
            <div className={styles.badge}>
              <svg width="28" height="28" viewBox="0 0 59 59" aria-hidden="true" focusable="false">
                <rect x="7.7" y="7.7" width="43.6" height="43.6" rx="9.5" ry="9.5" fill="#fff" opacity="0.16" transform="rotate(-25 29.5 29.5)" />
                <rect x="7.7" y="7.7" width="43.6" height="43.6" rx="9.5" ry="9.5" fill="#fff" opacity="0.28" transform="rotate(-35 29.5 29.5)" />
                <rect x="7.7" y="7.7" width="43.6" height="43.6" rx="9.5" ry="9.5" fill="#fff" transform="rotate(-45 29.5 29.5)" />
                <circle cx="29.5" cy="21.4" r="3.3" fill="#29a9e1" />
                <circle cx="19.9" cy="35.9" r="3.3" fill="#2b3d97" />
                <circle cx="29.3" cy="35.8" r="3.3" fill="#2b3d97" />
                <circle cx="38.9" cy="35.9" r="3.3" fill="#699b41" />
                <circle cx="24.6" cy="28.6" r="3.3" fill="#2b3d97" />
                <circle cx="34.1" cy="28.6" r="3.3" fill="#2b3d97" />
              </svg>
              <span>Adroit Infosol</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
