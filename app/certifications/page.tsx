import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Certifications" rounded="rounded-none" />
          <Callout
            title="Stay Tuned!"
            type="soon"
            description={`We're working on adding your certifications here. 📜\n\nOnce available, this page will allow you to view, manage, download, and track your certifications with ease.`}
          />
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
