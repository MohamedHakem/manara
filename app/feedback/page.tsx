import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Feedback" rounded="rounded-none" />
          <Callout
            title="Share Your Thoughts"
            type="soon"
            description={`We’re all ears! 👂\n\nThis page is where you can share your thoughts, suggestions, and feedback, whether it's about bugs, feature requests, or anything else to help us improve. \n\nYou can also vote on ideas submitted by others to help prioritize what's most important to you. \n\nYour voice truly makes a difference in shaping the future of the platform!`}
          />
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
