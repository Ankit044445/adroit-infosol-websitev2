import { Link, Navigate, useParams } from "react-router-dom";
import { Seo } from "../components/ui/Seo";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { GradientBlob } from "../components/ui/GradientBlob";
import { Icon, type IconName } from "../assets/icons/Icon";
import { ProcessSteps } from "../components/sections/ProcessSteps";
import { ServiceCard } from "../components/sections/ServiceCard";
import { CtaBanner } from "../components/sections/CtaBanner";
import { services } from "../data/content";
import styles from "./ServiceDetail.module.scss";

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={service.title}
        description={service.short}
        path={`/services/${service.slug}`}
      />

      <section className={styles.hero}>
        <GradientBlob variant="sky" className={`blob-decor ${styles.blobA}`} />
        <GradientBlob variant="green" className={`blob-decor ${styles.blobB}`} />
        <div className={`container-custom ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <nav className={styles.crumbs} aria-label="Breadcrumb">
              <Link to="/services">Services</Link>
              <Icon name="arrowRight" size={13} />
              <span>{service.title}</span>
            </nav>

            <div className={styles.heroIcon}>
              <Icon name={service.icon as IconName} size={30} />
            </div>

            <h1 className={styles.title}>{service.title}</h1>
            <p className={`lead ${styles.desc}`}>{service.short}</p>

            <div className={styles.ctaRow}>
              <Button to="/contact-us" size="lg">
                {service.ctaLabel}
              </Button>
              <Button to="/services" variant="secondary" size="lg" iconPosition="start">
                All Services
              </Button>
            </div>
          </div>

          <Reveal delay={2} className={styles.statCard}>
            <span className={styles.statValue}>{service.stat.value}</span>
            <span className={styles.statLabel}>{service.stat.label}</span>
            <div className={styles.statDivider} />
            <ul className={styles.statTech}>
              {service.technologies.slice(0, 4).map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-7">
              <span className="subhead">Overview</span>
              <p className={styles.detailText}>{service.detail}</p>

              <span className="subhead">Technologies We Use</span>
              <ul className={styles.techPills}>
                {service.technologies.map((t) => (
                  <li key={t}>
                    <Icon name="code" size={14} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-5">
              <Reveal delay={2} className={styles.sideCard}>
                <h3 className={styles.sideTitle}>What's Included</h3>
                <ul className={styles.capabilityList}>
                  {service.capabilities.map((c) => (
                    <li key={c}>
                      <Icon name="checkCircle" size={18} />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.sideDivider} />
                <h3 className={styles.sideTitle}>Deliverables</h3>
                <ol className={styles.deliverableList}>
                  {service.deliverables.map((d, i) => (
                    <li key={d}>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      {d}
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-custom">
          <div className="row g-4 g-lg-5 align-items-center">
            <div className="col-lg-6">
              <h2 className={styles.whyHeading}>{service.whyPlatform.heading}</h2>
            </div>
            <div className="col-lg-6">
              {service.whyPlatform.paragraphs.map((p) => (
                <p key={p} className={styles.whyParagraph}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <h2>Why Choose Adroit Infosol for {service.title}?</h2>
          </div>
          <div className="row g-4">
            {service.whyUs.map((w, i) => (
              <div className="col-md-6 col-lg-4" key={w.title}>
                <Reveal delay={((i % 6) + 1) as 1} className={styles.whyUsCard}>
                  <span className={styles.whyUsNum}>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <h2>Our {service.title} Capabilities</h2>
          </div>
          <ul className={styles.expertiseGrid}>
            {service.expertise.map((e) => (
              <li key={e}>
                <Icon name="checkCircle" size={18} />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <span className="eyebrow">How We Work</span>
            <h2>Our process for {service.title}</h2>
            <p className="lead">
              A structured approach that keeps your project transparent, on schedule, and aligned with your
              business goals from the first call to launch.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <span className="eyebrow">Explore More</span>
            <h2>Other services you might need</h2>
          </div>
          <div className="row g-4">
            {related.map((s, i) => (
              <div className="col-md-6 col-lg-4" key={s.slug}>
                <ServiceCard service={s} delay={((i % 6) + 1) as 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Ready to start your ${service.title} project?`}
        description="Tell us about your goals and timeline. Our team will get back to you with a clear scope, technology recommendation, and next steps within one business day."
        ctaLabel={service.ctaLabel}
        ctaTo="/contact-us"
      />
    </>
  );
}
