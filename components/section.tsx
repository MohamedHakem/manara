import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export default function Section({
  title,
  desc,
  children,
  gridOrder,
  gridOrderMD,
  mdColSpan,
  mdRowSpan,
  className,
  scrollable
}: {
  title: string;
  desc?: string;
  children?: ReactNode;
  gridOrder?: string;
  gridOrderMD?: string;
  mdColSpan?: string;
  mdRowSpan?: string;
  className?: string;
  scrollable?: boolean;
}) {
  return (
    <section
      className={cn(
        'bg-white rounded-2xl overflow-auto flex flex-col h-auto max-h-[25rem] inset border relative',
        gridOrder ? `order-${gridOrder}` : '',
        gridOrderMD ? `md:order-${gridOrderMD}` : '',
        mdColSpan ? `md:col-span-${mdColSpan}` : '',
        mdRowSpan ? `md:row-span-${mdRowSpan}` : '',
        scrollable ? 'px-0 pt-3.5' : 'p-3',
        className
      )}
      id={title.toLowerCase()}
    >
      <div className="relative">
        <h2 className={`font-bold ${scrollable ? 'px-3 border-b pb-3 text-xl md:text-lg' : 'text-xl mb-1'}`}>
          {title}
        </h2>
      </div>
      {desc ? <p>{desc}</p> : null}
      {children ? children : null}
    </section>
  );
}
