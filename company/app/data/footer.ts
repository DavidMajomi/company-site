type FooterContactLine = {
  variant: "link";
  href: string;
  label: string;
  external?: boolean;
};

export const footerContactLines: FooterContactLine[] = [
  {
    variant: "link",
    href: "tel:+1-555-000-0000",
    label: "+1 (555) 000-0000",
  },
  {
    variant: "link",
    href: "mailto:info@vatheon.com",
    label: "info@vatheon.com",
  },
  {
    variant: "link",
    href: "https://www.vatheon.com",
    label: "www.vatheon.com",
    external: true,
  },
];
