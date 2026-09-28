import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { NavLink, useLocation } from 'react-router-dom'
import { CloseIcon, MenuIcon } from './Icons'

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className={`font-display text-[1.65rem] font-semibold tracking-[-0.03em] ${light ? 'text-cream' : 'text-ink'}`}>
      Vela <span className="italic">&</span> Grain
    </span>
  )
}

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const heroRoute = location.pathname === '/'
  const transparent = heroRoute && !scrolled && !open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const foreground = transparent ? 'text-cream' : 'text-ink'

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          transparent ? 'bg-transparent' : 'border-b border-ink/10 bg-cream/92 backdrop-blur-xl'
        }`}
      >
        <div className="page-shell flex h-[78px] items-center justify-between">
          <NavLink to="/" aria-label="Vela & Grain home" className="relative z-50">
            <Wordmark light={transparent} />
          </NavLink>

          <nav aria-label="Primary" className={`hidden items-center gap-8 lg:flex ${foreground}`}>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative py-2 text-[13px] font-medium transition-opacity hover:opacity-55 ${
                    isActive ? 'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-current' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <NavLink
              to="/contact#reserve"
              className={`inline-flex min-h-10 items-center rounded-full border px-5 text-[13px] font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                transparent
                  ? 'border-cream/50 text-cream hover:bg-cream hover:text-ink'
                  : 'border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-cream'
              }`}
            >
              Reserve a table
            </NavLink>
          </div>

          <button
            type="button"
            className={`relative z-50 grid h-11 w-11 place-items-center rounded-full border lg:hidden ${
              open || !transparent ? 'border-ink/15 text-ink' : 'border-cream/35 text-cream'
            }`}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-0 z-40 bg-cream lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <div className="page-shell flex min-h-dvh flex-col pb-8 pt-28">
              <nav aria-label="Mobile primary" className="mt-auto mb-auto flex flex-col">
                {links.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * index + 0.08, duration: 0.45 }}
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `flex items-center justify-between border-b border-ink/12 py-4 font-display text-[clamp(2.6rem,11vw,4rem)] leading-none tracking-[-0.035em] ${
                          isActive ? 'text-clay' : 'text-ink'
                        }`
                      }
                    >
                      {link.label}
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                        0{index + 1}
                      </span>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="grid gap-4 border-t border-ink/12 pt-5 text-sm text-ink/65 sm:grid-cols-2">
                <p>18 Arbor Lane, Meridian Quarter<br />Kuala Lumpur · fictional address</p>
                <div className="sm:text-right">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clay">Portfolio notice</p>
                  <p className="mt-1">This café concept is fictional.</p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
