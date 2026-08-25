import { Seo } from "../components/ui/Seo";
import { Button } from "../components/ui/Button";
import { PhotoFrame } from "../components/ui/PhotoFrame";
import { PageHero } from "../components/sections/PageHero";
import { StatsStrip } from "../components/sections/StatsStrip";
import { FeatureCard } from "../components/sections/FeatureCard";
import { TeamCard } from "../components/sections/TeamCard";
import { PhotoCarousel } from "../components/sections/PhotoCarousel";
import { CtaBanner } from "../components/sections/CtaBanner";
import { values, leadership, devTeam } from "../data/content";
import type { IconName } from "../assets/icons/Icon";
import styles from "./About.module.scss";

const toneCycle: Array<"green" | "sky" | "indigo"> = ["green", "sky", "indigo"];

export function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Established in 2013 by Kalpana Patel and Vishal Patel, Adroit Infosol is a leading enterprise IT solutions and product development company based in Vadodara, India."
        path="/about-us"
      />

      <PageHero
        eyebrow="About Adroit Infosol"
        title={
          <>
            Building Technology That Moves <span className="text-gradient">Businesses Forward</span>
          </>
        }
        description="Established in 2013 by Kalpana Patel and Vishal Patel, Adroit Infosol is a leading enterprise IT solutions and product development company based in Vadodara, India. Built on technical expertise and driven by excellence, we are passionate about creating innovative, well-designed digital products that deliver seamless and engaging user experiences."
        visual={
          <PhotoFrame
            src="/images/office3.webp"
            alt="Adroit Infosol conference room with company branding wall in Vadodara, India"
            ratio="landscape"
          />
        }
      >
        <Button to="/contact-us" size="lg">
          Schedule a Free Consultation
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-custom">
          <StatsStrip />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-custom">
          <div className={styles.introContainer}>
            <div className={styles.introRow}>
              <div>
                <p className={styles.introPrimary}>
                  At Adroit Infosol, our team of experienced IT professionals is enthusiastic about transforming
                  ideas into reliable digital solutions that help businesses grow. We believe in thinking beyond
                  conventional approaches and focus on delivering creative, strategic, transparent, affordable,
                  and practical solutions that are easy to implement.
                </p>
              </div>
              <div>
                <p className={styles.introSecondary}>
                  From the very beginning, our founders have been committed to providing cost-effective digital
                  solutions without compromising on quality. They have always believed in building long-term
                  relationships with clients through trust, transparency, and consistent delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <h2>The Principles Behind <span className="text-gradient">Everything We Build</span></h2>
            <p className="lead">
              Our core values shape how we collaborate, solve complex technical challenges, and build long-term value for our clients.
            </p>
          </div>
          <div className="row g-4">
            {values.map((v, i) => (
              <div className="col-md-6 col-lg-4" key={v.title}>
                <FeatureCard
                  icon={v.icon as IconName}
                  title={v.title}
                  desc={v.desc}
                  delay={((i % 6) + 1) as 1}
                  tone={toneCycle[i % 3]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-custom">
          <PhotoCarousel
            eyebrow="Inside Adroit Infosol"
            title="A glimpse into our workspace"
            description="A look at where the team works, collaborates, and builds - our Vadodara office."
            items={[
              {
                src: "/images/office2.webp",
                alt: "Adroit Infosol open workstation area and collaboration floor",
                caption: "Modern workstation floor",
              },
              {
                src: "/images/office6.webp",
                alt: "Adroit Infosol developer dual-screen workstations",
                caption: "Engineering & build environment",
              },
              {
                src: "/images/office5.webp",
                alt: "Adroit Infosol team discussion and sprint planning",
                caption: "Client collaboration & sprint planning",
              },
              {
                src: "/images/wc-birthday-celebrations.webp",
                alt: "Adroit Infosol team celebrating project launch and delivery milestones",
                caption: "Milestones & project celebrations",
              },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <h2>The Minds Behind <span className="text-gradient">Adroit Infosol</span></h2>
            <p className="lead">
              Experienced software architects, engineers, and product leaders committed to technical excellence.
            </p>
          </div>

          <div className={styles.teamGroup}>
            <h3 className={styles.teamSubheading}>Executive Leadership</h3>
            <div className="row g-4">
              {leadership.map((l, i) => (
                <div className="col-md-6" key={l.name}>
                  <TeamCard name={l.name} role={l.role} bio={l.bio} photo={l.photo} delay={((i % 6) + 1) as 1} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.teamGroup}>
            <h3 className={styles.teamSubheading}>Core Engineering Team</h3>
            <div className="row g-4">
              {devTeam.map((m, i) => (
                <div className="col-6 col-md-4 col-lg-3" key={m.name}>
                  <TeamCard name={m.name} role={m.role} photo={m.photo} delay={((i % 6) + 1) as 1} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Looking for a Trusted Technology Partner?"
        description="We combine technical expertise, transparent communication, and long-term commitment to help businesses build scalable digital solutions with confidence."
        ctaLabel="Contact Our Team"
        ctaTo="/contact-us"
      />
    </>
  );
}

