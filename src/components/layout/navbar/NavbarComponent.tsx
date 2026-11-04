"use client";

import { usePathname } from "next/navigation";
import { DesktopComponent } from "./DesktopComponent";
import { MobileComponent } from "./MobileComponent";

export const NavbarComponent = () => {
  const pathname = usePathname();

  if (pathname?.startsWith("/dashboard")) {
    return null;
  }

  return (
    <section className="border-b bg-background">
      <div className="container mx-auto px-4">
        <DesktopComponent />
        <MobileComponent />
      </div>
    </section>
  );
};
