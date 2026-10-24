'use client'

import { type FormEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { studios, company } from '@/lib/site-data'

export function ConsultationForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const phone = String(form.get('phone') ?? '').trim()
    const studio = String(form.get('studio') ?? '').trim()
    const location = String(form.get('location') ?? '').trim()
    const message = String(form.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Project brief from ${name} — ${studio}`)
    const body = encodeURIComponent([
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Studio: ${studio}`,
      `Project location: ${location || 'Not provided'}`,
      '',
      'Project brief:',
      message,
    ].join('\n'))
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
  }

  const inputClass = 'rounded-xl border border-input bg-background px-4 py-3 text-sm normal-case tracking-normal text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/20'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          Name
          <input type="text" name="name" required autoComplete="name" className={inputClass} />
        </label>
        <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          Email
          <input type="email" name="email" required autoComplete="email" className={inputClass} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          Phone <span className="normal-case tracking-normal">(optional)</span>
          <input type="tel" name="phone" autoComplete="tel" className={inputClass} />
        </label>
        <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          Project location <span className="normal-case tracking-normal">(optional)</span>
          <input type="text" name="location" autoComplete="address-level2" className={inputClass} />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
        Studio
        <select name="studio" className={inputClass}>
          {studios.map((studio) => <option key={studio.slug}>{studio.title}</option>)}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
        Project brief
        <textarea name="message" rows={5} required placeholder="Describe the surface, current condition, intended result and any timing constraints." className={`${inputClass} resize-y placeholder:normal-case placeholder:tracking-normal`} />
      </label>
      <p className="text-xs leading-relaxed text-muted-foreground">Submitting opens a prepared email in your mail app. You can review it and attach plans or reference images before sending.</p>
      <button type="submit" className="lift mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground">
        Prepare project email <ArrowUpRight aria-hidden="true" />
      </button>
    </form>
  )
}
