import { useEffect } from "react";

const SITE_URL = "https://www.adroitinfosol.com";

/** Injects Organization JSON-LD once, using only verified business details. */
export function OrganizationSchema() {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Adroit Infosol",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
      foundingDate: "2013",
      email: "sales@adroitinfosol.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "A 219, Monalisa Business Center, Manjalpur",
        addressLocality: "Vadodara",
        addressRegion: "Gujarat",
        postalCode: "390011",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.linkedin.com/company/adroitinfosol/",
        "https://www.instagram.com/adroitinfosolteam/",
        "https://www.facebook.com/AdroitInfosolTeam/",
      ],
    };

    let el = document.getElementById("org-schema") as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.id = "org-schema";
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }, []);

  return null;
}
