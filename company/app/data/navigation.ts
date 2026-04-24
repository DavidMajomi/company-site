type NavLink = {
  href: string;
  label: string;
};

const homeNav: NavLink = {
  href: "/#hero",
  label: "Home",
};

export const productSuiteNav: NavLink = {
  href: "/products",
  label: "Product suite",
};

export const servicesNav: NavLink = {
  href: "/services",
  label: "Services",
};

export const contactNav: NavLink = {
  href: "/contact",
  label: "Get In Touch",
};

export const primaryNavLinks: NavLink[] = [
  homeNav,
  productSuiteNav,
  servicesNav,
  contactNav,
];
