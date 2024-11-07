import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";
import ExpandingArrow from "@/components/icons/expanding-arrow";

export const contentHeadingClassName =
  "text-xs uppercase text-gray-500 dark:text-white/60";

export const contentLinkCardClassName =
  "rounded-[8px] p-2 transition-colors hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-white/[0.15] dark:active:bg-white/20";

export function ContentLinkCard({
  icon,
  title,
  description,
  descriptionLines = 1,
  className,
  showArrow,
  // itemIndex,
  ...rest
}: {
  icon: ReactNode;
  title: string;
  description?: string;
  descriptionLines?: 1 | 2;
  showArrow?: boolean;
  itemIndex: number;
} & ComponentProps<typeof Link>) {
  return (
    <Link prefetch={true} className={cn("group", contentLinkCardClassName, className)} {...rest}>
      <div className="flex items-center justify-between gap-3">
        {icon}
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-700 dark:text-white">
            {title}
          </p>
          {description && (
            <p
              className={cn(
                "text-xs text-gray-500/80 dark:text-white/60",
                ["line-clamp-1", "line-clamp-2"][descriptionLines - 1],
              )}
            >
              {description}
            </p>
          )}
        </div>
        {showArrow && (
          <ExpandingArrow className={`invisible transition-opacity opacity-0 hover:opacity-100 sm:visible -ml-6 h-4 w-4 text-gray-700  dark:text-white/80`} />
        )}
      </div>
    </Link>
  );
}