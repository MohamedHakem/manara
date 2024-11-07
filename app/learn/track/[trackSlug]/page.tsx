import PageContent from "@/components/page-content";
import PageHeader from "@/components/page-header";
import { tracks } from "@/lib/constants";

// Generate static params using the slugs from `tracks`
export async function generateStaticParams() {
  return tracks.map((track) => ({
    slug: track.slug,
  }));
}

// the landing page of the track, all courses listed, click one to go to /track/{slug}/course/{course}
export default async function LearningPathPage(props: { params: Promise<{ trackSlug: string }> }) {
  const params = await props.params;
  const { trackSlug } = params;

  return (
    <>
      <PageHeader activeTitle={trackSlug} />
      {/* in the page content below, you'll pass a prop to determine the current content, just the tag "aws-1", 
      and in the PageContent, you should fetch and render the content based on the tag passed to it, in this case "aws-1" is the tag of a learning path
      so you'll fetch the content of the learning path with the tag "aws-1" and render it in the PageContent component, if it's a tag of a course,
      you'll fetch the course content and render it in the PageContent component, you can use the same component for both learning path and course content,
      if it's a tag of a module, you'll fetch the module content and render it in the PageContent component, you can use the same component for all of them, 
      if it's a tag of a lesson, you'll fetch the lesson content and render it in the PageContent component, you can use the same component for all of them,      
      */}
      {/* example: PageContent type={"track"} slug={slug} */}

      <PageContent type={"track"} slug={trackSlug} />
    </>
  );
}
