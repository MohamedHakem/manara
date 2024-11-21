'use client';

import { BadgeCheck, ChevronsUpDown, FileClock, Inbox, LogOut, Settings, UserCheck } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

export function NavUser({
  user,
  showTitleEmail = true,
  isDrawer = false,
  drawerOpen,
  iconSize,
  iconColor,
  className
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  showTitleEmail?: boolean;
  mobileBottomNav?: boolean;
  isDrawer?: boolean;
  drawerOpen?: Dispatch<SetStateAction<boolean>>;
  iconSize?: number;
  iconColor?: string;
  className?: string;
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu className={cn('p-1 border', className, isDrawer ? 'rounded-2xl' : 'rounded-lg')}>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className={cn(
                'data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground',
                isDrawer ? 'py-4 h-12' : 'py-1 h-8'
              )}
            >
              <Avatar className={cn('rounded-full', isDrawer ? 'h-10 w-10' : 'h-6 w-6')}>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">MH</AvatarFallback>
              </Avatar>
              {showTitleEmail ? (
                <>
                  <div
                    className={cn(
                      'flex gap-1 flex-1 text-left items-center',
                      isDrawer ? 'text-base' : 'text-sm leading-tight'
                    )}
                  >
                    <span className="truncate font-semibold text-ellipsis overflow-hidden max-w-[60px]">
                      {user.name}
                    </span>
                    <span className="truncate text-xs text-ellipsis overflow-hidden max-w-[89px]">({user.email})</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </>
              ) : null}
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 md:gap-0 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{user.name}</span>
                  <span className="truncate text-xs">{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href="/profile" onClick={() => drawerOpen && drawerOpen(false)}>
                <DropdownMenuItem className={`[&_svg]:size-${iconSize}`}>
                  <UserCheck color={iconColor} />
                  <span>Profile</span>
                </DropdownMenuItem>
              </Link>

              <Link href="/settings" onClick={() => drawerOpen && drawerOpen(false)}>
                <DropdownMenuItem className={`[&_svg]:size-${iconSize}`}>
                  <Settings color={iconColor} />
                  <span>Settings</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/account" onClick={() => drawerOpen && drawerOpen(false)}>
                <DropdownMenuItem className={`[&_svg]:size-${iconSize}`}>
                  <BadgeCheck color={iconColor} />
                  <span>Account</span>
                </DropdownMenuItem>
              </Link>
              {/*                 <DropdownMenuItem className={`[&_svg]:size-${iconSize}`}>

              <Link href="/">
                <Bell color={iconColor} />
                Notifications
                </Link>
              </DropdownMenuItem> */}
              {isDrawer && (
                <Link href="/inbox" onClick={() => drawerOpen && drawerOpen(false)}>
                  <DropdownMenuItem className={`[&_svg]:size-${iconSize}`}>
                    <Inbox color={iconColor} />
                    <span>Inbox</span>
                  </DropdownMenuItem>
                </Link>
              )}
              <Link href="/inbox" onClick={() => drawerOpen && drawerOpen(false)}>
                <DropdownMenuItem className={`[&_svg]:size-${iconSize}`}>
                  <FileClock color={iconColor} />
                  <span>Activity log</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className={`[&_svg]:size-4`}>
              <LogOut color={iconColor} />
              <span className="text-xs">Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
