import DashboardHome from '@/components/dashboard-home';
import PageHeader from '@/components/page-header';
// import Section from '@/components/section';

export default function Home() {
  // put here the actual dashboard with all stats, summaries, dates, progress, events, community, etc.

  // maybe group them in a tabbed component?
  const tiles = [
    {
      title: 'Upcoming Events',
      content: 'content'
    },
    {
      title: 'Deadlines',
      content: 'content'
    },
    {
      title: 'Reminders',
      content: 'content'
    },
    {
      title: 'Progress',
      content: 'content'
    },
    {
      title: 'Continue Learning',
      content: 'content'
    },
    {
      title: 'Streak Stats',
      content: 'content'
    },
    {
      title: 'New Learning Path!',
      content: 'content'
    },
    {
      title: 'General Stats',
      content: 'content'
    },
    {
      title: 'Latest from the Community',
      content: 'content'
    },
    {
      title: 'Community Announcements',
      content: 'content'
    }
  ];

  return (
    // <div className="w-full lg:w-[56rem] md:max-w-4xl mx-auto flex flex-col gap-4">
    <div className="flex flex-col gap-4 pb-24">
      <PageHeader title="Dashboard Homepage" rounded="rounded-none" />
      <div className="flex flex-col gap-4 my-4 px-4 w-full md:max-w-4xl lg:w-[48rem] lg:max-w-[48rem] xl:w-[66rem] xl:max-w-[66rem] mx-auto">
        {/* <Section title="Dashboard home component is here"> */}
        <DashboardHome />
        {/* </Section> */}
        <div className="flex flex-col gap-4 my-4 px-4 w-full lg:w-[48rem] xl:w-[56rem] md:max-w-4xl mx-auto">
          {tiles.map((tile) => (
            <div key={tile.title} className="flex items-center justify-center h-48 rounded-2xl bg-zinc-100">
              <div className="text-2xl md:text-5xl font-semibold text-zinc-300">{tile.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
