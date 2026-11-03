"use client"

import Link from "next/link";
import { navLinks } from "@/lib/nav-link";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathName = usePathname();

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
      <ul className="flex items-center gap-50">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={pathName === link.href ? "text-red-500" : "hover:underline"}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
