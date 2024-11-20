'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';
import { currentUser } from '@/data/current-user';
import { sidebarMainNav } from '@/data/navbar/main-nav-items';
import { sidebarSecondaryNav } from '@/data/navbar/secondary-nav-items';
import { cn, isActiveTab } from '@/lib/utils';
import { BicepsFlexed, GraduationCap, Home, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NavMain } from './nav-main';
import { NavSecondary } from './nav-secondary';
import { NavUser } from './nav-user';
import { NavWordmark } from './nav-wordmark';

export default function MobileBottomNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/learn', icon: GraduationCap, label: 'Learn' },
    { href: '/practice', icon: BicepsFlexed, label: 'Practice' }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-white z-50 py-1">
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center justify-between w-3/4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-auto flex-col items-center min-w-[64px] py-1 px-3',
                'text-xs font-medium text-gray-600 active:scale-90 active:bg-orange-100 active:text-orange-500 duration-200 transition-all ease-in-out',
                'flex-1',
                isActiveTab(item.href, pathname) && 'text-orange-600'
              )}
            >
              <item.icon className="h-6 w-6" fill={isActiveTab(item.href, pathname) ? '#ea580c50' : 'transparent'} />
              <span className="leading-3 text-[10px]">{item.label}</span>
            </Link>
          ))}
        </div>

        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} shouldScaleBackground>
          <DrawerTrigger className="w-1/4 flex-1">
            <div className="flex flex-col items-center min-w-[64px] px-1 text-gray-600">
              <div className="w-8 h-8 p-[1px] flex items-center justify-center rounded-full overflow-hidden border">
                <Avatar className="w-7 h-7 bg-gray-200 rounded-full">
                  <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                  <AvatarFallback className="w-7 h-7 animate-ping">
                    <User size={16} />
                  </AvatarFallback>
                </Avatar>
                {/* <User className="h-6 w-6 p-1 text-gray-600" /> */}
              </div>
              <span className="text-[10px] leading-3">More</span>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <div className="py-1 px-4">
              <DrawerHeader className="p-0">
                <DrawerTitle>
                  <Link
                    prefetch={true}
                    href={'/'}
                    className={cn(
                      'rounded-md px-2 outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-ring',
                      'relative opacity-100'
                    )}
                  >
                    <NavWordmark className="h-10 w-fit" isInApp isDrawer />
                  </Link>
                </DrawerTitle>
              </DrawerHeader>

              <DrawerFooter className="px-0">
                <div>
                  <NavMain items={sidebarMainNav} isDrawer />
                  <NavSecondary isDrawer items={sidebarSecondaryNav} className="mt-auto py-0" closeFunc={setDrawerOpen} />
                </div>
                <NavUser user={currentUser} isDrawer closeFunc={setDrawerOpen} />
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
