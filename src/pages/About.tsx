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
            src="/images/office4.webp"
            alt="Adroit Infosol developers working together at the office"
            ratio="square"
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
          <div className="row g-4">
            <div className="col-lg-6">
              <p className="lead">
                At Adroit Infosol, our team of experienced IT professionals is enthusiastic about transforming
                ideas into reliable digital solutions that help businesses grow. We believe in thinking beyond
                conventional approaches and focus on delivering creative, strategic, transparent, affordable,
                and practical solutions that are easy to implement.
              </p>
            </div>
            <div className="col-lg-6">
              <p className="lead">
                From the very beginning, our founders have been committed to providing cost-effective digital
                solutions without compromising on quality. They have always believed in building long-term
                relationships with clients through trust, transparency, and consistent delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <span className="eyebrow">What Guides Our Work</span>
            <h2>The principles behind everything we build</h2>
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
                src: "/images/office3.webp",
                alt: "Adroit Infosol meeting room with collaborative branding wall",
                caption: "Collaboration space",
              },
              {
                src: "/images/office6.webp",
                alt: "Adroit Infosol developer workstation area",
                caption: "Where the team builds",
              },
              {
                // Temporary stock photo until a real celebration photo is provided.
                src: "/images/stock-celebration.webp",
                alt: "Team celebrating a project milestone",
                caption: "Milestones & celebrations",
              },
              {
                // Temporary stock photo until a real client-meeting photo is provided.
                src: "/images/stock-client-meeting.webp",
                alt: "Team in a client discussion",
                caption: "Client collaboration",
              },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <h2>The people behind Adroit Infosol</h2>
          </div>
          <span className="eyebrow mb-4">Leadership Team</span>
          <div className="row g-4 mb-5">
            {leadership.map((l, i) => (
              <div className="col-md-6" key={l.name}>
                <TeamCard name={l.name} role={l.role} bio={l.bio} photo={l.photo} delay={((i % 6) + 1) as 1} />
              </div>
            ))}
          </div>

          <span className="eyebrow mb-4">Development Team</span>
          <div className="row g-4">
            {devTeam.map((m, i) => (
              <div className="col-6 col-md-4 col-lg-3" key={m.name}>
                <TeamCard name={m.name} role={m.role} photo={m.photo} delay={((i % 6) + 1) as 1} />
              </div>
            ))}
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

