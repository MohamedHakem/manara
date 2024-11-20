import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Inbox" rounded="rounded-none" />
        <div className="lg:min-w-[640px] max-w-4xl mx-auto">
          <Callout
            title="Coming Soon"
            description={`We're actively building this feature to enhance your experience. Stay tuned! 📬\n\nThis page will soon be your hub for all notifications, support messages, and much more.`}
          />
        </div>
      </div>
      <div className="flex justify-center items-center py-8">
        <Empty />
      </div>
    </div>
  );
}
