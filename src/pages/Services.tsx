import { Seo } from "../components/ui/Seo";
import { Button } from "../components/ui/Button";
import { PageHero } from "../components/sections/PageHero";
import { ServiceIconCluster } from "../components/sections/ServiceIconCluster";
import { ServiceCard } from "../components/sections/ServiceCard";
import { ProcessSteps } from "../components/sections/ProcessSteps";
import { TechMarquee } from "../components/sections/TechMarquee";
import { CtaBanner } from "../components/sections/CtaBanner";
import { Faq } from "../components/sections/Faq";
import { services } from "../data/content";

export function Services() {
  return (
    <>
      <Seo
        title="Our Services"
        description="From strategy and design to development, deployment, and ongoing support, Adroit Infosol provides end-to-end technology services tailored to your business needs."
        path="/services"
      />

      <PageHero
        eyebrow="Our Services"
        title={
          <>
            End-to-end technology services for every <span className="text-gradient">stage of growth</span>
          </>
        }
        description="From strategy and design to development, deployment, and ongoing support, we provide end-to-end technology services tailored to your business needs."
        visual={<ServiceIconCluster />}
      >
        <Button to="/contact-us" size="lg">
          Schedule a Free Consultation
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-custom">
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
          <div className="text-center mb-5">
            <h2>Great software starts with the right technology</h2>
            <p className="lead mx-auto" style={{ maxWidth: "60ch" }}>
              We leverage modern programming languages, frameworks, cloud platforms, and development tools to
              build secure, scalable, and future-ready digital solutions tailored to your business goals.
            </p>
          </div>
          <TechMarquee />
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <span className="eyebrow">Our Development Process</span>
            <h2>A structured approach, from idea to launch</h2>
            <p className="lead">
              Every successful digital solution starts with a well-defined process. Our structured development
              approach ensures transparency, quality, and collaboration at every stage.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container-custom">
          <div className="text-center mb-5">
            <h2>Common questions before you get started</h2>
          </div>
          <Faq />
        </div>
      </section>

      <CtaBanner
        title="Ready to Build Your Next Digital Solution?"
        description="Whether you're planning a mobile app, enterprise software, IoT solution, or cloud infrastructure, our team is ready to help transform your ideas into reliable, scalable, and future-ready digital solutions."
        ctaLabel="Let's Discuss Your Project"
        ctaTo="/contact-us"
      />
    </>
  );
}
