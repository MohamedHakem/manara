import PageContent from "@/components/page-content";
import PageHeader from "@/components/page-header";
import { SidebarInset } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarInset className="md:border md:border-neutral-200/80 max-h-[calc(100svh-theme(spacing.4))] overflow-auto">
      <PageHeader activeTitle="Choose a Learning Paths" />
      <PageContent />
    </SidebarInset>
  );
}
