"use client"

// import { useQueryState } from "nuqs";
import { BreadcrumbLink } from "@/components/ui/breadcrumb";

export default function BreadcrumbTrack() {
  // const [track, setTrack] = useQueryState("track");

  // const handleTrack = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();
  //   setTrack("AWS 1: Intro To Cloud Computing");
  //   return "/?track="
  // }

  return (
    <BreadcrumbLink href={"#"} className="focus-visible:ring-1 focus-visible:ring-ring">
      {/* <span>{track || "AWS 1: Intro To Cloud Computing"}</span> */}
    </BreadcrumbLink>
  )
}


// STOP: dynamic params are different from search params
// maybe no need for nuqs (yet)
// use normal nextjs router maybe and not dynamic params since it probably makes the route dynamic and not static
// and just use the pathname or something to get the current track
// put it as the first item in the breadcrumb
// the same with the 2nd level of the pathname
// put it as the 2nd item in the breadcrumb
// you already did this before in slty and made it responsive with a drawer,
// get it from slty.shop and check shadcn breadcrump as well

// from ai below
// Path: components/breadcrumb-track.tsx
// import { useRouter } from "next/router";
// import { BreadcrumbLink } from "@/components/ui/breadcrumb";
//   