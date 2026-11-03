"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navLinks, type NavLink } from "@/lib/nav-link";
import { SublinkNavbarComponent } from "./SublinkNavbarComponent";

export const DesktopComponent = () => {
  return (
    <nav className="hidden grid-cols-[1fr_auto_1fr] items-center py-4 lg:grid">
      <Link href="/" className="flex items-center gap-2 justify-self-start">
        <Image
          src="https://cdn.shadcnblocks.com/shadcnblocks/images/logo/shadcnblocks-logo.svg"
          className="max-h-8 w-auto dark:invert"
          alt="Logo Shadcn"
          width={140}
          height={32}
          unoptimized
        />
      </Link>

      <NavigationMenu className="justify-self-center">
        <NavigationMenuList className="gap-1">
          {navLinks.map((item) => renderMenuItem(item))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-2 justify-self-end">
        <Button variant="outline" size="sm">
          Log in
        </Button>
        <Button size="sm">Sign up</Button>
      </div>
    </nav>
  );
};

const renderMenuItem = (item: NavLink) => {
  if (item.items && item.items.length > 0) {
    return (
      <NavigationMenuItem key={item.name}>
        <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink
              key={subItem.name}
              className="w-80"
              render={<SublinkNavbarComponent item={subItem} />}
            />
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.name}>
      <NavigationMenuLink
        render={
          <Link
            href={item.href}
            className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
          >
            {item.name}
          </Link>
        }
      />
    </NavigationMenuItem>
  );
};
