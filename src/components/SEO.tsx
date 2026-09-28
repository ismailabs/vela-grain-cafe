import { useEffect } from 'react'

type SEOProps = {
  title: string
  description: string
}

const upsertMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

export function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = `${title} — Vela & Grain`
    upsertMeta('meta[name="description"]', 'name', 'description', description)
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', `${title} — Vela & Grain`)
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description)
  }, [title, description])

  return null
}
