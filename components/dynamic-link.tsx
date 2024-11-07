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
  includePathname = false
}: {
  children?: ReactNode,
  href: string,
  className?: string,
  key?: Key,
  includePathname?: boolean
}) {
  const pathname = usePathname()

  const finalHref = includePathname ?
    getRelativeHref(pathname, href) // get the relative pathname, add href to it, clean any duplicates
    : href // pass href as is, normal root-based or absolute url behavior

  return (
    <Link key={key} href={finalHref} className={className}>
      {children}
    </Link>
  )
}