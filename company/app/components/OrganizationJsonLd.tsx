import Script from "next/script";
import { site } from "../site";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: [site.shortName, site.nameDisplay],
    url: site.url,
    logo: `${site.url}/vatheon_systems_black.svg`,
    email: site.contactEmail,
    description: site.organizationDescription,
  };

  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
