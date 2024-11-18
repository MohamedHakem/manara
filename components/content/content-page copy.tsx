import CardList from "@/components/content/card-list";
import ContentHero from "@/components/content/content-hero";
import { coursesByTrack, lessonsByModule, modulesByCourse, tracks } from "@/lib/constants";
import { DataTypeMap, TypeOptions } from "@/lib/types";

// Fetch in the page, not a component. 
// 1- Fetch needed data using slug & type,
// 2- pass it to the component: ContentHero and CardList

export default function ContentPage({ type, slug }: { type: TypeOptions, slug: string }) {
  // get children/list (courses, modules, lessons) based on type & slug
  // let children: DataTypeMap[TypeOptions][] = []
  const itemMetadata = type && slug && getItemMetadataByTypeAndSlug(type, slug);
  const children = getChildrenByTypeAndSlug(type, slug)
  console.log("🚀 ~ ContentPage ~ children:", children)

  if (type === "learn") { // for the /learn page
    // children = tracks // get all learning paths
    return <>
      {children.length > 0 ? <CardList items={children} /> : null}
    </>
  }
  else if (type && slug) {
    console.log("🚀 ~ ContentPage ~ type:", type)
    console.log("🚀 ~ ContentPage ~ slug:", slug)
    // if lesson, get metadata & content, otherwise, get item metadata
    // just for static data, with db, get metadata only
    const itemMetadata = type && slug && getItemMetadataByTypeAndSlug(type, slug);
    console.log("🚀 ~ ContentPage ~ itemMetadata:", itemMetadata)
    let lessonContent: string = '' // maybe a lesson

    // return an error message (redirect to back() in 5 seconds if not found)
    if (!itemMetadata) {
      return (
        <div className="pt-8 pb-2 px-6 md:px-4 w-full max-w-[52rem] mx-auto">
          <h1 className="text-2xl font-bold text-red-600">Error: item not found</h1>
          <p className="text-lg">The item you are looking for does not exist. Please check the URL or go back to the homepage.</p>
        </div>
      );
    }

    if (type === 'lesson' && slug && 'content' in itemMetadata) { // for the lesson page
      lessonContent = itemMetadata.content;
      console.log("🚀 ~ ContentPage ~ lessonContent:", lessonContent)
      return (
        <div className="pt-8 pb-2 px-6 md:px-4 w-full max-w-[52rem] mx-auto"> {lessonContent} </div>
      )
    }

    if (type && slug) { // for the track, course, or module pages
      children = getChildrenByTypeAndSlug(type, slug)
    }

    console.log("🚀 ~ PageContent ~ children:", children)

    return (
      <div className="pt-8 pb-2 px-6 md:px-4 w-full max-w-[52rem] mx-auto">
        <ContentHero
          type={type}
          title={itemMetadata.title}
          description={`Description: ${itemMetadata.title}`}
          // in track, show thumbImg, but in course/module/lesson, show track's thumbImg + 
          // maybe the track's name/link in small text
          imageUrl={itemMetadata.thumbImg}
          completedItems={'completedItems' in itemMetadata ? itemMetadata.completedItems : 0}
          totalItems={'totalItems' in itemMetadata ? itemMetadata.totalItems : 0}
          estimatedHours={20}
          completedTasks={4}
          totalTasks={10}
        />

        {type === "lesson" ? <div> {lessonContent} </div> : (
          <>
            {children.length > 0 ? <CardList type={type === "track" ? "course" : type === "course" ? "module" : "lesson"} items={children} /> : null}
          </>
        )}

      </div>
    );
  }
}

// you need 2 things: data for the hero section and data for the card list
// with prisma it's easy, but for now, we'll use the constants static data

// new below
// prisma or drizzle ORM will get the ContentHero and CardList data in a single request
// but for now, do 2 separate requests (static data anyway)

// Get single item data for ContentHero
function getItemMetadataByTypeAndSlug<T extends TypeOptions>(type: T, slug: string): DataTypeMap[T] | undefined {
  const Map = {
    learn: () => tracks.find(track => track.slug === slug), // learn page has no metadata for now
    track: () => tracks.find(track => track.slug === slug),
    course: () => coursesByTrack.find(course => course.slug === slug),
    module: () => modulesByCourse.find(module => module.slug === slug),
    lesson: () => lessonsByModule.find(lesson => lesson.slug === slug) // just the metadata, not the content
  } as const;

  return Map[type]() as DataTypeMap[T];
}

// Get children for specific item by type/slug for CardList
function getChildrenByTypeAndSlug<T extends TypeOptions>(type: T, slug: string): DataTypeMap[TypeOptions][] {
  console.log("🚀 ~ type:", type)
  console.log("🚀 ~ slug:", slug)

  const Map = {
    learn: () => tracks, // a func that returns all tracks for /learn page
    track: () => coursesByTrack, // a func, takes track slug & returns courses
    course: () => modulesByCourse, // a func, takes course slug & returns modules
    module: () => lessonsByModule, // a func, takes module slug & returns lessons
    lesson: () => [] // Lessons don't have children, for now 
  } as const;

  return Map[type]() as DataTypeMap[TypeOptions][];
}
