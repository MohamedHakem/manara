import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Account" rounded="rounded-none" />
          <Callout
            title="Coming Soon"
            type="soon"
            description={`We're improving your account management experience. 🔧\n\nThis page will soon let you update your credentials, review security settings, and manage account preferences with ease.`}
          />
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
