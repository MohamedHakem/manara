import { YouTubeEmbed } from '@next/third-parties/google';
// import { Lightbulb } from 'lucide-react';
import { FcIdea } from 'react-icons/fc';

export default function LessonContent({ slug }: { slug: string }) {
  console.log('🚀 ~ LessonContent ~ slug:', slug);
  const videoId = '5Tox7WqP3QQ'; // get this from db by lesson slug
  // if you want to start the video from 10 seconds and end at 30 seconds, or more params
  // const videoParams = 'controls=0&start=10&end=30';
  const videoParams = ''; // for now, no params

  return (
    <div className="flex flex-col w-full max-w-[45rem] xl:min-w-[47rem] p-4 prose prose-sm mx-auto">
      <div>
        <h2 className="my-[.5em]">[intro] In this lesson you&apos;ll learn:</h2>
        <ol>
          <li>first thing</li>
          <li>2nd thing</li>
        </ol>
      </div>
      <YouTubeEmbed videoid={videoId} params={videoParams} />
      <div>
        <p className="mb-0">Here&apos;s a recap of what was discussed in the video:</p>
        <ol className="mt-0">
          <li>first thing</li>
          <li>2nd thing</li>
        </ol>
      </div>

      <div className="flex rounded-2xl bg-[#fbf3db] pt-4 px-2 md:px-3">
        {/* <Lightbulb size={34} /> */}
        <FcIdea size={30} />

        <div className="w-full flex-1 ml-1 md:ml-3 mt-1">
          <h4 className="mt-0">Here&apos;s how to teach someone something:</h4>
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
    </div>
  );
}
