import { Card, CardContent, CardFooter } from '@/components/ui/card';
import DynamicLink from '@/components/ui/dynamic-link';
import { CardListProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import NumberFlow from '@number-flow/react';
import { CheckCircledIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function CardList({ items, type = 'track' }: CardListProps) {

  if (!type) return notFound();

  return (
    <div className={cn('p-4 md:py-0 w-full mx-auto max-w-4xl')}>
      <div className={cn('grid grid-cols-1 md:grid-cols-2', type === 'track' ? 'lg:grid-cols-3 gap-4' : 'gap-3')}>
        {items.map((item, index) => (
          <DynamicLink
            key={item.id}
            includePathname
            href={`${type}/${item.slug}`}
            className="block h-full rounded-lg focus:outline-none focus:outline-orange-300
              focus:outline-dashed focus:outline-2 focus:outline-offset-2 min-h-[67px]"
          >
            <Card
              title={`Start Learning: ${item.title}`}
              className={cn(
                'flex h-full md:min-h-max hover:bg-muted/50 p-0 shadow-sm aspect-auto overflow-hidden',
                type === 'track' ? 'flex-col min-h-[236px]' : ''
              )}
            >
              <CardContent
                className={cn(
                  'flex p-0 relative h-auto min-w-16',
                  type === 'track' ? 'flex-1 md:max-h-[137px] aspect-264/137' : 'justify-center items-center p-1',
                  type === 'track' ? 'border-b' : 'border-r'
                )}
                style={{ backgroundColor: `${item?.bgColor ? item.bgColor : '#eee'}` }}
              >
                {type === 'track' && 'thumbImg' in item ? (
                  <Image
                    src={`/images/thumbnails/${item.thumbImg}`}
                    alt={`course: ${item.title}`}
                    fill
                    className="relative object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    quality={65}
                    decoding="sync"
                    loading="eager"
                    priority
                  />
                ) : (
                  <div className="px-2 py-1 rounded-full">
                    {'completedItems' in item && item.completedItems === item.totalItems ? (
                      // <CircleCheck color="#00b744" size={24} />
                      <CheckCircledIcon color="#00b744" height={28} width={28} />
                    ) : (
                      <NumberFlow value={index + 1} format={{ notation: 'standard' }} willChange />
                    )}
                  </div>
                )}
              </CardContent>

              <CardFooter className={cn('block py-2 px-[10px]')}>
                <h2 className="inline text-sm md:text-xs text-foreground mr-2">{item.title}</h2>
                {'completedItems' in item && <ProgressBadge current={item.completedItems} total={item.totalItems} />}

                {'estimatedHours' in item && item.completedItems !== item.totalItems && (
                  <RemainingTimeBadge hours={item.estimatedHours} />
                )}
              </CardFooter>
            </Card>
          </DynamicLink>
        ))}
      </div>
    </div>
  );
}

const ProgressBadge = ({ current, total }: { current: number; total: number }) => (
  <span className="inline-block bg-green-50 text-green-700 border border-green-200 text-xs rounded-sm px-1 py-[2px]">
    {current}/{total}
  </span>
);

const RemainingTimeBadge = ({ hours }: { hours: number }) => (
  <span className="ml-2 inline-block bg-orange-50 text-orange-700 border border-orange-200 text-xs rounded-sm px-1 py-[2px]">
    {hours}h
  </span>
);
