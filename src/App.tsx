import type { ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Gallery } from './pages/Gallery'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { NotFound } from './pages/NotFound'

function RouteFrame({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0 }}
      transition={{ duration: 0.28 }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <Layout>
      <ScrollToTop />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<RouteFrame><Home /></RouteFrame>} />
          <Route path="/menu" element={<RouteFrame><Menu /></RouteFrame>} />
          <Route path="/about" element={<RouteFrame><About /></RouteFrame>} />
          <Route path="/gallery" element={<RouteFrame><Gallery /></RouteFrame>} />
          <Route path="/contact" element={<RouteFrame><Contact /></RouteFrame>} />
          <Route path="*" element={<RouteFrame><NotFound /></RouteFrame>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}
