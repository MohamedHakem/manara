import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="AWS Live Sessions" rounded="rounded-none" />
        <div className="lg:min-w-[640px] max-w-4xl mx-auto">
          <Callout
            title="Coming Soon"
            description={`Exciting updates are on the way! 🌟\n\nThis page will soon allow you to join AWS live sessions, stay informed about important dates, deadlines, session links, meeting notes and recordings, and more, all in one convenient place.`}
          />
        </div>
      </div>
      <div className="flex justify-center items-center py-8">
        <Empty />
      </div>
    </div>
  );
}
