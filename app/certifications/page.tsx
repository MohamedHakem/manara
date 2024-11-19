import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <PageHeader activeTitle="Certifications" rounded="rounded-none" />
      <div className="flex justify-center items-center py-8">
        <Empty />
      </div>
    </div>
  );
}
