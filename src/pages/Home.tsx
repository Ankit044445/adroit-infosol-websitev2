import { Seo } from "../components/ui/Seo";
import { Button } from "../components/ui/Button";
import { HomeHero } from "../components/sections/HomeHero";
import { StatsStrip } from "../components/sections/StatsStrip";
import { WhoWeAre } from "../components/sections/WhoWeAre";
import { ServiceCard } from "../components/sections/ServiceCard";
import { ReviewsCarousel } from "../components/sections/ReviewsCarousel";
import { CtaBanner } from "../components/sections/CtaBanner";
import { TechMarquee } from "../components/sections/TechMarquee";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { services, globalReviews } from "../data/content";

export function Home() {
  return (
    <>
      <Seo
        title="Web, Mobile & Software Development Company"
        description="Adroit Infosol is an enterprise IT solutions and product development company in Vadodara, India. Explore our web, mobile, cloud, and IoT services."
        path="/"
      />

      <HomeHero />

      <section className="section">
        <div className="container-custom">
          <StatsStrip />
        </div>
      </section>

      <WhoWeAre />

      <section className="section">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <h2>Scalable Solutions Built to <span className="text-gradient">Power Your Growth</span></h2>
            <p className="lead">
              From enterprise software to modern mobile apps, we design scalable digital solutions that streamline operations and accelerate business growth.
            </p>
          </div>
          <div className="row g-4">
            {services.slice(0, 6).map((s, i) => (
              <div className="col-md-6 col-lg-4" key={s.slug}>
                <ServiceCard service={s} index={i} delay={((i % 6) + 1) as 1} />
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Button to="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <h2>Why Businesses Choose Adroit Infosol</h2>
            <p className="lead">
              Proven engineering practices, transparent communication, and an uncompromising commitment to long-term software quality.
            </p>
          </div>
          <WhyChooseUs />
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <h2>Tools &amp; Platforms We Build With</h2>
            <p className="lead">
              Battle-tested programming languages, modern frameworks, and robust cloud infrastructure tailored to each project's performance and security requirements.
            </p>
          </div>
          <TechMarquee />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-custom">
          <ReviewsCarousel
            eyebrow="A Track Record That Spans Continents"
            title={
              <>
                13+ Years of Client Feedback, <span className="text-gradient">From Every Time Zone</span>
              </>
            }
            items={globalReviews}
          />
        </div>
      </section>

      <CtaBanner
        title="Let's Build Something Great Together"
        description="Whether you're developing a new mobile app, modernizing enterprise software, or looking for a reliable technology partner, our team is ready to help you turn your ideas into successful digital solutions."
        ctaLabel="Schedule a Free Consultation"
        ctaTo="/contact-us"
      />
    </>
  );
}
