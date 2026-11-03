import type { ReactNode } from "react";

export interface NavLink {
  name: string;
  href: string;
  description?: string;
  icon?: ReactNode;
  items?: NavLink[];
}

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Category", href: "/category" },
  { name: "Product", href: "/product" },
  { name: "About", href: "/about" },
];
