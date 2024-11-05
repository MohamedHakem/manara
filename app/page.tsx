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
      {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0 w-[768px] max-w-3xl mx-auto">
        <div className="flex-1 rounded-xl bg-muted/50 md:max-h-24 border" />
        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          <div className="aspect-square rounded-xl bg-muted/50 border" />
          <div className="aspect-square rounded-xl bg-muted/50 border" />
          <div className="aspect-square rounded-xl bg-muted/50 border" />
          <div className="aspect-square rounded-xl bg-muted/50 border" />
        </div>
        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          <div className="aspect-square rounded-xl bg-muted/50 border" />
          <div className="aspect-square rounded-xl bg-muted/50 border" />
          <div className="aspect-square rounded-xl bg-muted/50 border" />
          <div className="aspect-square rounded-xl bg-muted/50 border" />
        </div>
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min border" />
      </div> */}
    </SidebarInset>
  );
}
