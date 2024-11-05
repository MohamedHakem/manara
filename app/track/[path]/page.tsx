import PageContent from "@/components/page-content";
import PageHeader from "@/components/page-header";
import {
  SidebarInset
} from "@/components/ui/sidebar";

export default async function LearningPathPage({ params }: { params: Promise<{ path: string }> }) {
  const path = (await params).path;

  // here should be the landing page of the track, and all courses directly
  // choose a course from here to go to /track/{path}/course/{course}

  return (
    <SidebarInset className="md:border md:border-neutral-200/80 max-h-[calc(100svh-theme(spacing.4))] overflow-auto">
      <PageHeader activeTitle={path} />
      <PageContent />
    </SidebarInset>
  );
}
