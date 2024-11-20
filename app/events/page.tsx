import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Manara Events" rounded="rounded-none" />
        <div className="lg:min-w-[640px] max-w-4xl mx-auto">
          <Callout
            title="Stay Tuned!"
            description={`Exciting events are coming your way! 🎉\n\nThis page will soon list upcoming events, webinars, and meetups hosted by Manara.`}
          />
        </div>
      </div>
      <div className="flex justify-center items-center py-8">
        <Empty />
      </div>
    </div>
  );
}
