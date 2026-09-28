import { Link } from 'react-router-dom'
import { ArrowUpRight } from './Icons'
import { site } from '../data/site'

const footerLinks = [
  ['Home', '/'],
  ['Menu', '/menu'],
  ['About', '/about'],
  ['Gallery', '/gallery'],
  ['Contact', '/contact'],
]

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="page-shell py-16 sm:py-20 lg:py-24">
        <div className="grid gap-12 border-b border-cream/15 pb-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:pb-20">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand">Come as you are</p>
            <h2 className="mt-5 max-w-[9ch] font-display text-[clamp(3.2rem,7vw,7rem)] font-medium leading-[0.85] tracking-[-0.045em]">
              Save room for one more cup.
            </h2>
            <Link to="/contact#reserve" className="button-light mt-8 gap-2">
              Reserve a table <ArrowUpRight />
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:pt-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/45">Explore</p>
              <ul className="mt-5 space-y-3 text-sm">
                {footerLinks.map(([label, to]) => (
                  <li key={to}>
                    <Link className="text-cream/75 transition-colors hover:text-cream" to={to}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/45">Visit</p>
              <p className="mt-5 max-w-xs text-sm leading-6 text-cream/70">{site.address}</p>
              <p className="mt-4 text-sm text-cream/70">{site.phone}</p>
              <p className="mt-1 text-sm text-cream/70">{site.email}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-7 border-b border-cream/15 py-9 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sand">Fictional project disclosure</p>
            <p className="mt-2 text-sm leading-6 text-cream/58">
              Vela & Grain is a fictional café concept created as a portfolio project. The business, menu, location,
              contact details and reservation experience shown on this website are not real.
            </p>
          </div>
          <div className="rounded border border-cream/10 bg-black/20 px-4 py-3">
            <img
              src="/built-by-ismail.png"
              alt="Built by Ismail — portfolio creator branding"
              className="h-auto w-[min(100%,340px)] object-contain"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Vela & Grain — portfolio concept only.</p>
          <p>React · Vite · TypeScript · Tailwind · Motion</p>
        </div>
      </div>
    </footer>
  )
}
