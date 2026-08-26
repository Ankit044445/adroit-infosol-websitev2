import { Seo } from "../components/ui/Seo";
import { Reveal } from "../components/ui/Reveal";
import { Icon } from "../assets/icons/Icon";
import { Button } from "../components/ui/Button";
import { GradientBlob } from "../components/ui/GradientBlob";
import { ContactForm } from "../components/sections/ContactForm";
import { IntroVideo } from "../components/sections/IntroVideo";
import { CopyEmailButton } from "../components/ui/CopyEmailButton";
import { consultationSteps, consultationGains, contactInfo } from "../data/content";
import styles from "./Contact.module.scss";

const CALENDLY_URL = "https://calendly.com/vishal-adroitinfosol/30min";

export function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Book a free 30-minute call with Adroit Infosol's experts. No pressure, no obligation, just clarity on your project and a clear path forward."
        path="/contact-us"
      />

      <section className={styles.hero}>
        <GradientBlob variant="indigo" className={`blob-decor ${styles.blobA}`} />
        <GradientBlob variant="green" className={`blob-decor ${styles.blobB}`} />
        <div className={`container-custom ${styles.grid}`}>
          <div className={styles.copy}>
            <span className="eyebrow">
              <Icon name="calendar" size={14} /> 30-Min Strategy Session
            </span>
            <h1>
              Let's Build Something <span className="text-gradient">Great Together</span>
            </h1>
            <p className="lead">
              Book a free 30-minute call with our experts. No pressure, no obligation, just clarity on your
              project and a clear path forward.
            </p>

            <ol className={styles.steps}>
              {consultationSteps.map((s) => (
                <li key={s.step}>
                  <span className={styles.stepNum}>{s.step}</span>
                  {s.title}
                </li>
              ))}
            </ol>
          </div>

          <Reveal delay={2} className={styles.videoCol}>
            <IntroVideo />
            <Button href={CALENDLY_URL} variant="primary" className={styles.calendlyLink}>
              Book Appointment on Calendly
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className={`row g-4 g-lg-5 ${styles.formRow}`}>
            <div className="col-lg-5">
              <Reveal className={styles.gains}>
                <h2 className={styles.gainsHeading}>What You'll Gain from Our <span className="text-gradient">Discovery Session</span></h2>
                <ul className={styles.gainsList}>
                  {consultationGains.map((g) => (
                    <li key={g.title}>
                      <Icon name="checkCircle" size={19} />
                      <span>
                        <strong>{g.title}</strong>
                        <br />
                        {g.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="col-lg-7">
              <Reveal delay={2} className={styles.formStandalone}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className={`section section-alt ${styles.reachSection}`}>
        <div className="container-custom">
          <div className="row g-4">
            <div className="col-lg-4">
              <Reveal delay={1} className={styles.reachCard}>
                <span className={styles.reachIcon}>
                  <Icon name="mail" size={22} />
                </span>
                <h3>Email Us</h3>
                <p className={styles.reachDesc}>We reply within one business day.</p>
                <a href={`mailto:${contactInfo.email}`} className={styles.reachValue}>
                  {contactInfo.email}
                </a>
                <CopyEmailButton />
              </Reveal>
            </div>

            <div className="col-lg-4">
              <Reveal delay={2} className={styles.reachCard}>
                <span className={styles.reachIcon}>
                  <Icon name="mapPin" size={22} />
                </span>
                <h3>Location</h3>
                <p className={styles.reachDesc}>Serving clients across 7+ countries.</p>
                <span className={styles.reachValue}>{contactInfo.location}</span>
              </Reveal>
            </div>

            <div className="col-lg-4">
              <Reveal delay={3} className={styles.reachCard}>
                <span className={styles.reachIcon}>
                  <Icon name="share" size={22} />
                </span>
                <h3>Follow Us</h3>
                <p className={styles.reachDesc}>See our latest work and updates.</p>
                <span className={styles.socialRow}>
                  {contactInfo.socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                      <Icon name={s.icon as "linkedin"} size={19} />
                    </a>
                  ))}
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
