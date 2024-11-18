"use client"

import { Key, ReactNode } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { getRelativeHref } from "@/lib/utils"

// includePathname determines whether the link should behave dynamically (relative to the current page)
// or statically (a normal root-based or absolute link).
export default function DynamicLink({
  children,
  href,
  className,
  key,
  prefetch = true,
  includePathname = false
}: {
  children?: ReactNode,
  href: string,
  className?: string,
  key?: Key,
  prefetch?: boolean,
  includePathname?: boolean
}) {
  const pathname = usePathname()

  const finalHref: string = includePathname ?
  getRelativeHref(pathname, href) // get the relative pathname, add href to it, clean any duplicates
  : href // pass href as is, normal root-based or absolute url behavior
  
  // console.log("🚀 ~ finalHref:", finalHref)
  
  return (
    <Link prefetch={prefetch} key={key} href={finalHref} className={className}>
      {children}
    </Link>
  )
}