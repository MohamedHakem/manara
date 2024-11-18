import { coursesByTrack, tracks } from "@/lib/constants"
import CardList from "@/components/content/card-list"
import ContentHero from "@/components/content/content-hero"

export default function PageContentTrack({ slug }: { slug: string }) {
  const track = tracks.find((track) => track.slug === slug);

  if (!track) {
    return (
      <div className="pt-8 pb-2 px-6 md:px-4 w-full max-w-[52rem] mx-auto">
        <h1 className="text-2xl font-bold text-red-600">Error: Track not found</h1>
        <p className="text-lg">The track you are looking for does not exist. Please check the URL or go back to the homepage.</p>
      </div>
    );
  }

  return (
    <div className="pt-8 pb-2 px-6 md:px-4 w-full max-w-[52rem] mx-auto">
      <ContentHero
        title={track.title}
        description={`Description: ${track.title}`}
        imageUrl={track.thumbImg}
        progress={track.progress}
        completedItems={track.completedItems}
        totalItems={track.totalItems}
        estimatedHours={20}
        completedTasks={4}
        totalTasks={10}
      />
      <CardList type={"course"} items={coursesByTrack} />
    </div>
  );
}

