'use client';

import { SquareArrowOutUpRight, type LucideIcon } from 'lucide-react';
import { ComponentPropsWithoutRef } from 'react';

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
import { Separator } from './ui/separator';

export function NavSecondary({
  items,
  isDrawer = false,
  ...props
}: {
  items: {
    title: string;
    url: string;
    itemType?: string;
    icon: LucideIcon | React.ComponentType<object>;
  }[];
  isDrawer?: boolean;
} & ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const pathname = usePathname();

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        {/* {isDrawer && <Separator className="mb-4" />} */}
        <SidebarMenu>
          {items.map((item, index) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild size={isDrawer ? 'lg' : 'sm'}>
                <Link href={item.url} className={cn(isActiveTab(item.url, pathname) && 'text-orange-600')}>
                  <item.icon />
                  <span>{item.title}</span>
                  {!!item.itemType ? <SquareArrowOutUpRight /> : null}
                </Link>
              </SidebarMenuButton>
              {isDrawer && index !== items.length - 1 ? <Separator /> : null}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
