import type { CSSProperties } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Seo } from "../components/ui/Seo";
import { Reveal } from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { GradientBlob } from "../components/ui/GradientBlob";
import { Icon, type IconName } from "../assets/icons/Icon";
import { ProcessSteps } from "../components/sections/ProcessSteps";
import { ServiceCard } from "../components/sections/ServiceCard";
import { CtaBanner } from "../components/sections/CtaBanner";
import { services, techIconSlugs } from "../data/content";
import styles from "./ServiceDetail.module.scss";

type MaskStyle = CSSProperties & { "--mark-src": string };

function formatServiceTitle(title: string) {
  const parts = title.split(" ");
  if (parts.length <= 2) {
    return (
      <>
        {parts[0]} <span className="text-gradient">{parts.slice(1).join(" ")}</span>
      </>
    );
  }
  const splitIndex = parts.length > 3 ? 2 : 1;
  return (
    <>
      {parts.slice(0, splitIndex).join(" ")}{" "}
      <span className="text-gradient">{parts.slice(splitIndex).join(" ")}</span>
    </>
  );
}

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
        <GradientBlob variant="indigo" className={`blob-decor ${styles.blobA}`} />
        <GradientBlob variant="green" className={`blob-decor ${styles.blobB}`} />
        <div className={`container-custom ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <nav className={styles.crumbs} aria-label="Breadcrumb">
              <Link to="/services">Services</Link>
              <Icon name="arrowRight" size={13} />
              <span>{service.title}</span>
            </nav>

            <h1 className={styles.title}>{formatServiceTitle(service.title)}</h1>
            <p className={`lead ${styles.desc}`}>{service.tagline}</p>

            <div className={styles.ctaRow}>
              <Button to="/contact-us" size="lg">
                {service.ctaLabel}
              </Button>
              <Button to="/services" variant="secondary" size="lg" iconPosition="start">
                All Services
              </Button>
            </div>
          </div>

          <Reveal delay={2} className={styles.heroIconFrame}>
            <Icon name={service.icon as IconName} size={96} />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-8">
              <p className={styles.detailText}>{service.detail}</p>

              <ul className={styles.techPills}>
                {service.technologies.map((t) => {
                  const slug = techIconSlugs[t];
                  return (
                    <li key={t}>
                      {slug ? (
                        <span
                          className={styles.techMark}
                          style={{ "--mark-src": `url(https://cdn.simpleicons.org/${slug})` } as MaskStyle}
                        />
                      ) : (
                        <Icon name="code" size={14} />
                      )}
                      {t}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="col-lg-4">
              <div className={styles.statCards}>
                <Reveal delay={1} className={styles.statCard}>
                  <strong>13+</strong>
                  <span>Years Delivering</span>
                </Reveal>
                <Reveal delay={2} className={styles.statCard}>
                  <strong>{service.expertise.length}+</strong>
                  <span>Specializations</span>
                </Reveal>
              </div>
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
            <h2>Why Choose Us for <span className="text-gradient">{service.title}</span></h2>
          </div>
          <div className="row g-4">
            {service.whyUs.map((w, i) => (
              <div className="col-md-6" key={w.title}>
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
            <h2>Technical Capabilities &amp; Specializations</h2>
            <p className="lead">
              Specialized domain expertise and production-ready architectural patterns tailored for your requirements.
            </p>
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
            <h2>Development Lifecycle &amp; Delivery</h2>
            <p className="lead">
              A structured approach that keeps your project transparent, on schedule, and aligned with your
              business goals from the first sprint to launch.
            </p>
          </div>
          <ProcessSteps steps={service.process} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <h2>Complementary <span className="text-gradient">Engineering Services</span></h2>
            <p className="lead">
              Complementary technical capabilities across mobile, web, cloud, and connected devices.
            </p>
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
        title={service.cta.title}
        description={service.cta.description}
        ctaLabel={service.ctaLabel}
        ctaTo="/contact-us"
      />
    </>
  );
}
