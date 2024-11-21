import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Leaderboard" rounded="rounded-none" />
          <Callout
            title="Top the Charts"
            type="soon"
            description={`Compete and climb the leaderboard! 🚀\n\nTrack your progress and see how you stack up against your peers. 
      Showcase your achievements and stay motivated as you work your way to the top!`}
          />
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
