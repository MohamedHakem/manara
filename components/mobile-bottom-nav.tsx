'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';
import { currentUser } from '@/data/current-user';
import { sidebarSecondaryNav } from '@/data/navbar/secondary-nav-items';
import { deckNavItems } from '@/lib/constants';
import { cn, isActiveTab } from '@/lib/utils';
import { User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NavSecondary } from './nav-secondary';
import { NavUser } from './nav-user';
import { NavWordmark } from './nav-wordmark';

export default function MobileBottomNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  // console.log('deckNavItems: ', deckNavItems);
  // console.log("isActiveTab('avatar', pathname): ", isActiveTab('avatar', pathname));

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-white z-100 py-1">
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center justify-between w-3/4">
          {deckNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-auto flex-col items-center min-w-[64px] py-1 px-3',
                'text-xs font-medium text-gray-600 duration-50 transition-all ease-in-out',
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
              <div
                className={cn(
                  'w-8 h-8 p-[1px] flex items-center justify-center rounded-full overflow-hidden',
                  isActiveTab('avatar', pathname) ? 'border-[#ea580c] border-2 p-[2px]' : 'border'
                )}
              >
                <Avatar
                  className={cn('w-7 h-7 bg-gray-200 rounded-full', isActiveTab('avatar', pathname) ? 'w-6 h-6' : '')}
                >
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
            <div className="flex flex-col gap-2 py-2 px-4">
              <DrawerHeader className="p-0 h-[58px] gap-0">
                <DrawerTitle className="h-[58px]">
                  <Link
                    prefetch={true}
                    href={'/'}
                    className={cn(
                      'outline-none transition-opacity focus-visible:ring-2 focus-visible:ring-ring',
                      'relative opacity-100 block h-[58px]'
                    )}
                  >
                    <NavWordmark className="h-10 w-fit" isInApp isDrawer />
                  </Link>
                </DrawerTitle>
                <DrawerDescription />
              </DrawerHeader>

              <DrawerFooter className="gap-3 p-0">
                <div>
                  <NavSecondary
                    isDrawer
                    items={sidebarSecondaryNav}
                    className="py-0"
                    iconSize={5}
                    iconColor={'#91918e'}
                    drawerOpen={setDrawerOpen}
                  />
                </div>
                <NavUser 
                  user={currentUser} 
                  isDrawer 
                  drawerOpen={setDrawerOpen} 
                  iconSize={5} 
                  iconColor={'#91918e'}
                />
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
}
