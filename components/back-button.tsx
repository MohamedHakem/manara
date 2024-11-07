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
      className={"h-8 w-8 border-0 mx-1 p-0 [&_svg]:size-5"}
      onClick={() => back()}
    />
  )
}