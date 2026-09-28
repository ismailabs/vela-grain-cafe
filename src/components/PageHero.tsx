import { motion, useReducedMotion } from 'motion/react'
import { ParallaxImage } from './ParallaxImage'

type PageHeroProps = {
  eyebrow: string
  title: string
  copy: string
  image: string
  imageAlt: string
}

export function PageHero({ eyebrow, title, copy, image, imageAlt }: PageHeroProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="page-shell grid min-h-[72vh] items-end gap-10 pb-10 pt-32 md:grid-cols-[1.05fr_0.95fr] md:pb-14 lg:min-h-[78vh] lg:gap-16 lg:pt-36">
        <div className="relative z-10 pb-4 lg:pb-10">
          <motion.p
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            className="display-lg mt-5 max-w-[9ch]"
            initial={reduceMotion ? false : { opacity: 0, y: 38 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-7 max-w-xl text-base leading-7 text-cream/68 sm:text-lg sm:leading-8"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
          >
            {copy}
          </motion.p>
        </div>

        <motion.div
          className="relative h-[44vh] min-h-[340px] overflow-hidden rounded-[2px] md:h-[58vh]"
          initial={reduceMotion ? false : { clipPath: 'inset(0 0 100% 0)' }}
          animate={reduceMotion ? undefined : { clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 1.05, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
        >
          <ParallaxImage src={image} alt={imageAlt} eager className="h-full" offset={24} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
