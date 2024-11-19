import { TypeOptions } from '@/lib/types';
import { FcIdea } from 'react-icons/fc';

export default function Callout({ type }: { type: TypeOptions }) {
  return (
    <div className="flex min-w-full md:rounded-2xl bg-[#fbf3db] py-3 px-2 md:px-3 prose prose-sm">
      <FcIdea size={30} />

      <div className="w-full flex-1 ml-3 mt-1">
        <h4 className="mt-0">In this {type} you&apos;ll learn:</h4>
        <ol>
          <li>Set Expectations: Tell what they&apos;ll learn!</li>
          <li>Explain: Focus on 2-3 key points.</li>
          <li>Recap: Reinforce and assure they’ve got it.</li>
          {/* <li>Explain the Thing to Them (2–3 Main Points)</li> */}
          {/* <li>
              Summarize What They Just Learned, everyone needs a hug and be assured that they, in fact, &apos;got
              it&apos;
            </li> */}
          {/* <li>
              Recap main takeaways to reinforce their understanding & give them confidence that they&apos;ve
              &apos;got it.&apos; Everyone appreciates a little encouragement!
            </li> */}
        </ol>
      </div>
    </div>
  );
}
