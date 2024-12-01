import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Zap } from 'lucide-react';

export default function StreakTracker({ showOnMobile = false }: { showOnMobile?: boolean }) {
  return (
    <div className={cn('w-full max-w-sm', showOnMobile ? 'block md:hidden' : 'hidden lg:block')}>
      {/* <div className="flex items-center gap-2 mb-2 px-1">
        <Zap className="w-11 h-11 text-yellow-400 fill-yellow-400" />
        <span className="text-4xl font-semibold">1</span>
        <div className="flex flex-col">
          <span className="text-sm font-medium">Day Streak</span>
          <span className="text-xs text-muted-foreground">40/100 PX</span>
        </div>
        <div className="ml-auto h-5">
          <button className="text-muted-foreground hover:text-foreground rounded-full">
            <span className="sr-only">Information</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </button>
        </div>
      </div> */}

      <Card className="shadow-none">
        <div className="flex items-center gap-2 p-4 py-3 border-b">
          <Zap className="w-10 h-10 text-yellow-400 fill-yellow-400" />
          <span className="text-4xl font-semibold">1</span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Day Streak</span>
            <span className="text-xs text-muted-foreground">40/100 PX</span>
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

        <div className="flex items-center gap-2 px-5 pb-2 h-10">
          <Zap className="w-5 h-5 text-blue-400 fill-blue-400" />
          <span className="text-sm text-muted-foreground">Longest streak: 1 day</span>
        </div>
      </Card>
    </div>
  );
}
