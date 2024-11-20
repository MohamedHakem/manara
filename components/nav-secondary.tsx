'use client';

import { Earth, SquareArrowOutUpRight, type LucideIcon } from 'lucide-react';
import { ComponentPropsWithoutRef, Dispatch, SetStateAction } from 'react';

import { Separator } from '@/components/ui/separator';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import UseAnimations from 'react-useanimations';
import activity from 'react-useanimations/lib/activity';
import { cn, isActiveTab } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavSecondary({
  items,
  isDrawer = false,
  drawerOpen,
  ...props
}: {
  items: {
    title: string;
    url: string;
    itemType?: string;
    icon: LucideIcon | React.ComponentType<object>;
  }[];
  isDrawer?: boolean;
  drawerOpen?: Dispatch<SetStateAction<boolean>>;
} & ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const pathname = usePathname();
  const manaraCommunity = {
    title: 'Manara Community',
    url: 'https://thisismanara.circle.so',
    itemType: 'external',
    icon: Earth
  };

  return (
    <SidebarGroup {...props} className={isDrawer ? 'p-0' : ''}>
      <SidebarGroupContent>
        {/* {isDrawer && <Separator className="mb-4" />} */}
        <SidebarMenu className={isDrawer ? 'gap-0 grid grid-cols-[1.05fr_1fr] border rounded-2xl mt-1' : ''}>
          {/* in drawer or on mobile only: if index is 0, render the manaraCommunity item, otherwise render the rest */}
          {isDrawer && (
            <SidebarMenuItem
              key={manaraCommunity.title}
              onClick={() => drawerOpen && drawerOpen(false)}
              className={'border-r'}
            >
              <SidebarMenuButton asChild size={isDrawer ? 'lg' : 'sm'} className={isDrawer ? 'py-1 h-11' : ''}>
                <Link
                  href={manaraCommunity.url}
                  className={cn(
                    isActiveTab(manaraCommunity.url, pathname) && 'text-orange-600',
                    'flex items-center justify-between'
                  )}
                >
                  <div className="flex gap-2 items-center justify-between">
                    {/* <manaraCommunity.icon size={16} /> */}
                    <UseAnimations animation={activity} color="#ea580c" />
                    <span className="text-orange-600">{manaraCommunity.title}</span>
                  </div>
                  {!!manaraCommunity.itemType ? <SquareArrowOutUpRight color="#818181" /> : null}
                  {/* {!!manaraCommunity.itemType ? <UseAnimations  animation={activity} color='#818181' /> : null} */}
                </Link>
              </SidebarMenuButton>
              <Separator />
            </SidebarMenuItem>
          )}

          {items.map(
            (item, index) => (
              <SidebarMenuItem
                key={item.title}
                onClick={() => drawerOpen && drawerOpen(false)}
                className={index % 2 !== 0 ? 'border-r' : ''}
              >
                <SidebarMenuButton asChild size={isDrawer ? 'lg' : 'sm'} className={isDrawer ? 'py-1 h-11' : ''}>
                  <Link href={item.url} className={cn(isActiveTab(item.url, pathname) && 'text-orange-600')}>
                    <item.icon />
                    <span>{item.title}</span>
                    {!!item.itemType ? <SquareArrowOutUpRight /> : null}
                  </Link>
                </SidebarMenuButton>
                {isDrawer && index < items.length - 2 ? <Separator /> : null}
              </SidebarMenuItem>
            )

            // <SidebarMenuItem key={item.title} onClick={() => drawerOpen && drawerOpen(false)} className={index % 2 === 0 ? "border-r" : ""}>
            //   <SidebarMenuButton asChild size={isDrawer ? 'lg' : 'sm'} className={isDrawer ? "py-1 h-11" : ""}>
            //     <Link href={item.url} className={cn(isActiveTab(item.url, pathname) && 'text-orange-600')}>
            //       <item.icon />
            //       <span>{item.title}</span>
            //       {!!item.itemType ? <SquareArrowOutUpRight /> : null}
            //     </Link>
            //   </SidebarMenuButton>
            //   {isDrawer && index !== items.length - 1 ? <Separator /> : null}
            // </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
