import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

type ParallaxImageProps = {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  eager?: boolean
  offset?: number
}

export function ParallaxImage({
  src,
  alt,
  className = '',
  imageClassName = '',
  eager = false,
  offset = 32,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        className={`h-[calc(100%+64px)] w-full object-cover ${imageClassName}`}
        style={reduceMotion ? undefined : { y }}
      />
    </div>
  )
}
