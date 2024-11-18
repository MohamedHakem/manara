import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

export default function OptimizedImage({ src, alt, className }:
  { src: string, alt: string, className?: string } & ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={cn("absolute inset-0 z-0 object-cover", className)}
      quality={65}
      decoding="sync"
      loading="eager"
      priority={true}
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 25vw, 20vw"
    />
  )
}