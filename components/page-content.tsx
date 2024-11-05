import { Card, CardContent, CardFooter } from "@/components/ui/card"
// import Image from "next/image"
import Link from "next/link"

export default function PageContent() {
  const tasks = [
    {
      id: 1,
      title: "Complete Duolingo Spanish Unit 15",
      href: "#"
    },
    {
      id: 2,
      title: "The Age of Surveillance Capitalism",
      href: "#"
    },
    {
      id: 3,
      title: "Make Sales Presentation",
      href: "#"
    },
    {
      id: 4,
      title: "Complete Proposal Draft",
      href: "#"
    },
    {
      id: 5,
      title: "Register to Vote",
      href: "#"
    },
    {
      id: 6,
      title: "Complete 'Pride & Prejudice'",
      href: "#"
    },
    {
      id: 7,
      title: "Complete Duolingo Spanish Unit 15",
      href: "#"
    },
    {
      id: 8,
      title: "The Age of Surveillance Capitalism",
      href: "#"
    },
    {
      id: 9,
      title: "Make Sales Presentation",
      href: "#"
    },
    {
      id: 10,
      title: "Complete Proposal Draft",
      href: "#"
    },
    {
      id: 11,
      title: "Register to Vote",
      href: "#"
    },
    {
      id: 12,
      title: "Complete 'Pride & Prejudice'",
      href: "#"
    }
  ]

  // const cards = Array.from({ length: 12 }, (_, i) => ({
  //   id: i + 1,
  //   title: `Card ${i + 1}`,
  //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR4sWGfuHCmHvYGFZVQvgRWI1CGQMSVVN2g&s"
  // }))

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8 pb-2 px-6 md:px-0 w-full max-w-4xl mx-auto">
        {tasks.map((task) => (
          <Link key={task.id} href={task.href} className="block">
            <Card className="h-52 md:h-44 hover:bg-muted/50 p-0 flex flex-col shadow-sm aspect-auto">
              <CardContent className="flex-1 bg-[#37352f06] p-0" />
              <CardFooter className="flex items-center justify-between py-2 px-[10px] border-t">
                <h2 className="font-normal text-sm text-foreground">{task.title}</h2>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {/* <div className="container w-full flex flex-1 flex-col gap-4 py-6 md:w-[708px] max-w-[708px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card key={card.id} className="overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-0">
                <Image
                  src={card.image}
                  alt={`Card ${card.id}`}
                  width={250}
                  height={150}
                  className="w-full h-[250px] md:h-[150px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{card.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> */}
    </>
  )
}