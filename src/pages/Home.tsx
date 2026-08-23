import { Seo } from "../components/ui/Seo";
import { Button } from "../components/ui/Button";
import { PhotoFrame } from "../components/ui/PhotoFrame";
import { HomeHero } from "../components/sections/HomeHero";
import { StatsStrip } from "../components/sections/StatsStrip";
import { ServiceCard } from "../components/sections/ServiceCard";
import { TestimonialCard } from "../components/sections/TestimonialCard";
import { CtaBanner } from "../components/sections/CtaBanner";
import { TechMarquee } from "../components/sections/TechMarquee";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { services, testimonials } from "../data/content";

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

      <section className="section section-alt">
        <div className="container-custom">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6">
              <PhotoFrame
                src="/images/office2.webp"
                alt="Adroit Infosol team members collaborating in the office"
                ratio="landscape"
              />
            </div>
            <div className="col-lg-6">
              <h2>
                Building technology that moves <span className="text-gradient">businesses forward</span>
              </h2>
              <p className="lead">
                Established in 2013, we've been helping startups, SMEs, and enterprises transform their ideas
                into reliable, scalable digital solutions that solve real business challenges, backed by a
                team of 20+ skilled professionals.
              </p>
              <Button to="/about-us" variant="secondary">
                Learn About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <span className="eyebrow">Our Expertise</span>
            <h2>Technology solutions that help you grow</h2>
            <p className="lead">
              From enterprise software to AI-assisted development, we design solutions that streamline
              operations, automate workflows, and open new opportunities for your business.
            </p>
          </div>
          <div className="row g-4">
            {services.map((s, i) => (
              <div className="col-md-6 col-lg-4" key={s.slug}>
                <ServiceCard service={s} index={i} delay={((i % 6) + 1) as 1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <h2>Why businesses choose Adroit Infosol</h2>
          </div>
          <WhyChooseUs />
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-5">
            <h2>Tools &amp; platforms we build with</h2>
          </div>
          <TechMarquee />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <span className="eyebrow">Client Feedback</span>
            <h2>Real teams, real results, in their own words</h2>
          </div>
          <div className="row g-4">
            {testimonials.map((t, i) => (
              <div className="col-md-6" key={t.name}>
                <TestimonialCard name={t.name} quote={t.quote} delay={((i % 4) + 1) as 1} />
              </div>
            ))}
          </div>
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
