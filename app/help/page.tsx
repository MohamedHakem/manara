import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Help" rounded="rounded-none" />
        <div className="lg:min-w-[640px] max-w-4xl mx-auto">
          <Callout
            title="How Can We Help?"
            description={`Need assistance? 🤔\n\nThis page will provide you with FAQs, guides, and a way to contact support for quick help.`}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
