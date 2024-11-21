'use client';

import * as React from 'react';

import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';
import { NavWordmark } from '@/components/nav-wordmark';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';
import { currentUser } from '@/data/current-user';
import { sidebarMainNav } from '@/data/navbar/main-nav-items';
import { sidebarSecondaryNav } from '@/data/navbar/secondary-nav-items';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function AppSidebar({ variant = 'inset', ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant={variant} {...props}>
      <SidebarHeader>
        <Link
          prefetch={true}
          href={'/'}
          className={cn(
            'rounded-md px-2 outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-ring',
            'relative opacity-100'
          )}
        >
          <NavWordmark className="h-10 w-fit" isInApp />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarMainNav} iconSize={5} iconColor={'#91918e'} />
        <NavSecondary items={sidebarSecondaryNav} iconSize={5} iconColor={'#91918e'} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="py-[0.1rem] px-[0.7rem]">
        {/* <NavUser user={currentUser} /> */}
        <NavUser user={currentUser} iconSize={5} iconColor={'#91918e'} />
      </SidebarFooter>
    </Sidebar>
  );
}
