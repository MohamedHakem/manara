"use client"

import {
  BicepsFlexed,
  Chrome,
  GraduationCap,
  Headset,
  NotebookPen,
  Send,
  Users
} from "lucide-react"
import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { NavWordmark } from "@/components/nav-wordmark"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import Link from "next/link"

const data = {
  user: {
    name: "Hakem",
    email: "hi@hakem.pro",
    avatar: "/images/avatars/hakem-pfp.jpg",
  },
  navMain: [
    {
      title: "Learn",
      url: "#",
      icon: NotebookPen,
    },
    {
      title: "Practice",
      url: "#",
      icon: BicepsFlexed,
    },
    {
      title: "Connect",
      url: "https://thisismanara.cicle.so",
      itemType: "external",
      icon: Users,
    },
  ],
  navSecondary: [
    {
      title: "Manara Extension",
      url: "#",
      icon: Chrome,
    },
    {
      title: "Certifications",
      url: "#",
      icon: GraduationCap,
    },
    // {
    //   title: "Docs",
    //   url: "#",
    //   icon: BookCheck,
    // },
    // {
    //   title: "Support",
    //   url: "#",
    //   icon: LifeBuoy,
    // },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
    {
      title: "Help",
      url: "#",
      icon: Headset,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props} className="the-AppSidebar-component">
      <SidebarHeader>
        {/* <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="sm" asChild> */}
        <Link
          // href={backHref ?? "/"}
          href={"/"}
          className={cn(
            "rounded-md px-2 outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-ring",
            // area === currentArea
            // ? 
            "relative opacity-100"
            // : "pointer-events-none absolute opacity-0",
            // (!title || !backHref) && "mb-1",
          )}
        // aria-hidden={area !== currentArea ? true : undefined}
        // {...{ inert: area !== currentArea ? "" : undefined }}
        >
          <NavWordmark className="h-10 w-fit" isInApp />
          {/* <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  <NavWordmark className="h-6" isInApp />
                </div>
              </a> */}
          {/* <svg width="32" height="32" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.744 7.452v.81h.844l-.042 3.29-.801.802-.802.802L4.1 14h-.801l-.042-3.291L0 10.699v-.788l2.459-2.46h3.285ZM14 11.516 11.53 14v-2.484H14Zm-11.53 0V14L0 11.516h2.47Zm4.495.66 1.25 1.1v.704H5.782v-.704l1.184-1.1Zm4.501-4.8 2.46 2.46v.789l-3.257.008-.042 3.292h-.801l-.844-.844-.801-.802-.802-.802-.042-3.29h.844v-.81h3.285Zm2.46-1.656v2.484h-.689l-1.034-1.246 1.034-1.238h.688Zm-13.27 0 1.066 1.238L.656 8.204H0V5.72h.656Zm6.68.828v.828h-.823v-.828h.824ZM10.628 0l.042 3.291 3.256.01v.788l-2.459 2.46H8.181v-.81h-.844l.042-3.292.802-.801.801-.802L9.826 0h.801ZM4.1 0l.844.844.802.802.801.801.042 3.292h-.843l-.001.81H2.459L0 4.088V3.3l3.256-.009L3.298 0h.801ZM2.471.075V2.56H0L2.47.075ZM11.529 0 14 2.484h-2.47V0ZM8.18.02v.67l-1.251.984L5.744.69V.02H8.18Z" fill="#FF773B"></path></svg> */}
        </Link>

        {/* </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
