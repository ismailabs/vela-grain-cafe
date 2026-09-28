import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SEO } from '../components/SEO'
import { menuSections } from '../data/site'

export function Menu() {
  const [active, setActive] = useState('all')
  const reduceMotion = useReducedMotion()
  const visibleSections = useMemo(
    () => (active === 'all' ? menuSections : menuSections.filter((section) => section.id === active)),
    [active],
  )

  return (
    <>
      <SEO
        title="Menu"
        description="Explore the fictional Vela & Grain café menu: coffee, specialty drinks, breakfast, brunch, pastries and sweets created for this portfolio concept."
      />

      <PageHero
        eyebrow="A short menu, made deliberately"
        title="Things worth lingering over."
        copy="Coffee first, then something warm from the kitchen. This fictional menu keeps the choice concise and the flavours generous."
        image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=86"
        imageAlt="Coffee drinks gathered over a café table"
      />

      <section className="border-b border-ink/15 bg-cream">
        <div className="page-shell py-6">
          <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter menu categories">
            <button
              type="button"
              onClick={() => setActive('all')}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                active === 'all' ? 'bg-ink text-cream' : 'border border-ink/15 text-ink/65 hover:border-ink'
              }`}
            >
              All menu
            </button>
            {menuSections.map((section) => (
              <button
                type="button"
                key={section.id}
                onClick={() => setActive(section.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                  active === section.id ? 'bg-ink text-cream' : 'border border-ink/15 text-ink/65 hover:border-ink'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="page-shell">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow">The menu</p>
              <p className="mt-4 max-w-sm text-sm leading-6 text-ink/55">
                Prices, dishes and availability are fictional and presented solely to demonstrate a complete restaurant experience.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="display-md max-w-[12ch]">Built around the way a café day actually unfolds.</h2>
            </Reveal>
          </div>

          <motion.div layout className="space-y-16 lg:space-y-20">
            {visibleSections.map((section, sectionIndex) => (
              <motion.section
                layout
                key={section.id}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38 }}
                aria-labelledby={`menu-${section.id}`}
              >
                <div className="grid gap-7 border-t border-ink/15 pt-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:pt-9">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">
                        0{sectionIndex + 1}
                      </span>
                      <h3 id={`menu-${section.id}`} className="font-display text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                        {section.label}
                      </h3>
                    </div>
                  </div>

                  <div>
                    {section.items.map((item) => (
                      <article key={item.name} className="grid grid-cols-[1fr_auto] gap-5 border-b border-ink/12 py-5 first:pt-0 sm:py-6">
                        <div>
                          <div className="flex flex-wrap items-center gap-2.5">
                            <h4 className="text-base font-semibold tracking-[-0.01em] sm:text-lg">{item.name}</h4>
                            {item.tag ? (
                              <span className="rounded-full bg-clay/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.13em] text-clay">
                                {item.tag}
                              </span>
                            ) : null}
                          </div>
                          <p className="mt-1.5 max-w-xl text-sm leading-6 text-ink/55">{item.description}</p>
                        </div>
                        <p className="pt-0.5 text-sm font-semibold sm:text-base">{item.price}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </motion.section>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-moss text-cream">
        <div className="page-shell grid gap-10 py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:py-20">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sand">Dietary notes</p>
            <h2 className="mt-4 max-w-[13ch] font-display text-4xl font-medium leading-[0.96] tracking-[-0.035em] sm:text-5xl">
              Simple menus should still make room for people.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-cream/70 sm:text-base sm:leading-7">
              In a real deployment, dietary flags and allergen details would be confirmed with the restaurant. This concept includes vegetarian-friendly choices but does not make real allergen guarantees.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-semibold uppercase tracking-[0.15em] text-cream/75 sm:grid-cols-3">
              <span className="rounded-full border border-cream/25 px-4 py-3">Vegetarian</span>
              <span className="rounded-full border border-cream/25 px-4 py-3">Oat milk</span>
              <span className="rounded-full border border-cream/25 px-4 py-3">Ask first</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
