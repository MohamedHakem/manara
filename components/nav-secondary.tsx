// import { cn } from "@/lib/utils";
import { SquareArrowOutUpRight, type LucideIcon } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

// import { ContentLinkCard } from "@/components/link-card";
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
              <SidebarMenuButton asChild size="sm">
                {/* <ContentLinkCard
                  key={item.title}
                  href={item.url}
                  itemIndex={index}
                  icon={
                    <item.icon
                      className={cn(
                        "h-5 w-5 shrink-0 text-gray-600 transition-colors dark:text-white/60"
                      )}
                    />
                  }
                  title={item.title}
                  showArrow
                /> */}

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
