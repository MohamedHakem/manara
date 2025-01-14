import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Settings" rounded="rounded-none" />
          <Callout
            title="Coming Soon"
            type="soon"
            description={`We're actively building this feature. Stay tuned for updates! 🎉\n\nThis page will soon host all your account settings to make managing your profile seamless and convenient.`}
          />
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
