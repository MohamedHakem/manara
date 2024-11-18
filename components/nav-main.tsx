import { Earth, SquareArrowOutUpRight, type LucideIcon } from 'lucide-react';
import * as React from 'react';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavMain({
  items,
  isDrawer = false,
  ...props
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    itemType?: string;
  }[];
  isDrawer?: boolean;
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    console.log('🚀 ~ isActive ~ href:', href);

    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  if (isDrawer) {
    items = items.filter((item) => item.title === 'Connect');
  }

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size={isDrawer ? 'lg' : 'default'}>
                <Link
                  href={item.url}
                  target={item.itemType === 'external' ? '_blank' : ''}
                  className={cn(
                    isDrawer ? 'border rounded-lg px-4' : '',
                    isActive(item.url) && 'text-orange-600 bg-[#ffa50024]'
                  )}
                >
                  {isDrawer ?  <Earth /> : <item.icon />}
                  <span>{isDrawer ? 'Join Manara Community' : item.title}</span>
                  <div className="ml-auto">
                    {!!item.itemType ? <SquareArrowOutUpRight size={14} color="#787878" /> : null}
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
