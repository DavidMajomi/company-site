type NavLink = {
  href: string;
  label: string;
};

export const heroHref = "/#hero";

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
  productsNav,
  servicesNav,
  contactNav,
];

export { industries } from "./industries";
