import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Clock, MapPin } from '../components/Icons'
import { ParallaxImage } from '../components/ParallaxImage'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SEO } from '../components/SEO'
import { featuredMenu, galleryItems, site } from '../data/site'

const featureCards = [
  {
    number: '01',
    title: 'Coffee with a point of view',
    copy: 'Balanced espresso, rotating single origins and a short list of signatures built to stay familiar.',
  },
  {
    number: '02',
    title: 'A kitchen that follows the morning',
    copy: 'Seasonal plates move from quick weekday breakfasts to long, unhurried weekend brunches.',
  },
  {
    number: '03',
    title: 'A room designed to settle into',
    copy: 'Warm timber, tactile stone and soft light make a place for conversation, work and a second cup.',
  },
]

export function Home() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <SEO
        title="Premium fictional café portfolio"
        description="Vela & Grain is a fictional premium café concept showcasing restaurant web design, responsive frontend development and purposeful motion."
      />

      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=2200&q=88"
            alt="Warmly lit café interior with timber furniture and a welcoming counter"
            eager
            className="h-full"
            imageClassName="scale-[1.04]"
            offset={42}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,14,11,.82)_0%,rgba(19,14,11,.48)_46%,rgba(19,14,11,.22)_72%,rgba(19,14,11,.35)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-ink/20" />
        </div>

        <div className="page-shell relative z-10 flex min-h-[100svh] flex-col justify-end pb-10 pt-28 sm:pb-12 lg:pb-16">
          <motion.p
            className="mb-5 text-[11px] font-semibold uppercase tracking-[0.24em] text-sand"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {site.eyebrow}
          </motion.p>

          <motion.h1
            className="display-xl max-w-[9ch] text-balance"
            initial={reduceMotion ? false : { opacity: 0, y: 54 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            Made for mornings worth keeping.
          </motion.h1>

          <div className="mt-8 grid items-end gap-8 border-t border-cream/25 pt-6 md:grid-cols-[1fr_auto]">
            <motion.p
              className="max-w-xl text-base leading-7 text-cream/72 sm:text-lg sm:leading-8"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              A fictional neighbourhood café concept where thoughtful coffee, seasonal plates and calm interiors meet.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              <Link to="/menu" className="button-light gap-2">
                View the menu <ArrowRight />
              </Link>
              <Link
                to="/about"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cream/35 px-6 py-3 text-sm font-semibold text-cream transition duration-300 hover:bg-cream hover:text-ink"
              >
                Our story <ArrowUpRight />
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute right-4 top-28 z-10 hidden rotate-90 origin-top-right text-[9px] font-semibold uppercase tracking-[0.2em] text-cream/45 xl:block">
          Fictional portfolio project · not a real venue
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">The idea</p>
              <p className="mt-5 max-w-sm text-sm leading-6 text-ink/55">
                Designed as a premium restaurant portfolio concept, Vela & Grain imagines the kind of café that feels intentional without becoming formal.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-md max-w-[14ch]">
                Good coffee is the start. The feeling is what brings you back.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid border-y border-ink/15 md:grid-cols-3 lg:mt-24">
            {featureCards.map((feature, index) => (
              <Reveal
                key={feature.number}
                delay={index * 0.08}
                className={`py-9 md:px-7 md:py-12 lg:px-10 ${index > 0 ? 'border-t border-ink/15 md:border-l md:border-t-0' : ''}`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">{feature.number}</p>
                <h3 className="mt-8 max-w-[12ch] font-display text-[2rem] font-medium leading-[0.98] tracking-[-0.03em] lg:text-[2.35rem]">
                  {feature.title}
                </h3>
                <p className="mt-5 max-w-sm text-sm leading-6 text-ink/60">{feature.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-linen/55">
        <div className="grid min-h-[760px] lg:grid-cols-2">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=86"
            alt="Colourful seasonal brunch plates shared across a table"
            className="min-h-[520px] lg:min-h-full"
            offset={38}
          />
          <div className="flex items-center px-5 py-20 sm:px-8 lg:px-16 lg:py-24 xl:px-24">
            <Reveal className="max-w-xl">
              <p className="eyebrow">From the kitchen</p>
              <h2 className="display-md mt-5">Seasonal plates. Familiar pleasures.</h2>
              <p className="body-lg mt-6">
                The menu keeps a small footprint: crisp sourdough, soft eggs, bright greens, careful pastry and brunch plates built around produce rather than trends.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/menu" className="button-primary gap-2">
                  Explore all dishes <ArrowRight />
                </Link>
                <span className="inline-flex min-h-12 items-center rounded-full border border-ink/15 px-5 text-xs font-semibold uppercase tracking-[0.12em] text-ink/55">
                  Vegetarian options available
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="page-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Selected favourites"
              title="Three reasons to order one more thing."
              className="max-w-3xl"
            />
            <Reveal>
              <Link to="/menu" className="button-outline gap-2">
                Full menu <ArrowUpRight />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:gap-7">
            {featuredMenu.map((item, index) => {
              const images = [
                'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1000&q=84',
                'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1000&q=84',
                'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=84',
              ]

              return (
                <Reveal key={item.name} delay={index * 0.08}>
                  <Link to="/menu" className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                      <img
                        src={images[index]}
                        alt={`${item.name}, presented as part of the fictional Vela & Grain menu`}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                      />
                      {item.tag ? (
                        <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur">
                          {item.tag}
                        </span>
                      ) : null}
                    </div>
                    <div className="flex items-start justify-between gap-4 border-b border-ink/15 py-5">
                      <div>
                        <h3 className="font-display text-2xl font-semibold tracking-[-0.025em]">{item.name}</h3>
                        <p className="mt-1 text-sm leading-6 text-ink/55">{item.description}</p>
                      </div>
                      <span className="shrink-0 pt-1 text-sm font-semibold">{item.price}</span>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative min-h-[76vh] overflow-hidden bg-ink text-cream">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2200&q=86"
          alt="Warm contemporary café interior with tables and pendant lighting"
          className="absolute inset-0 h-full"
          offset={45}
        />
        <div className="absolute inset-0 bg-ink/52" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/35 to-transparent" />
        <div className="page-shell relative z-10 flex min-h-[76vh] items-end py-12 lg:py-16">
          <Reveal className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand">Stay a while</p>
            <h2 className="display-lg mt-5 max-w-[9ch]">A quiet room in a loud city.</h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-cream/72 sm:text-lg sm:leading-8">
              The fictional space is imagined around daylight, generous tables and just enough texture to feel lived in from the first morning.
            </p>
            <Link to="/about" className="button-light mt-8 gap-2">
              See the concept <ArrowUpRight />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="page-shell">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="A look inside" title="Small details, held together." className="max-w-2xl" />
            <Reveal>
              <Link to="/gallery" className="button-outline gap-2">
                Open gallery <ArrowUpRight />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {galleryItems.slice(0, 4).map((item, index) => (
              <Reveal key={item.src} delay={index * 0.06} className={index === 0 ? 'col-span-2 row-span-2' : ''}>
                <Link to="/gallery" className="group block h-full overflow-hidden bg-linen">
                  <div className={`${index === 0 ? 'aspect-square lg:aspect-auto lg:h-full' : 'aspect-[4/5]'} overflow-hidden`}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/15 bg-cream">
        <div className="page-shell grid gap-0 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <Reveal className="border-b border-ink/15 pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-16">
            <p className="eyebrow">Visit the concept</p>
            <h2 className="mt-5 max-w-[8ch] font-display text-[clamp(3rem,5vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.04em]">
              Find your favourite corner.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-6 text-ink/58">
              The address and venue are fictional and included only to demonstrate how a real restaurant contact experience could be presented.
            </p>
          </Reveal>

          <Reveal className="pt-10 lg:pl-16 lg:pt-0" delay={0.08}>
            <div className="space-y-7">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/40">Fictional address</p>
                  <p className="mt-1 max-w-sm text-sm leading-6 text-ink/72">{site.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
                <div className="w-full">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/40">Hours</p>
                  <div className="mt-2 max-w-sm space-y-1.5 text-sm text-ink/72">
                    {site.hours.map(([day, hours]) => (
                      <div key={day} className="flex justify-between gap-8">
                        <span>{day}</span>
                        <span>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Link to="/contact" className="button-primary mt-9 gap-2">
              Contact & reservations <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
