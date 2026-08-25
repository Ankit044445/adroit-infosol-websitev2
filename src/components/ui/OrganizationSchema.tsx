import { useHead } from "@unhead/react";

const SITE_URL = "https://www.adroitinfosol.com";

/** Renders Organization JSON-LD into the head, using only verified business details. */
export function OrganizationSchema() {
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

  useHead({
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(data),
      },
    ],
  });

  return null;
}
