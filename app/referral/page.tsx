import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Referral" rounded="rounded-none" />
        <Callout
          title="Grow with Your Network"
          type={"soon"}
          description={`Invite your friends and grow together! 🤝\n\nThis page will soon let you share personalized referral links to invite others to join. Earn rewards and help your network access valuable opportunities while contributing to the community.`}
        />
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
