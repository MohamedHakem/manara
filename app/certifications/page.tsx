import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Certifications" rounded="rounded-none" />
        <div className="lg:min-w-[640px] max-w-4xl mx-auto">
          <Callout
            title="Stay Tuned!"
            description={`We're working on adding your certifications here. 📜\n\nOnce available, this page will allow you to view, manage, download, and track your certifications with ease.`}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
