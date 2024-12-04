import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Zap } from 'lucide-react';

export default function StreakTracker({ showOnMobile = false }: { showOnMobile?: boolean }) {
  return (
    <div className={cn('w-full max-w-sm', showOnMobile ? 'block md:hidden' : 'hidden lg:block')}>
      <Card className="shadow-none rounded-2xl">
        <div className="flex items-center gap-2 p-4 py-3 border-b">
          <Zap className="w-10 h-10 text-yellow-400 fill-yellow-400" />
          <span className="text-4xl font-semibold">1</span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Day Streak</span>
            <div className="flex gap-1 items-center text-xs text-muted-foreground">
              <span className="">Longest streak: 1 day</span>
              <Zap className="w-4 h-4 text-blue-400 fill-blue-400" />
            </div>
          </div>
        </div>

        {/* <Separator /> */}

        <div className="grid grid-cols-7 gap-1.5 py-3 px-4">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
            <div
              key={i}
              className={cn(
                'flex flex-col items-center gap-3 px-2.5 py-2',
                i === 0 ? 'border border-slate-100 rounded-lg bg-primary-foreground' : ''
              )}
            >
              <Zap
                className={`w-8 h-8 ${i === 0 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`}
              />
              <span className="text-xs text-muted-foreground">{day}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
