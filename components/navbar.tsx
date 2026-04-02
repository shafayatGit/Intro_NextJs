"use client";

import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <section className={cn("py-4", className)}>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <a
            href="https://www.shadcnblocks.com"
            className="flex items-center gap-2"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
              alt="Shadcn UI Navbar"
            />
            <span className="text-lg font-semibold tracking-tighter">
              Next Blog
            </span>
           
          </a>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/blogs"
                  className={navigationMenuTriggerStyle()}
                >
                  Blogs
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={navigationMenuTriggerStyle()}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
             <AnimatedThemeToggler/>
            <Button variant={"outline"}>
              <Link href="/login">Login</Link>
            </Button>
            <Button>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger
              className="lg:hidden"
              render={<Button variant="outline" size="icon" />}
            >
              <MenuIcon className="h-4 w-4" />
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <a
                    href="https://www.shadcnblocks.com"
                    className="flex items-center gap-2"
                  >
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                      className="max-h-8"
                      alt="Shadcn UI Navbar"
                    />
                    <span className="text-lg font-semibold tracking-tighter">
                      Next Blog
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  <Link href="/" className="font-medium">
                    Home
                  </Link>
                  <Link href="/blogs" className="font-medium">
                    Blogs
                  </Link>
                  <Link href="/about" className="font-medium">
                    About
                  </Link>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button variant={"outline"}>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button>
                    <Link href="/register">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };
