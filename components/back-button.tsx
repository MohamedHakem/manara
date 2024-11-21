'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
// import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
// import { useIsMobile } from '@/hooks/use-mobile';
import { AnimatedArrowLeftIcon } from '@/components/icons/animated-left-arrow-icon';

export default function BackButton({ className }: { className: string }) {
  const { back } = useRouter();
  const pathname = usePathname();
  // const isMobile = useIsMobile();

  if (pathname === '/' || pathname === '/dashboard') {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="lg"
      iconSize={8} // [&_svg]:size-4 to 7
      iconColor="#91918e"
      iconStrokeWidth={2}
      // DefaultIcon={ChevronLeft}
      DefaultIcon={AnimatedArrowLeftIcon}
      // className={cn('w-fit h-10 border-0 py-1 px-2 md:p-3 [&_svg]:size-5 md:font-semibold text-slate-500', className)}
      className={cn('w-fit h-10 border-0 p-0 md:font-semibold text-slate-900', className)}
      onClick={() => back()}
    />
  );
}
