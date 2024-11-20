'use client';

import { BadgeCheck, ChevronsUpDown, Inbox, LogOut, Settings, UserCheck } from 'lucide-react';

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
  closeFunc,
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
  className?: string;
  closeFunc?: Dispatch<SetStateAction<boolean>>;
}) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu className={cn('p-1', className)}>
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
              <Link href="/profile" onClick={() => closeFunc && closeFunc(false)}>
                <DropdownMenuItem>
                  <UserCheck />
                  Profile
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <Link href="/settings" onClick={() => closeFunc && closeFunc(false)}>
                <DropdownMenuItem>
                  <Settings />
                  Settings
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <Link href="/account" onClick={() => closeFunc && closeFunc(false)}>
                <DropdownMenuItem>
                  <BadgeCheck />
                  Account
                </DropdownMenuItem>
              </Link>
              {/* <DropdownMenuItem>
              <Link href="/">
                <Bell />
                Notifications
                </Link>
              </DropdownMenuItem> */}
              <Link href="/inbox" onClick={() => closeFunc && closeFunc(false)}>
                <DropdownMenuItem>
                  <Inbox />
                  Inbox
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
