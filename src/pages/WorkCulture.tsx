import { Seo } from "../components/ui/Seo";
import { Button } from "../components/ui/Button";
import { PhotoFrame } from "../components/ui/PhotoFrame";
import { PageHero } from "../components/sections/PageHero";
import { FeatureCard } from "../components/sections/FeatureCard";
import { PhotoCarousel } from "../components/sections/PhotoCarousel";
import { ReviewsCarousel } from "../components/sections/ReviewsCarousel";
import { CtaBanner } from "../components/sections/CtaBanner";
import { perks, employeeReviews } from "../data/content";
import type { IconName } from "../assets/icons/Icon";

const toneCycle: Array<"green" | "sky" | "indigo"> = ["green", "sky", "indigo"];

export function WorkCulture() {
  return (
    <>
      <Seo
        title="Work Culture"
        description="At Adroit Infosol, we believe a great workplace is built on collaboration, continuous learning, mutual respect, and celebrating success together."
        path="/work-culture"
      />

      <PageHero
        eyebrow="Life at Adroit Infosol"
        title={
          <>
            A workplace built on trust, growth, and <span className="text-gradient">celebration</span>
          </>
        }
        description="At Adroit Infosol, we believe a great workplace is built on collaboration, continuous learning, mutual respect, and celebrating success together. From delivering innovative software to celebrating milestones and festivals, we strive to create an environment where people enjoy working and growing together."
        visual={
          <PhotoFrame
            src="/images/wc-festival-celebrations.webp"
            alt="Adroit Infosol team celebrating project delivery and workplace milestones in Vadodara"
            ratio="landscape"
          />
        }
      >
        <Button to="/contact-us" size="lg">
          Get in Touch
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-custom">
          <PhotoCarousel
            eyebrow="Behind the Scenes"
            title="A glimpse into our workplace"
            description="Real moments from our Vadodara office — where our engineering team collaborates, innovates, and builds together."
            items={[
              {
                src: "/images/office2.webp",
                alt: "Adroit Infosol open workstation area with team branding wall",
                caption: "Modern development workstations",
              },
              {
                src: "/images/office4.webp",
                alt: "Adroit Infosol conference and meeting room",
                caption: "Team huddles & sprint planning",
              },
              {
                src: "/images/office6.webp",
                alt: "Adroit Infosol tech infrastructure and workspace",
                caption: "Engineering & testing environment",
              },
              {
                src: "/images/wc-office-outing.webp",
                alt: "Adroit Infosol team collaborating and celebrating together",
                caption: "Team collaboration & innovation",
              },
            ]}
          />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <h2>People-First Benefits Built for <span className="text-gradient">Long-Term Growth</span></h2>
            <p className="lead">
              We invest in our people with supportive benefits, continuous learning opportunities, and a healthy work-life balance.
            </p>
          </div>
          <div className="row g-4">
            {perks.map((p, i) => (
              <div className="col-md-6 col-lg-3" key={p.title}>
                <FeatureCard
                  icon={p.icon as IconName}
                  title={p.title}
                  desc={p.desc}
                  delay={((i % 6) + 1) as 1}
                  tone={toneCycle[i % 3]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <ReviewsCarousel
            eyebrow="Hear It From Our Team"
            title="What it's like to work here"
            items={employeeReviews.map((r) => ({
              name: r.name,
              role: `${r.role} · ${r.tenure}`,
              quote: r.quote,
              photo: r.photo,
            }))}
          />
        </div>
      </section>

      <CtaBanner
        title="Join Our Team"
        description="Ready to grow your career in a collaborative, learning-driven environment? We're always looking for talented people to join Adroit Infosol."
        ctaLabel="Get in Touch"
        ctaTo="/contact-us"
      />
    </>
  );
}
