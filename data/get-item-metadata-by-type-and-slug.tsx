import { coursesByTrack, lessonsByModule, modulesByCourse, tracks } from "@/lib/constants";
import { DataTypeMap, TypeOptions } from "@/lib/types";

export default function getItemMetadataByTypeAndSlug<T extends TypeOptions>(type: T, slug: string): DataTypeMap[T] {
  console.log("🚀 ~ getItemMetadataByTypeAndSlug ~ type, slug:", type, ", ", slug)
  // fetch here, for now use static data
  const Map = {
    learn: () => ({title: "Choose a Learning Paths"}), // learn page has no metadata for now
    track: () => tracks.find(track => track.slug === slug),
    course: () => coursesByTrack.find(course => course.slug === slug),
    module: () => modulesByCourse.find(module => module.slug === slug),
    lesson: () => lessonsByModule.find(lesson => lesson.slug === slug) // just the metadata, not the content
  } as const;

  return Map[type]() as DataTypeMap[T];
}