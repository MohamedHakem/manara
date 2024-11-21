import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Manara Chrome Extension" rounded="rounded-none" />
          <Callout
            title="Coming Soon"
            type="soon"
            description={`Get ready to enhance your experience! 🌐\n\nThis page will soon introduce the Manara Chrome Extension, packed with useful features to boost your Leetcode and interview preparation.`}
          />
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
