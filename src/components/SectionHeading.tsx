import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  copy?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({ eyebrow, title, copy, align = 'left', className = '' }: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <Reveal className={`${centered ? 'mx-auto text-center' : ''} ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-md mt-4 text-balance">{title}</h2>
      {copy ? <p className={`body-lg mt-6 max-w-2xl ${centered ? 'mx-auto' : ''}`}>{copy}</p> : null}
    </Reveal>
  )
}
