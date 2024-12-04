// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import Link from 'next/link';
import AnimatedCircularProgressBar from '../ui/animated-circular-progress-bar';

export default function WelcomeProgress({ showOnMobile = false }: { showOnMobile?: boolean }) {
  return (
    <section className={cn(showOnMobile ? 'block md:hidden' : 'hidden lg:block')}>
      <div className="rounded-2xl border">
        <div className="p-6 pb-0 pt-5 text-center">
          <AnimatedCircularProgressBar
            max={3}
            min={0}
            value={1}
            gaugePrimaryColor="rgb(255, 136, 84)"
            gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
            className="w-full"
          />
          <h3 className="text-lg !mt-4 font-medium">Welcome to Manara, Hakem!</h3>
          <p className="text-sm text-muted-foreground">
            Experience your &quot;Aha!&quot; moment by completing these simple steps.
          </p>
        </div>
        <div className="p-6 pb-5 pt-2 mt-2">
          <div className="flex flex-col gap-1.5">
            {['Start your first course', 'Schedule your 1st peer interview', 'Join the Manara Community!'].map(
              (step, i) => (
                <Link
                  key={i} 
                  href={i === 1 ? '/learn' : i === 2 ? '/practice' : i === 3 ? 'https://thisismanara.circle.so' : ''}
                  className={cn(
                    'flex items-center border border-slate-200 px-2.5 py-1.5 rounded-lg justify-between',
                    i === 0 ? 'pointer-events-none bg-[#05060f0d] text-muted-foreground' : '',
                    'active:scale-95 transition-all ease-in-out duration-100',
                    'hover:border-dotted hover:bg-[#05060f10]'
                  )}
                >
                  <span className="text-sm">{step}</span>
                  <CircleCheck
                    className={cn('w-6 h-6', i === 0 ? 'text-white fill-green-400' : 'text-white fill-[#ccc]')}
                  />
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
