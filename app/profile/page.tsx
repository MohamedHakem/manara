import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Your Profile" rounded="rounded-none" />
          <Callout
            title="Coming Soon"
            type="soon"
            description={`We're working on enhancing your profile experience. 🎯\n\nSoon, you'll be able to update your personal details, manage preferences, and more all in one place.`}
          />
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
