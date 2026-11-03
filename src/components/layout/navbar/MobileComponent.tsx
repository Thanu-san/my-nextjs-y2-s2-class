"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, type NavLink } from "@/lib/nav-link";
import { SublinkNavbarComponent } from "./SublinkNavbarComponent";

export const MobileComponent = () => {
  return (
    <div className="block lg:hidden py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://cdn.shadcnblocks.com/shadcnblocks/images/logo/shadcnblocks-logo.svg"
            className="max-h-8 w-auto dark:invert"
            alt="Logo"
            width={140}
            height={32}
            unoptimized
          />
        </Link>
        <Sheet>
          <SheetTrigger render={<Button variant="outline" size="icon" />}>
            <Menu className="size-4" />
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="https://cdn.shadcnblocks.com/shadcnblocks/images/logo/shadcnblocks-logo.svg"
                    className="max-h-8 w-auto dark:invert"
                    alt="Logo"
                    width={140}
                    height={32}
                    unoptimized
                  />
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 p-4">
              <Accordion className="flex w-full flex-col gap-4">
                {navLinks.map((item) => renderMobileMenuItem(item))}
              </Accordion>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
                <Button className="w-full">Sign up</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

const renderMobileMenuItem = (item: NavLink) => {
  if (item.items && item.items.length > 0) {
    return (
      <AccordionItem key={item.name} value={item.name} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.name}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SublinkNavbarComponent key={subItem.name} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.name}
      href={item.href}
      className="text-md font-semibold hover:text-primary transition-colors py-2"
    >
      {item.name}
    </Link>
  );
};
