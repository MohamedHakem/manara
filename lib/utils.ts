import { clsx, type ClassValue } from 'clsx';
import { notFound } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRelativeHref(pathname: string, href: string): string {
  const pathnameSegments = pathname.split('/').filter(Boolean); // filter(Boolean) filters any empty/faulty segments like ""
  const hrefSegments = href.split('/').filter(Boolean);
  const validSegments = ['module', 'lesson', 'track', 'course'];

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
