"use client"

import {
  BicepsFlexed,
  Chrome,
  GraduationCap,
  Headset,
  Home,
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
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Learn",
      url: "/learn",
      icon: NotebookPen,
    },
    {
      title: "Practice",
      url: "#",
      icon: BicepsFlexed,
    },
    {
      title: "Connect",
      url: "https://thisismanara.circle.so",
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
        <Link
          prefetch={true}
          href={"/"}
          className={cn(
            "rounded-md px-2 outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-ring",
            "relative opacity-100"
          )}
        >
          <NavWordmark className="h-10 w-fit" isInApp />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="py-[0.1rem] px-[0.7rem]">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
