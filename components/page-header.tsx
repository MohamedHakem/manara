import { SidebarTrigger } from "@/components/ui/sidebar";
export default function PageHeader() {
  return (
    <header className="flex w-full h-12 md:h-[3rem] shrink-0 items-center gap-2 
border-b sticky top-0 bg-white rounded-t-2xl">
      <div className="flex w-full items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center justify-center">
          <div className="flex-grow flex justify-center">
            <span className="-ml-8 truncate text-sm md:text-base md:font-semibold text-ellipsis overflow-hidden max-w-[300px]">AWS 1: Intro To Cloud Computing</span>
          </div>
        </div>
      </div>
    </header>
  )
}