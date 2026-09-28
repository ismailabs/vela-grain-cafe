import type { PropsWithChildren } from 'react'
import { DisclosureBadge } from './DisclosureBadge'
import { Footer } from './Footer'
import { Navigation } from './Navigation'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <a
        href="#main-content"
        className="fixed left-3 top-3 z-[100] -translate-y-24 rounded bg-ink px-4 py-2 text-sm font-semibold text-cream transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">{children}</main>
      <Footer />
      <DisclosureBadge />
    </div>
  )
}
