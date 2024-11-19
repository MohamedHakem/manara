import { coursesByTrack, lessonsByModule, modulesByCourse, tracks } from "@/lib/constants";
import { DataTypeMap, TypeOptions } from "@/lib/types";

export default function getChildrenByTypeAndSlug<T extends TypeOptions>(type: T, slug: string): DataTypeMap[TypeOptions][] {
  // console.log("🚀 ~ getChildrenByTypeAndSlug ~ type, slug:", type, ", ", slug)
  // fetch here using the type & slug, for now use static data
  const Map = {
    learn: () => tracks, // a func that returns all tracks for /learn page
    track: () => coursesByTrack, // a func, takes track slug & returns courses
    course: () => modulesByCourse, // a func, takes course slug & returns modules
    module: () => lessonsByModule, // a func, takes module slug & returns lessons
    lesson: () => [] // Lessons don't have children, for now 
  } as const;

  return Map[type]() as DataTypeMap[TypeOptions][];
}