"use client";

import { usePathname } from "next/navigation";

export function FooterComponent() {
  const pathname = usePathname();

  if (pathname?.startsWith("/dashboard")) {
    return null;
  }

  return <footer className="bg-red-600 text-white p-4 text-center">Footer</footer>;
}
