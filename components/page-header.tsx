import { SidebarTrigger } from "@/components/ui/sidebar";
import { tracks } from "@/lib/constants"
import BackButton from "@/components/back-button";

export default function PageHeader({ activeTitle }: { activeTitle: string }) {
  const title = (tracks.filter(track => `${activeTitle}` === track.slug))[0]?.title

  return (
    <header className="flex w-full h-12 md:h-[3rem] z-10 shrink-0 items-center gap-2 border-b sticky top-0 bg-white rounded-t-2xl">
      <div className="flex gap-3 w-full items-center px-4">
        <SidebarTrigger className="-ml-1" />
        <BackButton />
        <div className="flex flex-1 items-center justify-center">
          <div className="flex-grow flex justify-center">
            <span className="-ml-[120px] truncate text-sm md:text-base md:font-semibold text-ellipsis overflow-hidden max-w-[300px]">
              {title ? title : activeTitle}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}