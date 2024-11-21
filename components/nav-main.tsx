import { SquareArrowOutUpRight, type LucideIcon } from 'lucide-react';
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
import { AnimatedUsersIcon } from './icons/animated-users-icon';
import { AnimatedHomeIcon } from './icons/animated-home-icon';

export function NavMain({
  items,
  isDrawer = false,
  iconSize,
  iconColor,
  ...props
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon | typeof AnimatedUsersIcon;
    itemType?: string;
  }[];
  isDrawer?: boolean;
  iconSize?: number;
  iconColor?: string;
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const pathname = usePathname();

  return (
    <SidebarGroup {...props} className={isDrawer ? 'p-0 rounded-2xl' : ''}>
      <SidebarGroupContent>
        <SidebarMenu className="gap-1">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                size={isDrawer ? 'lg' : 'default'}
                // className={cn('hover:text-orange-600 active:text-orange-600')}
              >
                <Link
                  href={item.url}
                  target={item.itemType === 'external' ? '_blank' : ''}
                  className={cn(
                    `py-[2px] [&_svg]:size-${iconSize || '4'}`,
                    isDrawer ? 'border rounded-2xl px-4' : '',
                    // isActiveTab(item.url, pathname) && 'text-orange-600 hover:text-sidebar-[#ea580c] bg-[#ffa50024]'
                    isActiveTab(item.url, pathname) && 'bg-[#e5e5e580] font-semibold [&_svg]:stroke-slate-900',
                    item.icon === AnimatedUsersIcon || item.icon === AnimatedHomeIcon ? '!p-0' : 'px-2 gap-3'
                  )}
                >
                  {/* {isDrawer ? <Earth /> : <item.icon size={20} color={iconColor} iconColor={iconColor} className="group-hover:bg-accent" />} */}
                  {item.icon === AnimatedUsersIcon || item.icon === AnimatedHomeIcon ? (
                    <item.icon size={20} color={iconColor} iconColor={iconColor} title={item.title} isExternal={item.icon === AnimatedUsersIcon} />
                  ) : (
                    <>
                      <item.icon size={20} color={iconColor} />
                      <span>{item.title}</span>
                      {!!item.itemType ? (
                        <div className="ml-auto">
                          <SquareArrowOutUpRight size={12} color={iconColor} className="!h-3" />
                        </div>
                      ) : null}
                    </>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
