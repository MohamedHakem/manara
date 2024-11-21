import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Showcase" rounded="rounded-none" />
        <Callout
          title="Highlight Your Achievements"
          type="soon"
          description={`Put your skills in the spotlight! 🌟\n\nThis page will allow you to showcase your completed projects and professional work, while enabling others to view, vote, and engage with your creations.  
            \nGet feedback, gain recognition, and inspire others within the community. Stay tuned for updates on how to start building your interactive portfolio here!`}
        />
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
