import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Inbox" rounded="rounded-none" />
          <Callout
            title="Coming Soon"
            type="soon"
            description={`We're actively building this feature to enhance your experience. Stay tuned! 📬\n\nThis page will soon be your hub for all notifications, support messages, and much more.`}
          />
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
