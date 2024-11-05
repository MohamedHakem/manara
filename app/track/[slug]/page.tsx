import PageContent from "@/components/page-content";
import PageHeader from "@/components/page-header";
import {
  SidebarInset
} from "@/components/ui/sidebar";
import { tracks } from "@/lib/constants";

// Generate static params using the slugs from `tracks`
export async function generateStaticParams() {
  return tracks.map((track) => ({
    slug: track.slug,
  }));
}

export default function LearningPathPage({ params }: { params: { slug: string; } }) {
  const { slug } = params;
  // the landing page of the track + all courses listed, click one to go to /track/{slug}/course/{course}

  return (
    <SidebarInset className="md:border md:border-neutral-200/80 max-h-[calc(100svh-theme(spacing.4))] overflow-auto">
      <PageHeader activeTitle={slug} />
      <PageContent />
    </SidebarInset>
  );
}
