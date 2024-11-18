import {
  PageContentLearn,
  PageContentTrack,
  PageContentCourse,
  PageContentModule,
  PageContentLesson
} from "@/components/content"
import { TypeOptions } from "@/lib/types";

// Fetch in the page, not a component. 
// 1- Fetch needed data using slug & type,
// 2- pass it to the component: ContentHero and CardList

export default function PageContent({ type, slug }: { type?: TypeOptions, slug?: string }) {
  // default case: learn tab, no need for slug or type
  if (!slug || !type) {
    console.log("going to PageContentLearn component");
    return <PageContentLearn />
  }

  // fetch the content based on the type & slug
  // pass the fetched data to the corresponding component
  // track, course, module, lesson have same ContentHero 
  // All have same CardList EXCEPT lesson have LessonContent

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