import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons'
import { PageHero } from '../components/PageHero'
import { ParallaxImage } from '../components/ParallaxImage'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { SEO } from '../components/SEO'
import { values } from '../data/site'

export function About() {
  return (
    <>
      <SEO
        title="About"
        description="Discover the fictional story, design philosophy and hospitality principles behind Vela & Grain, a premium café portfolio concept."
      />

      <PageHero
        eyebrow="A fictional café with a real point of view"
        title="Built around the pace of a good morning."
        copy="Vela & Grain imagines a café where the room, menu and service all do the same thing: make it easier to stay present."
        image="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1800&q=86"
        imageAlt="Warm café counter and dining room with understated contemporary styling"
      />

      <section className="section-pad bg-cream">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">The story</p>
            <p className="mt-5 max-w-sm text-sm leading-6 text-ink/55">
              This story is intentionally fictional. It exists to demonstrate how a restaurant brand can feel coherent across content, design and interaction.
            </p>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="display-md max-w-[13ch]">Not invented to be impressive. Designed to feel believable.</h2>
            </Reveal>
            <Reveal delay={0.08} className="mt-8 grid gap-6 text-base leading-7 text-ink/66 sm:grid-cols-2 sm:text-[1.05rem] sm:leading-8">
              <p>
                The fictional premise is simple: a small city café shaped by two rituals — carefully made coffee and food that feels generous without becoming complicated.
              </p>
              <p>
                The brand avoids spectacle in favour of texture, daylight, quiet confidence and a menu concise enough for every item to have a reason to be there.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-linen/60">
        <div className="page-shell grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14 lg:py-20">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1500&q=86"
            alt="Coffee drinks gathered over a café table"
            className="aspect-[5/6] min-h-[480px]"
            offset={34}
          />
          <div className="grid content-between gap-10 py-2 lg:py-8">
            <Reveal>
              <p className="eyebrow">Coffee, without theatre</p>
              <h2 className="mt-5 font-display text-[clamp(2.8rem,5vw,5.2rem)] font-medium leading-[0.92] tracking-[-0.04em]">
                Precise enough to care. Relaxed enough to enjoy.
              </h2>
              <p className="body-lg mt-6 max-w-xl">
                The fictional coffee programme centres on a dependable house espresso, a rotating filter selection and a few signatures that still taste like coffee.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="grid grid-cols-2 gap-4 border-t border-ink/15 pt-6 text-sm text-ink/60">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clay">House profile</p>
                <p className="mt-2">Cocoa · almond · dried cherry</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clay">Filter focus</p>
                <p className="mt-2">Seasonal single-origin rotation</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="page-shell">
          <SectionHeading
            eyebrow="Principles"
            title="Three ideas that hold the concept together."
            copy="A restaurant brand feels stronger when its design decisions can be traced back to a small number of clear operating ideas."
          />

          <div className="mt-14 grid border-y border-ink/15 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal
                key={value.number}
                delay={index * 0.08}
                className={`py-9 md:px-7 md:py-12 lg:px-10 ${index > 0 ? 'border-t border-ink/15 md:border-l md:border-t-0' : ''}`}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-clay">{value.number}</span>
                <h3 className="mt-9 max-w-[11ch] font-display text-[2.15rem] font-semibold leading-[0.95] tracking-[-0.035em]">
                  {value.title}
                </h3>
                <p className="mt-5 text-sm leading-6 text-ink/60">{value.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-ink text-cream">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-5 py-20 sm:px-8 lg:px-14 lg:py-24 xl:px-20">
            <Reveal className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand">The room</p>
              <h2 className="display-md mt-5">Warm materials. Clear sightlines. No visual noise.</h2>
              <p className="mt-6 text-base leading-7 text-cream/68 sm:text-lg sm:leading-8">
                The imagined interior uses timber, stone, linen tones and plants sparingly. The aim is not minimalism as a style, but calm as a practical hospitality tool.
              </p>
              <Link to="/gallery" className="button-light mt-8 gap-2">
                See the gallery <ArrowRight />
              </Link>
            </Reveal>
          </div>
          <ParallaxImage
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1500&q=86"
            alt="Modern café interior with warm wood, plants and soft light"
            className="min-h-[560px]"
            offset={34}
          />
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="page-shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Portfolio intent</p>
            <blockquote className="mt-6 font-display text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.96] tracking-[-0.035em]">
              “A restaurant website should make the place feel real before the first visit — without pretending this fictional one actually exists.”
            </blockquote>
            <p className="mx-auto mt-7 max-w-2xl text-sm leading-6 text-ink/55">
              Vela & Grain was created as a fictional portfolio exercise to demonstrate restaurant-focused art direction, responsive frontend engineering, motion and conversion-oriented UX.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
