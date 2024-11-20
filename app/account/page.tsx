import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Account" rounded="rounded-none" />
        <div className="lg:min-w-[640px] max-w-4xl mx-auto">
          <Callout
            title="Coming Soon"
            description={`We're improving your account management experience. 🔧\n\nThis page will soon let you update your credentials, review security settings, and manage account preferences with ease.`}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
