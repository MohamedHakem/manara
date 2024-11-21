import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Manara Events" rounded="rounded-none" />
          <Callout
            title="Stay Tuned!"
            type="soon"
            description={`Exciting events are coming your way! 🎉\n\nThis page will soon list upcoming events, webinars, and meetups hosted by Manara.`}
          />
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
