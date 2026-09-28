import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/Icons'
import { SEO } from '../components/SEO'

export function NotFound() {
  return (
    <section className="grid min-h-[80vh] place-items-center bg-cream px-5 pb-20 pt-32 text-center">
      <SEO title="Page not found" description="The requested Vela & Grain portfolio page could not be found." />
      <div>
        <p className="eyebrow">404 · No table here</p>
        <h1 className="mt-5 font-display text-[clamp(4rem,12vw,9rem)] font-medium leading-[0.82] tracking-[-0.05em]">Wrong turn.</h1>
        <p className="mx-auto mt-7 max-w-md text-sm leading-6 text-ink/58">The page you requested is not part of this fictional café portfolio.</p>
        <Link to="/" className="button-primary mt-8 gap-2">Back home <ArrowRight /></Link>
      </div>
    </section>
  )
}
