import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
// import Image from 'next/image';
import WelcomeProgress from './dashboard-homepage/welcome-progress';
import WidgetsSidebar from './dashboard-homepage/widgets-sidebar';
import StreakTracker from './dashboard-homepage/strike-tracker';
import Link from 'next/link';
import Image from 'next/image';
import { events } from '@/data/events';

export default function DashboardHome() {
  return (
    <div className="flex bg-background">
      <main className="flex flex-col flex-1 px-2 gap-7 md:gap-7">
        {/* Welcome Section */}
        <WelcomeProgress showOnMobile />

        {/* Daily Streak Tracker */}
        <StreakTracker showOnMobile />

        {/* Continue Learning Section */}
        <section>
          <div className="flex items-start justify-between w-full">
            <div className="w-full">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="ghost" className="text-green-500 flex gap-2 items-center border-0 pl-1">
                  <div className="relative w-3 h-3">
                    <span className="absolute bottom-0 top-0 left-0 right-0 w-3 h-3 rounded-full bg-green-400"></span>
                    <span className="absolute bottom-0 top-0 left-0 right-0 w-3 h-3 rounded-full animate-ping bg-green-400"></span>
                  </div>
                  CONTINUE LEARNING
                </Badge>
                {/* <span className="text-sm text-muted-foreground">Course</span> */}
              </div>

              <div className="border rounded-2xl p-4">
                <h1 className="text-xl font-bold mb-2">You don&apos;t have any active courses</h1>
                <p className="text-muted-foreground mb-4 text-sm">Select a course and start learning now!</p>
                <div className="flex flex-col items-center gap-4">
                  <Link href="/learn" className="w-full">
                    <Button className="bg-[#ff773b] text-white" text={'Browse courses'} size={'lg'} />
                  </Link>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-sm text-muted-foreground">7,982 learning this week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Courses */}
        {/* <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Recommended for you</h2>
            <Button variant="link">View all</Button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-600">T</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Typography</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Learn the art and science of typography and create visually appealing, effective...
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Intermediate</span>
                      <span>•</span>
                      <span>4 hours</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-600">UX</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">UX Design Psychology</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Explore user psychology and behavior to design intuitive, engaging, and...
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Advanced</span>
                      <span>•</span>
                      <span>3 hours</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section> */}

        {/* Upcoming Events */}
        <section className="mb-4 border border-gray-200 rounded-2xl p-4 py-5 md:p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl md:text-xl font-semibold">Manara events</h2>
            {/* <Button variant="link">View all</Button> */}
          </div>
          {/* <div className="grid md:grid-cols-2 gap-4"> */}
          <div className="grid grid-cols-1">
            {events.map((event, i) => (
              <Card key={i} className="border-0 shadow-none rounded-2xl overflow-hidden active:scale-100">
                <div className="relative">
                  <Image src={event.img} alt="hero" />
                  <Badge
                    variant="secondary"
                    className="absolute top-3 left-3 md:top-5 md:left-5 bg-[#ff773b20] text-muted-foreground mb-2 px-1 md:px-1.5 py-0.5 md:py-1 text-[10px] md:text-xs font-normal"
                  >
                    {event.type}
                  </Badge>
                </div>
                <CardContent className="p-4 pt-3 md:p-4 border border-t-0 border-[#e5e7eb94] rounded-2xl rounded-t-none">
                  <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <div className="flex flex-col h-11 w-full">
                      <h3 className="font-semibold">{event.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{event.date}</span>
                        <span>•</span>
                        <span>{event.time}</span>
                        <span>•</span>
                        <span>{event.attending}</span>
                      </div>
                    </div>
                    <Link href={event.link} target="_blank" className="w-full md:w-fit mt-3">
                      <Button
                        variant={'outline'}
                        text={'Watch'}
                        size={'lg'}
                        className="text-[#ff773b] bg-[#ff773b20] border-0 w-full md:w-28 shadow-none font-semibold"
                      />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Career Quiz Section */}
        {/* <section className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">NOT SURE WHERE TO START?</p>
                  <h2 className="text-xl font-bold mb-2">Take the Uxcel Pulse career quiz</h2>
                  <p className="text-muted-foreground mb-4">
                    Complete our short quiz and get personalized learning recommendations tailored to your role, level,
                    and knowledge.
                  </p>
                  <Button>Take our quiz</Button>
                </div>
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              </div>
            </CardContent>
          </Card>
        </section> */}

        {/* Resources */}
        {/* <section>
          <h2 className="text-xl font-bold mb-4">Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Circle Community', icon: 'discord' },
              // { title: 'Reddit Community', icon: 'reddit' },
              // { title: 'Uxcel Events', icon: 'calendar' },
              { title: 'Figma Resources', icon: 'figma' }
            ].map((resource, i) => (
              <Card key={i} className="hover:bg-accent transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <h3 className="font-semibold">{resource.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}
      </main>

      {/* Sidebar */}
      <WidgetsSidebar />
    </div>
  );
}
