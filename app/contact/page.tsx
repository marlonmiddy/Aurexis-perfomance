import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ConsultationForm } from '@/components/consultation-form'
import { JsonLd } from '@/components/json-ld'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { absoluteUrl, routes } from '@/lib/seo'
import { company, legalEntity, primaryLocation } from '@/lib/site-data'
import { ids } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Contact — Surface Transformation Enquiries in Cape Town',
  description:
    'Contact Aurexis Surface Transformations in Observatory, Cape Town. Corporate details for MSS TRADING (PTY) LTD and a direct pathway to prepare a project brief.',
  alternates: { canonical: routes.contact },
  openGraph: {
    title: 'Contact — AUREXIS',
    description:
      'Reach the Aurexis studio in Observatory, Cape Town, and prepare a project brief.',
    url: routes.contact,
    type: 'website',
  },
}

const eyebrow = 'text-[0.65rem] font-medium uppercase tracking-[0.4em] text-accent'

const briefChecklist = [
  'The type of surface and where it sits in the building or on the vehicle',
  'Project location and access conditions',
  'Approximate dimensions or panel counts',
  'The condition of the existing surface',
  'The finish or outcome you have in mind',
  'Photographs of the area, if you have them',
]

export default function ContactPage() {
  const capeTown = company.offices[0]

  return (
    <>
      <SiteNav />
      <main id="main">
        <PageHero
          eyebrow="Contact"
          title="Start a conversation"
          line="Tell us about the surface, the context and the ambition. We will tell you what is possible."
          compact
        />

        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <Breadcrumbs
            trail={[
              { name: 'Home', path: routes.home },
              { name: 'Contact', path: routes.contact },
            ]}
          />
        </div>

        {/* Direct channels + studio location */}
        <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <p className={eyebrow}>Direct channels</p>
              <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-balance md:text-5xl">
                Speak to the studio
              </h2>

              <dl className="mt-10 flex flex-col divide-y divide-border border-y border-border text-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2 py-5">
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    Telephone
                  </dt>
                  <dd>
                    <a href={company.phoneHref} className="transition-colors hover:text-accent">
                      {company.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 py-5">
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    WhatsApp
                  </dt>
                  <dd>
                    <a
                      href={company.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-accent"
                    >
                      {company.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 py-5">
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${company.email}`}
                      className="break-all transition-colors hover:text-accent"
                    >
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 py-5">
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    Instagram
                  </dt>
                  <dd>
                    <a
                      href={company.instagramHref}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-accent"
                    >
                      {company.instagram}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-12">
                <p className={eyebrow}>Studio location</p>
                <address className="mt-5 text-sm font-light not-italic leading-relaxed text-muted-foreground">
                  {primaryLocation.street}
                  <br />
                  {primaryLocation.suburb}
                  <br />
                  {primaryLocation.city}, {primaryLocation.region}
                  <br />
                  {primaryLocation.country}
                </address>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={company.googleBusinessProfile}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
                  >
                    Google Business Profile <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                  <a
                    href={capeTown.mapHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
                  >
                    Directions <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </div>
                <p className="mt-6 text-sm font-light leading-relaxed text-muted-foreground">
                  Aurexis works across {company.regions.slice(0, -1).join(', ')} and the
                  wider {company.regions.at(-1)} region. Site visits outside Cape Town
                  are arranged per project.
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={120}>
              <div className="glass rounded-3xl p-6 md:p-10">
                <p className={eyebrow}>Project brief</p>
                <h2 className="mt-4 font-serif text-3xl font-light leading-tight md:text-4xl">
                  Prepare an enquiry
                </h2>
                <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                  Recommendations, availability and pricing are confirmed only after the
                  project requirements have been reviewed.
                </p>
                <div className="mt-8">
                  <ConsultationForm />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* What helps us respond accurately */}
        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <Reveal className="max-w-3xl">
              <p className={eyebrow}>Before you write</p>
              <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-balance md:text-5xl">
                What helps us answer properly
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                Accurate project information lets us assess requirements and determine
                whether a site inspection, measurement or material assessment is
                necessary before quoting.
              </p>
            </Reveal>
            <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {briefChecklist.map((item, index) => (
                <li key={item} className="flex gap-4 bg-card p-7">
                  <span className="text-[0.65rem] tabular-nums tracking-[0.2em] text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-light leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Corporate registration */}
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <Reveal className="lg:col-span-5">
              <p className={eyebrow}>Corporate information</p>
              <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-balance md:text-5xl">
                The entity behind the work
              </h2>
              <p className="mt-6 text-sm font-light leading-relaxed text-muted-foreground">
                Aurexis Surface Transformations is the trading name of{' '}
                {legalEntity.name}. Contracts, quotations and invoices are issued in the
                name of the legal entity.
              </p>
              <Link
                href={routes.about}
                className="mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:text-accent"
              >
                About Aurexis <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={120}>
              <dl className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
                <div className="bg-card p-6">
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    Legal entity
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed">{legalEntity.name}</dd>
                </div>
                <div className="bg-card p-6">
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    Trading as
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed">{legalEntity.tradingAs}</dd>
                </div>
                <div className="bg-card p-6">
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    Taxpayer reference
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed tabular-nums">
                    {legalEntity.taxpayerReference}
                  </dd>
                </div>
                <div className="bg-card p-6">
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    Chief Executive Officer
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed">{company.ceo}</dd>
                </div>
                <div className="bg-card p-6 sm:col-span-2">
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    Registered address
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed">
                    {legalEntity.registeredAddress.lines.join(', ')},{' '}
                    {legalEntity.registeredAddress.postalCode},{' '}
                    {legalEntity.registeredAddress.country}
                  </dd>
                </div>
              </dl>

              <p className="mt-8 text-sm font-light leading-relaxed text-muted-foreground">
                The registered address is the company&apos;s statutory address. Project
                work is coordinated from the Cape Town studio. See our{' '}
                <Link href={routes.privacy} className="underline decoration-accent underline-offset-4 hover:text-accent">
                  Privacy Policy
                </Link>
                ,{' '}
                <Link href={routes.terms} className="underline decoration-accent underline-offset-4 hover:text-accent">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href={routes.cookies} className="underline decoration-accent underline-offset-4 hover:text-accent">
                  Cookie Policy
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          '@id': `${absoluteUrl(routes.contact)}#webpage`,
          url: absoluteUrl(routes.contact),
          name: 'Contact Aurexis Surface Transformations',
          description:
            'Contact details, studio location and corporate registration information for Aurexis Surface Transformations.',
          about: { '@id': ids.business },
          isPartOf: { '@id': ids.website },
        }}
      />
    </>
  )
}
