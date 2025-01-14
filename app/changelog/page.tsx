import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Changelog" rounded="rounded-none" />
          <Callout
            title="What's New?"
            type='soon'
            description={`Stay up-to-date with the latest updates! 🚀\n\nThis page will soon showcase the latest features, bug fixes, and improvements to keep you informed.`}
          />
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
