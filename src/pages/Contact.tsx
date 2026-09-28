import { type FormEvent, useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { Clock, Mail, MapPin } from '../components/Icons'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { SEO } from '../components/SEO'
import { site } from '../data/site'

type FormErrors = Record<string, string>

const inputClass =
  'mt-2 w-full rounded-none border-0 border-b border-ink/20 bg-transparent px-0 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-clay focus:outline-none focus:ring-0'

function FieldError({ message }: { message?: string }) {
  return message ? <p className="mt-1.5 text-xs text-clay">{message}</p> : null
}

export function Contact() {
  const [contactSent, setContactSent] = useState(false)
  const [reservationSent, setReservationSent] = useState(false)
  const [contactErrors, setContactErrors] = useState<FormErrors>({})
  const [reservationErrors, setReservationErrors] = useState<FormErrors>({})
  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), [])

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const errors: FormErrors = {}

    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    if (name.length < 2) errors.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Enter a valid email address.'
    if (message.length < 12) errors.message = 'Please add a little more detail (at least 12 characters).'

    setContactErrors(errors)
    if (Object.keys(errors).length > 0) return

    setContactSent(true)
    form.reset()
  }

  function submitReservation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const errors: FormErrors = {}

    const name = String(data.get('reservation-name') ?? '').trim()
    const email = String(data.get('reservation-email') ?? '').trim()
    const date = String(data.get('date') ?? '')
    const time = String(data.get('time') ?? '')
    const guests = Number(data.get('guests') ?? 0)

    if (name.length < 2) errors.name = 'Please enter the booking name.'
    if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = 'Enter a valid email address.'
    if (!date) errors.date = 'Choose a date.'
    if (!time) errors.time = 'Choose a time.'
    if (!Number.isFinite(guests) || guests < 1 || guests > 10) errors.guests = 'Choose between 1 and 10 guests.'

    setReservationErrors(errors)
    if (Object.keys(errors).length > 0) return

    setReservationSent(true)
    form.reset()
  }

  return (
    <>
      <SEO
        title="Contact"
        description="Contact and reservation interface for Vela & Grain, a fictional café portfolio concept. All venue and contact information shown is fictional."
      />

      <PageHero
        eyebrow="Visit, write, reserve"
        title="Make a little room in your day."
        copy="Everything on this page is part of the fictional portfolio concept. The address, contact details and reservation flow are demonstrations, not real business services."
        image="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1800&q=86"
        imageAlt="Warm modern café tables arranged near large windows"
      />

      <section className="border-b border-ink/15 bg-cream">
        <div className="page-shell grid divide-y divide-ink/15 py-4 md:grid-cols-3 md:divide-x md:divide-y-0 md:py-0">
          <Reveal className="flex gap-4 py-8 md:px-7 md:py-10 md:first:pl-0 lg:px-10">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/40">Fictional address</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-ink/70">{site.address}</p>
            </div>
          </Reveal>
          <Reveal delay={0.05} className="flex gap-4 py-8 md:px-7 md:py-10 lg:px-10">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
            <div className="w-full">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/40">Opening hours</p>
              <div className="mt-2 max-w-xs space-y-1 text-sm text-ink/70">
                {site.hours.map(([day, hours]) => (
                  <p key={day} className="flex justify-between gap-4">
                    <span>{day}</span><span>{hours}</span>
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex gap-4 py-8 md:px-7 md:py-10 md:last:pr-0 lg:px-10">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-clay" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/40">Concept contact</p>
              <p className="mt-2 text-sm text-ink/70">{site.email}</p>
              <p className="mt-1 text-sm text-ink/70">{site.phone}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="page-shell grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Send a note</p>
            <h2 className="display-md mt-5 max-w-[8ch]">Questions, plans, or just saying hello.</h2>
            <p className="mt-6 max-w-md text-sm leading-6 text-ink/55">
              This form demonstrates client-side validation and interaction only. It does not send data to a real café or backend service.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            {contactSent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-y border-ink/15 py-12"
                role="status"
                aria-live="polite"
              >
                <p className="eyebrow">Demo complete</p>
                <h3 className="mt-4 font-display text-4xl font-semibold tracking-[-0.035em]">Your message passed local validation.</h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-ink/60">
                  No message was actually sent because this is a fictional portfolio project without a production backend.
                </p>
                <button type="button" onClick={() => setContactSent(false)} className="button-outline mt-7">
                  Send another demo message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submitContact} noValidate className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
                <label className="block text-xs font-semibold text-ink/72">
                  Name
                  <input name="name" autoComplete="name" className={inputClass} placeholder="Your name" aria-invalid={Boolean(contactErrors.name)} />
                  <FieldError message={contactErrors.name} />
                </label>
                <label className="block text-xs font-semibold text-ink/72">
                  Email
                  <input name="email" type="email" autoComplete="email" className={inputClass} placeholder="you@example.com" aria-invalid={Boolean(contactErrors.email)} />
                  <FieldError message={contactErrors.email} />
                </label>
                <label className="block text-xs font-semibold text-ink/72 sm:col-span-2">
                  Subject
                  <select name="subject" className={inputClass} defaultValue="general">
                    <option value="general">General enquiry</option>
                    <option value="events">Private events</option>
                    <option value="press">Press / collaboration</option>
                    <option value="portfolio">Portfolio feedback</option>
                  </select>
                </label>
                <label className="block text-xs font-semibold text-ink/72 sm:col-span-2">
                  Message
                  <textarea name="message" rows={5} className={`${inputClass} resize-y`} placeholder="Tell us what you had in mind…" aria-invalid={Boolean(contactErrors.message)} />
                  <FieldError message={contactErrors.message} />
                </label>
                <div className="sm:col-span-2">
                  <button type="submit" className="button-primary">Validate demo message</button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section id="reserve" className="scroll-mt-24 bg-ink text-cream">
        <div className="page-shell grid gap-14 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-28">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sand">Reservation demo</p>
            <h2 className="display-md mt-5 max-w-[9ch]">Pick a table. Pretend it’s yours.</h2>
            <p className="mt-6 max-w-md text-sm leading-6 text-cream/58">
              No reservation is created. This interaction exists solely to demonstrate how a restaurant booking flow could feel inside the portfolio website.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            {reservationSent ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="border-y border-cream/15 py-12" role="status" aria-live="polite">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-sand">Demo reservation checked</p>
                <h3 className="mt-4 font-display text-4xl font-semibold tracking-[-0.035em]">Looks good — and nothing was booked.</h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-cream/60">
                  Your example details passed local validation. No data was transmitted or stored.
                </p>
                <button type="button" onClick={() => setReservationSent(false)} className="button-light mt-7">
                  Try another reservation
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submitReservation} noValidate className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
                <label className="block text-xs font-semibold text-cream/75">
                  Booking name
                  <input
                    name="reservation-name"
                    autoComplete="name"
                    className={`${inputClass} border-cream/20 text-cream placeholder:text-cream/30 focus:border-sand`}
                    placeholder="Your name"
                    aria-invalid={Boolean(reservationErrors.name)}
                  />
                  <FieldError message={reservationErrors.name} />
                </label>
                <label className="block text-xs font-semibold text-cream/75">
                  Email
                  <input
                    name="reservation-email"
                    type="email"
                    autoComplete="email"
                    className={`${inputClass} border-cream/20 text-cream placeholder:text-cream/30 focus:border-sand`}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(reservationErrors.email)}
                  />
                  <FieldError message={reservationErrors.email} />
                </label>
                <label className="block text-xs font-semibold text-cream/75">
                  Date
                  <input
                    name="date"
                    type="date"
                    min={minDate}
                    className={`${inputClass} border-cream/20 text-cream focus:border-sand [color-scheme:dark]`}
                    aria-invalid={Boolean(reservationErrors.date)}
                  />
                  <FieldError message={reservationErrors.date} />
                </label>
                <label className="block text-xs font-semibold text-cream/75">
                  Time
                  <select name="time" className={`${inputClass} border-cream/20 text-cream focus:border-sand`} defaultValue="" aria-invalid={Boolean(reservationErrors.time)}>
                    <option value="" disabled className="text-ink">Select time</option>
                    <option value="09:00" className="text-ink">9:00 AM</option>
                    <option value="10:30" className="text-ink">10:30 AM</option>
                    <option value="12:00" className="text-ink">12:00 PM</option>
                    <option value="13:30" className="text-ink">1:30 PM</option>
                    <option value="15:00" className="text-ink">3:00 PM</option>
                  </select>
                  <FieldError message={reservationErrors.time} />
                </label>
                <label className="block text-xs font-semibold text-cream/75">
                  Guests
                  <select name="guests" className={`${inputClass} border-cream/20 text-cream focus:border-sand`} defaultValue="2" aria-invalid={Boolean(reservationErrors.guests)}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((count) => (
                      <option key={count} value={count} className="text-ink">{count} {count === 1 ? 'guest' : 'guests'}</option>
                    ))}
                  </select>
                  <FieldError message={reservationErrors.guests} />
                </label>
                <label className="block text-xs font-semibold text-cream/75">
                  Seating preference
                  <select name="seating" className={`${inputClass} border-cream/20 text-cream focus:border-sand`} defaultValue="any">
                    <option value="any" className="text-ink">Any table</option>
                    <option value="window" className="text-ink">Window</option>
                    <option value="counter" className="text-ink">Counter</option>
                    <option value="quiet" className="text-ink">Quieter corner</option>
                  </select>
                </label>
                <div className="sm:col-span-2">
                  <button type="submit" className="button-light">Check fictional reservation</button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <section className="bg-linen/60">
        <div className="page-shell py-16 lg:py-20">
          <Reveal className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="eyebrow">Map concept</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-[0.96] tracking-[-0.035em] sm:text-5xl">A location card without pretending a real venue exists.</h2>
            </div>
            <div className="relative min-h-[320px] overflow-hidden border border-ink/15 bg-[#d7ccbb] p-8 sm:p-12">
              <div className="absolute inset-0 opacity-45" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(30deg, transparent 48%, rgba(28,23,20,.2) 49%, rgba(28,23,20,.2) 51%, transparent 52%), linear-gradient(120deg, transparent 48%, rgba(28,23,20,.13) 49%, rgba(28,23,20,.13) 51%, transparent 52%)', backgroundSize: '90px 90px, 120px 120px' }} />
              <div className="relative flex min-h-[224px] items-center justify-center">
                <div className="rounded-full bg-ink p-4 text-cream shadow-soft"><MapPin className="h-6 w-6" /></div>
                <div className="absolute bottom-0 left-0 max-w-xs bg-cream/95 p-4 backdrop-blur">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-clay">Fictional location marker</p>
                  <p className="mt-1 text-sm leading-5 text-ink/70">Meridian Quarter · Kuala Lumpur</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
