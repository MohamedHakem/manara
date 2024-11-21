'use client';

import { cn } from '@/lib/utils';
import * as Popover from '@radix-ui/react-popover';
import { Candy, Home, LayoutGrid, Type } from 'lucide-react';
// import { useParams } from 'next/navigation';
import { MouseEvent, useCallback, useState } from 'react';
import { toast } from 'sonner';
import { Button, ButtonProps } from '@/components/ui/button';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { Logo } from '@/components/Logo';
import { Wordmark } from '@/components/wordmark';
import { logoSVG, wordmarkSVG } from '@/lib/constants';

/**
 * The Manara logo with a custom context menu for copying/navigation,
 * for use in the top site nav
 */

export function NavWordmark({
  variant = 'full',
  isInApp,
  isDrawer,
  className
}: {
  variant?: 'full' | 'symbol';
  isInApp?: boolean;
  isDrawer?: boolean;
  className?: string;
}) {
  // const { domain = 'manara.tech' } = useParams() as { domain: string };

  // const { toast } = useToast()
  // const { theme } = useContext(NavContext);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleOnClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsPopoverOpen(true);
  }, []);

  const [, copyToClipboard] = useCopyToClipboard();

  function copy(text: string) {
    toast.promise(copyToClipboard(text), {
      success: 'Copied to clipboard!',
      error: 'Failed to copy to clipboard'
    });
  }

  return (
    <Popover.Root open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <Popover.Anchor asChild>
        <div onClick={handleOnClick} className="w-full max-w-full">
          {variant === 'full' ? (
            <div
              className={cn(
                'flex justify-between items-center cursor-pointer',
                isDrawer ? 'border rounded-2xl py-2 px-3' : ''
              )}
            >
              <Wordmark className={className} />
              <Candy size={14} color={'orange'} />
            </div>
          ) : (
            <Logo className={cn('h-8 w-8 transition-all duration-75 active:scale-95', className)} />
          )}
        </div>
      </Popover.Anchor>
      <Popover.Portal>
        <Popover.Content
          sideOffset={14}
          align="start"
          className={cn(
            'z-50 -mt-1.5',
            !isInApp && '-translate-x-8'
            // theme === "dark" && "dark",
          )}
          onClick={(e) => {
            e.stopPropagation();
            setIsPopoverOpen(false);
          }}
        >
          <div className="grid gap-1 rounded-lg border border-gray-200 bg-white p-2 drop-shadow-md sm:min-w-[240px] dark:border-white/[0.15] dark:bg-black">
            <ContextMenuButton
              text="Copy Logo as SVG"
              variant="outline"
              onClick={() => copy(logoSVG)}
              DefaultIcon={Logo}
              HoverIcon={Logo}
            />
            <ContextMenuButton
              text="Copy Wordmark as SVG"
              variant="outline"
              onClick={() => copy(wordmarkSVG)}
              DefaultIcon={Type}
              HoverIcon={Type}
            />
            {/* If it's in the app or it's a domain placeholder page (not manara.tech homepage), show the home button */}
            {/* {isInApp || domain != 'manara.tech' ? ( */}
            <ContextMenuButton
              text="Dashboard"
              variant="outline"
              onClick={() => window.open(isInApp ? '/' : 'https://app.manara.tech', '_self')}
              DefaultIcon={LayoutGrid}
              HoverIcon={LayoutGrid}
            />
            <ContextMenuButton
              text="Home Page"
              variant="outline"
              onClick={() => window.open(`https://manara.tech/`, '_blank')}
              DefaultIcon={Home}
              HoverIcon={Home}
            />
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function ContextMenuButton({ className, ...rest }: ButtonProps) {
  return (
    <Button
      isWordmark
      className={cn(
        'h-9 justify-start px-3 border-0 font-medium hover:text-gray-700 dark:text-white/70 dark:hover:bg-white/[0.15] dark:hover:text-white',
        className
      )}
      {...rest}
    />
  );
}
