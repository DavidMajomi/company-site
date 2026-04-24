type FooterContactLine = {
  variant: "link";
  href: string;
  label: string;
  external?: boolean;
};

export const footerContactLines: FooterContactLine[] = [
  {
    variant: "link",
    href: "phone",
    label: "Phone",
  },
  {
    variant: "link",
    href: "mailto:info@company.com",
    label: "info@company.com",
  },
  {
    variant: "link",
    href: "https://www.company.com",
    label: "www.company.com",
    external: true,
  },
];
