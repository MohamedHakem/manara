import { Earth, SquareArrowOutUpRight, type LucideIcon } from 'lucide-react';
import * as React from 'react';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import { cn, isActiveTab } from '@/lib/utils';
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

  // if (isDrawer) {
  //   items = items.filter((item) => item.title === 'Connect');
  // }

  console.log(
    'nav-main ~ isActiveTab(items[2].url, pathname): ',
    ', pathname: ',
    pathname,
    ', items[2].url: ',
    items[2].url,
    ', result: ',
    isActiveTab(items[2].url, pathname)
  );

  return (
    <SidebarGroup {...props} className={isDrawer ? 'p-0 rounded-2xl' : ''}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size={isDrawer ? 'lg' : 'default'} className={cn("hover:text-orange-600 active:text-orange-600")}>
                <Link
                  href={item.url}
                  target={item.itemType === 'external' ? '_blank' : ''}
                  className={cn(
                    isDrawer ? 'border rounded-2xl px-4' : '',
                    isActiveTab(item.url, pathname) && 'text-orange-600 hover:text-sidebar-[#ea580c] bg-[#ffa50024]'
                  )}
                >
                  {isDrawer ? <Earth /> : <item.icon />}
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
