import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SEO } from '../components/SEO'
import { galleryItems } from '../data/site'

const filters = [
  ['all', 'All'],
  ['coffee', 'Coffee'],
  ['food', 'Food'],
  ['interior', 'Interiors'],
  ['details', 'Details'],
] as const

export function Gallery() {
  const [filter, setFilter] = useState<(typeof filters)[number][0]>('all')
  const reduceMotion = useReducedMotion()
  const visible = useMemo(
    () => (filter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter],
  )

  return (
    <>
      <SEO
        title="Gallery"
        description="Browse the fictional Vela & Grain café gallery: coffee, food, interiors and tactile details arranged as a premium restaurant portfolio showcase."
      />

      <PageHero
        eyebrow="Coffee, food, room, detail"
        title="The atmosphere, in fragments."
        copy="A visual study of the fictional Vela & Grain experience — from the first cup to the quiet corners of the room."
        image="https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1800&q=86"
        imageAlt="Coffee drink in a café setting in a warm café setting"
      />

      <section className="section-pad bg-cream">
        <div className="page-shell">
          <div className="flex flex-col gap-8 border-b border-ink/15 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <p className="eyebrow">Image study</p>
              <h2 className="mt-4 max-w-[10ch] font-display text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.92] tracking-[-0.04em]">
                A gallery with rhythm, not a catalogue.
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
                {filters.map(([value, label]) => (
                  <button
                    type="button"
                    key={value}
                    onClick={() => setFilter(value)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                      filter === value ? 'bg-ink text-cream' : 'border border-ink/15 text-ink/62 hover:border-ink'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <motion.div layout className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5">
            <AnimatePresence mode="popLayout">
              {visible.map((item, index) => (
                <motion.figure
                  layout
                  key={item.src}
                  className="group relative mb-4 break-inside-avoid overflow-hidden bg-linen lg:mb-5"
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.985, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.985 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.025, 0.12) }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className={`w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035] ${
                      item.tall ? 'aspect-[4/5]' : 'aspect-[5/4]'
                    }`}
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink/70 via-ink/30 to-transparent px-4 pb-4 pt-12 text-xs text-cream transition-transform duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0">
                    {item.alt}
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-12 border-t border-ink/15 pt-6 text-sm leading-6 text-ink/50">
            <p>
              Photography is remotely sourced for this portfolio concept and is used to establish a coherent fictional visual direction; it does not depict a real Vela & Grain venue.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
