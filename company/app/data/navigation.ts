type NavLink = {
  href: string;
  label: string;
};

const homeNav: NavLink = {
  href: "/#hero",
  label: "Home",
};

export const productsNav: NavLink = {
  href: "/products",
  label: "Products",
};

export const servicesNav: NavLink = {
  href: "/services",
  label: "Services",
};

export const contactNav: NavLink = {
  href: "/contact",
  label: "Contact",
};

export const primaryNavLinks: NavLink[] = [
  homeNav,
  productsNav,
  servicesNav,
  contactNav,
];

export { industries } from "./industries";
