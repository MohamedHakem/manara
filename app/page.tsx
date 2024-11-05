import PageContent from "@/components/page-content";
import PageHeader from "@/components/page-header";
import {
  SidebarInset
} from "@/components/ui/sidebar";

// const bottomShadow = "shadow - [-2px_ - 125px_43px_ - 108px_rgba(227, 227, 227, 0.69)_inset]"

export default function Home() {
  return (
    <SidebarInset className="md:border md:border-neutral-200/80 max-h-[calc(100svh-theme(spacing.4))] overflow-auto">
      <PageHeader />
      <PageContent />
    </SidebarInset>
  );
}
