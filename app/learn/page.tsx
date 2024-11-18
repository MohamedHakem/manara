import ContentPage from "@/components/content/content-page";
import PageHeader from "@/components/page-header";

export default function LearningPathPage() {
  return (
    <>
      <PageHeader activeTitle={"Choose a Learning Path"} />
      {/* pass type of page here */}
      <ContentPage type={"learn"} slug="/learn" />
    </>
  );
}
