import { SidebarTrigger } from "@/components/ui/sidebar";
import { tracks } from "@/lib/constants"

export default function PageHeader({ activeTitle }: { activeTitle?: string }) {
  const title = (tracks.filter(track => `/${activeTitle}` === track.slug))[0].title

  return (
    <header className="flex w-full h-12 md:h-[3rem] shrink-0 items-center gap-2 border-b sticky top-0 bg-white rounded-t-2xl">
      <div className="flex w-full items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center justify-center">
          <div className="flex-grow flex justify-center">
            <span className="-ml-8 truncate text-sm md:text-base md:font-semibold text-ellipsis overflow-hidden max-w-[300px]">
              {title}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}