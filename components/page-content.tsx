import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { tracks } from "@/lib/constants"

export default function PageContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8 pb-2 px-6 md:px-0 w-full max-w-4xl mx-auto">
      {tracks.map((track) => (
        <Link key={track.id} href={`/track${track.slug}`} className="block">
          <Card className="h-52 md:h-44 hover:bg-muted/50 p-0 flex flex-col shadow-sm aspect-auto">
            <CardContent className="flex-1 bg-[#37352f06] p-0" />
            <CardFooter className="flex items-center justify-between py-2 px-[10px] border-t">
              <h2 className="font-normal text-sm text-foreground">{track.title}</h2>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}