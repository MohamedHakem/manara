import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Roadmap" rounded="rounded-none" />
          <Callout
            title="Coming soon"
            type="soon"
            description={`Exciting updates are on the way! 🚀\n\nStay tuned to discover the innovative features the Manara team is crafting just for you, and vote on what features would be valuable to add in the future!`}
          />
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
