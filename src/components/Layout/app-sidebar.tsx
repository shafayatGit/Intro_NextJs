import * as React from "react";

import { SearchForm } from "@/src/components/modules/authentication/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/src/components/ui/sidebar";
import Link from "next/link";
import { adminRoutes } from "@/src/routes/adminRoutes";
import { userRoutes } from "@/src/routes/userRoutes";
import { Routes } from "@/src/types";
import { VersionSwitcher } from "./version-switcher";
import { Roles } from "@/src/constants/roles";

// This is sample data
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
};
export function AppSidebar({
  user,
  ...props
}: {
  user: { role: string } & React.ComponentProps<typeof Sidebar>;
}) {
  let routes: Routes[] = [];
  if (user.role === Roles.admin) routes = adminRoutes;
  else if (user.role === Roles.user) {
    routes = userRoutes;
  } else {
    routes = [];
  }
  return (
    <Sidebar {...props}>
      <Link
        href="/"
        className="flex items-center gap-2"
      >
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
          alt="Shadcn UI Navbar"
        />
        <span className="text-lg font-semibold tracking-tighter">
          Next Blog
        </span>
      </Link>

      <SidebarContent>
        {routes.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton render={<Link href={item.url} />}>
                      {item.title}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
