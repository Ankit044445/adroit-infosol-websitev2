import { useEffect } from "react";
import { useHead, useSeoMeta } from "@unhead/react";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

const SITE_NAME = "Adroit Infosol";
const SITE_URL = "https://www.adroitinfosol.com";

/** Per-route SEO tags, rendered into the real HTML at prerender time via Unhead. */
export function Seo({ title, description, path = "/" }: SeoProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  useSeoMeta({
    title: fullTitle,
    description,
    ogTitle: fullTitle,
    ogDescription: description,
    ogType: "website",
    ogUrl: url,
    ogSiteName: SITE_NAME,
    twitterCard: "summary_large_image",
    twitterTitle: fullTitle,
    twitterDescription: description,
  });

  useHead({
    link: [{ rel: "canonical", href: url }],
  });

  // scroll to top on route change (client-side only, not part of the head)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [path]);

  return null;
}
