'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
// import { tracks } from '@/lib/constants';
import BackButton from '@/components/back-button';
import { NavWordmark } from '@/components/nav-wordmark';
import { usePathname } from 'next/navigation';
// import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

export default function PageHeader({ title, rounded }: { title: string; rounded?: string }) {
  const pathname = usePathname();
  // const isMobile = useIsMobile();
  const isHomePage = pathname === '/' || pathname === '/dashboard';
  // const title = tracks.filter((track) => `${activeTitle}` === track.slug);

  return (
    <header
      className={cn(
        'flex w-full h-12 md:h-[3rem] z-10 shrink-0 items-center gap-2 border-b sticky top-0 bg-white',
        rounded ? rounded : 'md:rounded-t-2xl'
      )}
    >
      <div className="flex w-full mx-auto justify-between items-center px-4">
        {/* {isMobile === undefined ? null : isMobile ? null : <SidebarTrigger className="hidden md:block -ml-1 flex-none" />} */}
        <SidebarTrigger className="hidden md:flex -ml-1 flex-none" />
        <div className={cn("flex w-full md:max-w-4xl mx-auto", isHomePage ? "lg:w-[48rem]" : "lg:w-[56rem]")}>
          {isHomePage ? (
            <NavWordmark className="w-full md:w-fit flex-1 cursor-pointer" isInApp />
          ) : (
            <div className="w-full flex">
              <BackButton className="z-10" />
              <div className="flex flex-1 items-center justify-center md:-ml-16">
                <div className="flex-grow flex justify-start md:justify-center ml-2 md:ml-9">
                  <span className="md:-ml-[56px] truncate text-base font-semibold md:text-base md:font-semibold text-slate-700 text-ellipsis overflow-hidden max-w-[350px]">
                    {/* <span className="truncate text-base font-semibold md:text-base md:font-semibold text-slate-700 text-ellipsis overflow-hidden max-w-[350px]"> */}
                    {/* {title[0]?.title ? title[0].title : activeTitle} */}
                    {title}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
