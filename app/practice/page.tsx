import Callout from '@/components/callout';
import Empty from '@/components/empty-state';
import PageHeader from '@/components/page-header';

export default function PracticePage() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      <div>
        <PageHeader title="Practice Interviews" rounded="rounded-none" />
          <Callout
            title="Get Ready for Success"
            type="soon"
            description={`Sharpen your skills! 🎯\n\nThis page is designed to help you prepare for interviews with practice questions, mock interviews, and expert tips. You can even schedule mock interviews with peers or experts to get real-time feedback. Whether you're aiming for your first job or making a career change, we've got you covered. \n\nStart practicing now to boost your confidence and nail your next interview!`}
          />
      </div>
      <div className="flex justify-center items-center">
        <Empty />
      </div>
    </div>
  );
}
