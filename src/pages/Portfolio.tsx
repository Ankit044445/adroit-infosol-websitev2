import { useState } from "react";
import { Seo } from "../components/ui/Seo";
import { Button } from "../components/ui/Button";
import { PageHero } from "../components/sections/PageHero";
import { PlatformIconCluster } from "../components/sections/PlatformIconCluster";
import { CtaBanner } from "../components/sections/CtaBanner";
import { portfolio } from "../data/content";
import styles from "./Portfolio.module.scss";

const toneCycle: Array<"green" | "sky" | "indigo"> = ["green", "sky", "indigo"];
const categories = ["All Projects", "Mobile Apps", "Web Portals", "LimeSurvey", "IoT Solutions"] as const;
type Category = (typeof categories)[number];

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<Category>("All Projects");

  const filtered = portfolio.filter((p) => {
    if (activeTab === "All Projects") return true;
    if (activeTab === "Mobile Apps") return p.platforms.includes("Android") || p.platforms.includes("iOS") || p.platforms.includes("Hybrid");
    if (activeTab === "Web Portals") return p.platforms.includes("Web");
    if (activeTab === "LimeSurvey") return p.platforms.includes("LimeSurvey");
    if (activeTab === "IoT Solutions") return p.platforms.includes("IoT");
    return true;
  });

  return (
    <>
      <Seo
        title="Portfolio"
        description="A selection of real projects Adroit Infosol has delivered across Android, iOS, web, IoT, and LimeSurvey since 2013."
        path="/portfolio"
      />

      <PageHero
        title={
          <>
            Projects we've shipped, <span className="text-gradient">platforms we've mastered</span>
          </>
        }
        description="Most of our client work is covered by NDA, but here's a selection of projects we've been able to showcase publicly over the years."
        visual={<PlatformIconCluster />}
      >
        <Button to="/contact-us" size="lg">
          Start Your Project
        </Button>
      </PageHero>

      <section className="section">
        <div className="container-custom">
          <div className="section-head section-head--center">
            <h2>Real Builds, Across <span className="text-gradient">Every Platform We Support</span></h2>
            <p className="lead">
              Client confidentiality means most engagements stay under NDA. These are the projects we've had
              permission to share publicly.
            </p>
          </div>

          <div className={styles.filterTrack} role="tablist" aria-label="Filter portfolio by platform">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeTab === cat}
                className={`${styles.filterPill} ${activeTab === cat ? styles.filterPillActive : ""}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filtered.map((p, i) => {
              const tone = toneCycle[i % 3];
              return (
                <div key={p.name} className={styles.cardCol}>
                  <article className={`${styles.card} ${styles[tone]}`}>
                    <div className={styles.thumb}>
                      <img
                        src={p.image}
                        alt={`${p.name} project mark`}
                        width={480}
                        height={360}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.name}>{p.name}</h3>
                      <div className={styles.tags}>
                        {p.platforms.map((tag) => (
                          <span key={tag} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a Project in Mind?"
        description="Whether it's a mobile app, enterprise platform, or IoT solution, tell us about it and we'll show you how we'd approach it."
        ctaLabel="Let's Talk"
        ctaTo="/contact-us"
      />
    </>
  );
}
