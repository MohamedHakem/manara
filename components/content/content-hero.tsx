import OptimizedImage from "@/components/ui/optimized-image";
import { TypeOptions } from "@/lib/types";

interface HeroSectionProps {
  type?: TypeOptions;
  title: string;
  description: string;
  imageUrl?: string;
  progress?: number;
  completedItems: number;
  totalItems: number;
  estimatedHours: number;
  completedTasks: number;
  totalTasks: number;
  latestLesson?: string;
  continueLink?: string;
  ctaText?: string;
  ctaLink?: string;
  children?: React.ReactNode;
}

export default function ContentHero({
  title,
  description,
  imageUrl,
  completedItems,
  totalItems,
  estimatedHours,
  type,
  children
}: HeroSectionProps) {
  if (type === "learn") return null;

  return (
    <div className="md:pt-8 md:px-4 w-full max-w-4xl mx-auto">
      <div className="relative w-full h-fit md:max-h-80 overflow-hidden flex flex-col md:flex-row md:rounded-xl border-b md:border border-gray-200">
        {type === "track" && <div className="relative w-full h-full md:max-w-[33%] md:h-auto aspect-264/137">
          <OptimizedImage src={`/images/thumbnails/${imageUrl}`} alt={title} className="aspect-264/137 h-fit" />
        </div>}
        <div className="relative flex flex-col justify-center w-full md:w-2/3 flex-1 shrink-0 bg-white p-4 text-left">
          <h1 className="text-2xl md:text-3xl font-medium mb-2 text-zinc-400">{title}</h1>
          <p className="text-sm md:text-lg mb-2 md:mb-4">{description}</p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:mb-4">
            {/* <div className="bg-gray-100 border border-gray-300 rounded-lg text-sm">
            Progress: {progress}%
          </div> */}
            <div className="bg-green-100 text-green-700 border border-green-300 text-sm rounded-sm px-[6px] py-[2px]">
              {completedItems}/{totalItems} completed
            </div>
            <div className="bg-orange-100 text-orange-700 border border-orange-300 text-sm rounded-sm px-[6px] py-[2px]">
              {estimatedHours} Hrs
            </div>
            {/* <div className="bg-gray-100 border border-gray-300 rounded-lg text-sm">
            Tasks Completed: {completedTasks}/{totalTasks}
          </div> */}
          </div>
          {/* <div className="flex flex-col md:flex-row items-center md:items-start">
          <span className="text-sm md:text-base">Latest Lesson: {latestLesson}</span>
          <Link href={continueLink || "/"}>
            <span className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-0 md:ml-4 mt-2 md:mt-0">
              Continue Learning
            </span>
          </Link>
        </div> */}
        
        {children}
        </div>
      </div>
    </div>
  );
}
