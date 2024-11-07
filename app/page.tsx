import PageContent from "@/components/page-content";
import PageHeader from "@/components/page-header";

export default function Home() {
  // put here the actual dashboard with all stats, summaries, dates, progress, events, community, etc.
  return (
    <>
      <PageHeader activeTitle="Dashboard Homepage" />
      <PageContent />
    </>
  );
}
