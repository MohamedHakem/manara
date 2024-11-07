import {
  PageContentLearn,
  PageContentTrack,
  PageContentCourse,
  PageContentModule,
  PageContentLesson
} from "@/components/content"

type TypeOptions = "track" | "course" | "module" | "lesson";

export default function PageContent({ type, slug }: { type?: TypeOptions, slug?: string }) {
  // default case: learn tab, no need for slug or type
  if (!slug || !type) {
    console.log("going to PageContentLearn component");
    return <PageContentLearn />
  }

  return getComponentByType(type, slug);
}

// map the type to the corresponding component, passing in the slug
function getComponentByType(type: TypeOptions, slug: string) {
  const componentMap: Record<TypeOptions, React.ReactNode> = {
    track: <PageContentTrack slug={slug} />,
    course: <PageContentCourse slug={slug} />,
    module: <PageContentModule slug={slug} />,
    lesson: <PageContentLesson slug={slug} />,
  };

  return componentMap[type];
}