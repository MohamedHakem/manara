import { clsx, type ClassValue } from 'clsx';
import { notFound } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRelativeHref(pathname: string, href: string): string {
  const pathnameSegments = pathname.split('/').filter(Boolean); // filter(Boolean) filters any empty/faulty segments like ""
  const hrefSegments = href.split('/').filter(Boolean);
  const validSegments = ['learn', 'module', 'lesson', 'track', 'course'];

  // Ensure href starts with a valid segment if includePathname is true
  if (!validSegments.includes(hrefSegments[0])) {
    // Handle the error gracefully in production
    if (process.env.NODE_ENV === 'production') {
      return notFound(); // Return a 404-like response for invalid href format
    }
    throw new Error(
      "Invalid href format: When the includePathname prop is true on a DynamicLink, the href must start with one of the following segments: 'module', 'lesson', 'track', or 'course'."
    );
  }

  let matchIndex = -1;

  // Traverse through the pathname and href segments
  for (let i = 0; i < pathnameSegments.length; i++) {
    const pathnameSegment = pathnameSegments[i];
    // const hrefSegment = hrefSegments[0]; // Get the first segment from href
    // If the current pathname segment matches the href segment or we're past the point of divergence
    if (hrefSegments.includes(pathnameSegment)) {
      matchIndex = i;
      break;
    }
  }

  // If a match is found, replace the rest of the pathname from the match point with href segments
  if (matchIndex !== -1) {
    const finalSegments = [
      ...pathnameSegments.slice(0, matchIndex), // Keep the segments before the match
      ...hrefSegments // Add href segments after the match
    ];

    return '/' + finalSegments.join('/');
  }

  // If no match found, return the pathname with href appended at the end
  return `${pathname}/${href}`;
}

export function isActiveTab(href: string, pathname: string): boolean {
  console.log('🚀 ~ isActiveTab ~ href:', href);
  console.log('🚀 ~ isActiveTab ~ pathname:', pathname);
  if (href === '/') {
    return pathname === href;
  }
  if (href === 'avatar') {
    console.log("from avatar");
    // I want this to return true only if I'm on a route that's not the home or root or dashboard or learn or practice
    return isSecondaryRoute(pathname);
    // return !pathname.startsWith("/practice") || !pathname.startsWith("/learn") || pathname !== "/"
  }

  // const cleanPath = pathname.startsWith('/') ? pathname.slice(1,) : pathname;
  // console.log("🚀 ~ isActiveTab ~ cleanPath:", cleanPath)

  // return pathname.startsWith(`/${cleanPath});
  return pathname.startsWith(`/${href}`);
}

export function isSecondaryRoute(pathname: string): boolean {
  // Immediately return false for root paths
  if (pathname === '/' || pathname === '') {
    return false;
  }

  const mainRoutes = ['/dashboard', '/learn', '/practice'];

  // Clean up pathname by removing trailing slash
  // const cleanPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  // Check if current path is NOT one of the main routes
  // return !mainRoutes.includes(cleanPath);
  return !mainRoutes.some((route) => pathname.startsWith(route));
}
