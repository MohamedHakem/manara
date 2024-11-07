import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { lessonsByModule } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import DynamicLink from "@/components/dynamic-link"

export default function PageContentLesson({ slug }: { slug: string }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8 pb-2 px-6 md:px-4 w-full max-w-[52rem] mx-auto">
        <h1>{slug}</h1>
        {lessonsByModule.map((lesson, index) => (
          <DynamicLink
            key={lesson.id}
            includePathname
            href={`/lesson/${lesson.slug}`}
            className="block h-full rounded-xl focus:outline-none focus:outline-orange-300 
            focus:outline-dashed focus:outline-2 focus:outline-offset-2"
          >
            <Card title={`Start Learning: ${lesson.title}`} className="h-full min-h-[236px] md:min-h-max hover:bg-muted/50 p-0 flex flex-col shadow-sm aspect-auto overflow-hidden">
              <CardContent className={cn("flex-1 p-0 md:max-h-[137px] relative aspect-264/137 h-auto",
                lesson.bgColor ? `bg-[${lesson.bgColor}]` : "bg-[#eee]")}
              >
                {lesson.thumbImg ?
                  <Image
                    src={`/images/thumbnails/${lesson.thumbImg}`}
                    alt={`Course Lesson ${index}: ${lesson.title}`}
                    fill
                    className="relative object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={65}
                    decoding="sync"
                  />
                  : null
                }
              </CardContent>
              <CardFooter className="flex items-start py-2 px-[10px] border-t flex-1 h-auto">
                <h2 className="font-normal text-sm text-foreground">{lesson.title}</h2>
              </CardFooter>
            </Card>
          </DynamicLink>
        ))
        }
      </div>
    </div>
  )
}