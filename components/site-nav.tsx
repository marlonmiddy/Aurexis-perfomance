'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { Logo, LogoMark } from '@/components/logo'
import { company, studios } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const pageLinks = [
  { href: '/#divisions', label: 'Studios' },
  { href: '/#approach', label: 'Approach' },
  { href: '/#process', label: 'Project Method' },
  { href: '/#consultation', label: 'Start a Project' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => close(), [pathname, close])
  useEffect(() => {
    if (!open) return
    document.documentElement.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  const light = scrolled && !open

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
        <nav aria-label="Main" className={cn('flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-700 md:px-6', light ? 'glass' : 'border border-transparent bg-transparent')}>
          <Link href="/" aria-label="Aurexis home" onClick={close}>
            <span className="hidden md:block"><Logo inverted={!light} /></span>
            <span className="md:hidden"><LogoMark inverted={!light} /></span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/#consultation" className={cn('hidden rounded-xl px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-all sm:block', light ? 'bg-primary text-primary-foreground' : 'glass-dark text-primary-foreground')}>Start a project</Link>
            <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="fullscreen-menu" className={cn('flex items-center gap-3 rounded-xl border px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-all', light ? 'border-border text-foreground' : 'border-primary-foreground/25 text-primary-foreground')}>
              <span className="relative flex h-2.5 w-5 flex-col justify-between" aria-hidden="true">
                <span className={cn('h-px w-full bg-current transition-transform', open && 'translate-y-[4.5px] rotate-45')} />
                <span className={cn('h-px w-full bg-current transition-transform', open && '-translate-y-[4.5px] -rotate-45')} />
              </span>
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </nav>
      </header>

      <div id="fullscreen-menu" role="dialog" aria-modal="true" aria-label="Site navigation" className={cn('fixed inset-0 z-40 bg-primary transition-all duration-500', open ? 'visible opacity-100' : 'invisible opacity-0')}>
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-28 md:px-12 md:pt-36">
          <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-12">
            <nav aria-label="Studios" className="md:col-span-7">
              <p className="mb-7 text-[0.65rem] font-medium uppercase tracking-[0.4em] text-primary-foreground/40">Three studios</p>
              <ul className="flex flex-col">
                {studios.map((studio) => (
                  <li key={studio.slug}>
                    <Link href={`/divisions/${studio.slug}`} onClick={close} className="group flex items-center border-b border-primary-foreground/10 py-4 font-serif text-3xl font-light text-primary-foreground md:text-5xl">
                      {studio.title}<ArrowUpRight className="ml-auto size-5 text-primary-foreground/35 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col gap-10 md:col-span-4 md:col-start-9">
              <nav aria-label="Explore">
                <p className="mb-6 text-[0.65rem] font-medium uppercase tracking-[0.4em] text-primary-foreground/40">Explore</p>
                <ul className="flex flex-col gap-4">{pageLinks.map((link) => <li key={link.href}><Link href={link.href} onClick={close} className="text-lg font-light text-primary-foreground/75 hover:text-primary-foreground">{link.label}</Link></li>)}</ul>
              </nav>
              <div className="flex flex-col gap-3 border-t border-primary-foreground/10 pt-8 text-sm text-primary-foreground/70">
                <a href={company.phoneHref}>{company.phone}</a>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
