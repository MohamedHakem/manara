import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Docs" rounded="rounded-none" />
          <Callout
            title="Coming Soon"
            type="soon"
            description={`Your go-to resource for documentation! 📚\n\nHere you'll find all the guides, tutorials, and reference materials to help you navigate the platform.`}
          />
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
