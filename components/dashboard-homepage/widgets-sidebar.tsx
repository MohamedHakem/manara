import StreakTracker from './strike-tracker';
import WelcomeProgress from './welcome-progress';

export default function WidgetsSidebar() {
  return (
    <aside className="hidden lg:block w-96 py-6 px-8 space-y-6">
      {/* Welcome Section */}
      <WelcomeProgress />

      {/* Welcome Section */}
      {/* <section className="block md:hidden mb-8">
        <Card>
          <CardHeader className="p-4 pb-0">
            <div className="flex items-center justify-between">
            <span className="text-sm">0/3</span>
          </div>
            <CardTitle className="text-lg">Welcome to Manara, Hakem!</CardTitle>
            <p className="text-sm text-muted-foreground">
              Experience your &quot;Aha!&quot; moment by completing these simple steps.
            </p>
          </CardHeader>
          <CardContent className="p-4 pt-3">
            <div className="space-y-1">
              {[
                'Verify your email!',
                'Start your first course',
                'Schedule your 1st peer interview',
                'Join the Manara Community!'
              ].map((step, i) => (
                <div key={i} className="flex items-center border px-4 py-3 rounded-2xl justify-between">
                  <span className="text-sm">{step}</span>
                  <CircleCheck className="w-5 h-5 text-[#ff773b8a]" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section> */}

      {/* Day Streak */}
      <StreakTracker />
      {/* Day Streak */}
      {/* <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Day Streak</CardTitle>
            <Info className="w-4 h-4 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <div key={i} className="text-center">
                <div className="text-sm mb-2">{day}</div>
                <Lightning className="w-6 h-6 text-muted-foreground mx-auto" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card> */}

      {/* Quartz League */}
      {/* <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Quartz League</CardTitle>
            <ChevronRight className="w-4 h-4" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">7 days left to join</p>
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-yellow-100 rounded-lg flex items-center justify-center">🏆</div>
          </div>
          <p className="text-sm text-center mt-4">Earn PX to join this week&apos;s leaderboard</p>
        </CardContent>
      </Card> */}

      {/* Users Learning */}
      {/* <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <Image
              key={i}
              src="/placeholder.svg"
              alt="User"
              width={24}
              height={24}
              className="rounded-full border-2 border-background"
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">7,982 learning this week</span>
      </div> */}
    </aside>
  );
}
