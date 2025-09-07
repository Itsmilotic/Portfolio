"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"
import { Skeleton } from "@/components/skeleton"
import type { ComponentProps } from "react"

interface ImageWithBlurProps extends ComponentProps<typeof Image> {
  blurDataURL?: string
}

export function ImageWithBlur({ blurDataURL, onLoad, className, ...props }: ImageWithBlurProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true)
    onLoad?.(e)
  }

  return (
    <div className="relative">
      {!isLoaded && <Skeleton className={`absolute inset-0 ${className}`} />}
      <Image
        {...props}
        className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
        onLoad={handleLoad}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={
          blurDataURL ||
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        }
      />
    </div>
  )
}
