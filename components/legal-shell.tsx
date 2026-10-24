import type { ReactNode } from 'react'
import Link from 'next/link'
import { Breadcrumbs, type Crumb } from '@/components/breadcrumbs'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'

export type LegalSection = {
  /** Stable anchor id, also used by the on-page contents list. */
  id: string
  title: string
  body: ReactNode
}

/**
 * Shared shell for policy and corporate-information pages. Sections are passed
 * as data rather than children so the contents list, the heading numbers and
 * the anchors are generated from one source and cannot fall out of sync.
 */
export function LegalShell({
  eyebrow,
  title,
  description,
  updated,
  sections,
  trail,
}: {
  eyebrow: string
  title: string
  description: string
  updated: string
  sections: LegalSection[]
  trail: Crumb[]
}) {
  return (
    <>
      <SiteNav />
      <main id="main">
        <PageHero eyebrow={eyebrow} title={title} line={description} compact />

        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Breadcrumbs trail={trail} />

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-accent">
                  On this page
                </p>
                <nav aria-label="Sections" className="mt-6">
                  <ol className="flex flex-col gap-3 border-l border-border pl-5">
                    {sections.map((section, index) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-sm font-light leading-snug text-muted-foreground transition-colors hover:text-accent"
                        >
                          <span className="tabular-nums">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="ml-3">{section.title}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
                <p className="mt-8 border-t border-border pt-6 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Last updated {updated}
                </p>
              </div>
            </aside>

            <article className="legal-prose lg:col-span-8">
              {sections.map((section, index) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2>
                    <span className="mr-4 text-sm tabular-nums text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {section.title}
                  </h2>
                  {section.body}
                </section>
              ))}

              <div className="mt-16 flex flex-wrap gap-4 border-t border-border pt-10">
                <Link
                  href="/contact"
                  className="rounded-xl bg-primary px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Contact Aurexis
                </Link>
                <Link
                  href="/#consultation"
                  className="rounded-xl border border-border px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
                >
                  Prepare a project brief
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

/** Key/value block for corporate registration details. */
export function DetailGrid({
  items,
}: {
  items: { label: string; value: ReactNode }[]
}) {
  return (
    <dl className="not-prose my-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label} className="bg-card p-5">
          <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
            {item.label}
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-foreground">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

/** Emphasised callout used for registered-office and advisory notices. */
export function Notice({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <aside className="not-prose my-8 rounded-2xl border border-border bg-secondary p-6">
      <p className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-accent">
        {title}
      </p>
      <div className="mt-3 text-sm leading-relaxed text-foreground">
        {children}
      </div>
    </aside>
  )
}
