"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
  const { back } = useRouter();

  return (
    <Button
      text="Back"
      variant="outline"
      size="default"
      DefaultIcon={ChevronLeft}
      className={"w-fit h-8 border-0 p-2 pr-3 md:p-3 md:pr-4 [&_svg]:size-5"}
      onClick={() => back()}
    />
  )
}