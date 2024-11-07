import { SquareArrowOutUpRight, type LucideIcon } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    itemType?: string
    icon: LucideIcon
  }[]
} & ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size="default">
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                  {!!item.itemType ? <SquareArrowOutUpRight /> : null}
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
