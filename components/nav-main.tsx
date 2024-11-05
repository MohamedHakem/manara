import * as React from "react"
import { SquareArrowOutUpRight, type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    itemType?: string
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url} target={item.itemType === "external" ? "_blank" : ""} >
                  <item.icon />
                  <span>{item.title}</span>
                  <div className="ml-auto">{!!item.itemType ? <SquareArrowOutUpRight size={14} color="#787878" /> : null}</div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
