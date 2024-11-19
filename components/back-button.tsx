'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
// import { useIsMobile } from '@/hooks/use-mobile';

export default function BackButton({ className }: { className: string }) {
  const { back } = useRouter();
  const pathname = usePathname();
  // const isMobile = useIsMobile();

  if (pathname === '/' || pathname === '/dashboard') {
    return null;
  }

  return (
    <Button
      // text={isMobile ? '' : 'Back'}
      text=""
      variant="outline"
      size="default"
      DefaultIcon={ChevronLeft}
      className={cn(
        'w-fit h-8 border-0 p-2 pr-3 md:p-3 md:pr-4 [&_svg]:size-5 md:font-semibold text-slate-500',
        className
      )}
      onClick={() => back()}
    />
  );
}
