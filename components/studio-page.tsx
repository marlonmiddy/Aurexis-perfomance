import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Check, Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { studioJourney, type Studio } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const sectionLabel = 'text-[0.65rem] font-medium uppercase tracking-[0.4em] text-accent'

function SectionIntro({ eyebrow, title, copy, inverse = false }: { eyebrow: string; title: string; copy?: string; inverse?: boolean }) {
  return (
    <Reveal className="max-w-3xl">
      <p className={cn(sectionLabel, inverse && 'text-primary-foreground/55')}>{eyebrow}</p>
      <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-balance md:text-6xl">{title}</h2>
      {copy ? <p className={cn('mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base', inverse && 'text-primary-foreground/60')}>{copy}</p> : null}
    </Reveal>
  )
}

function SurfaceSection({ studio }: { studio: Studio }) {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-40">
        <SectionIntro eyebrow={studio.environmentsLabel} title="The familiar, made exceptional" copy="We work with the surfaces already present, changing how they perform, feel and define the whole." />
        <div className={cn('mt-16 grid gap-4 md:grid-cols-2 lg:mt-20', studio.environments.length > 4 ? 'lg:grid-cols-3' : 'lg:grid-cols-4')}>
          {studio.environments.map((surface, index) => (
            <Reveal key={surface.title} delay={index * 70}>
              <article className="surface-card group relative min-h-[30rem] overflow-hidden rounded-3xl bg-primary text-primary-foreground" tabIndex={0}>
                <Image src={surface.image} alt={surface.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-1000 group-hover:scale-105 group-focus:scale-105" />
                <div className="surface-card-scrim absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6">
                  <p className="text-[0.65rem] tracking-[0.28em] text-primary-foreground/55">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="font-serif text-3xl font-light">{surface.title}</h3>
                  <p className="text-sm leading-relaxed text-primary-foreground/75">{surface.line}</p>
                  <p className="surface-card-detail text-sm leading-relaxed text-primary-foreground/65">{surface.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function IndustriesSection({ studio }: { studio: Studio }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:py-40">
      <SectionIntro eyebrow="Industries" title="Expertise shaped around real environments" copy="Each sector brings different tolerances, operating rhythms and expectations. The system changes with the context." />
      <div className="mt-16 grid gap-4 md:grid-cols-12 md:auto-rows-[16rem] lg:mt-20">
        {studio.industries.map((industry, index) => (
          <Reveal key={industry.title} className={cn('md:col-span-6', index === 0 && 'md:col-span-7 md:row-span-2', index === 1 && 'md:col-span-5', index === 2 && 'md:col-span-5', index > 2 && 'md:col-span-6')} delay={(index % 3) * 80}>
            <article className="group relative h-full min-h-72 overflow-hidden rounded-3xl bg-primary text-primary-foreground">
              <Image src={industry.image} alt={industry.alt} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="surface-card-scrim absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6 md:p-8">
                <h3 className="font-serif text-3xl font-light">{industry.title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-primary-foreground/70">{industry.line}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function JourneySection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-40">
        <SectionIntro eyebrow="Transformation journey" title="Seven stages. One controlled outcome." copy="From the first conversation to the final reveal, every decision is documented and every transition has an owner." inverse />
        <ol className="journey-line mt-20 flex flex-col">
          {studioJourney.map((step, index) => (
            <Reveal as="li" key={step.title} delay={(index % 4) * 70} className="journey-step relative grid gap-4 border-t border-primary-foreground/15 py-8 pl-10 md:grid-cols-12 md:items-baseline md:gap-8 md:pl-0">
              <p className="text-[0.65rem] tracking-[0.28em] text-primary-foreground/40 md:col-span-2">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="font-serif text-3xl font-light md:col-span-4 md:text-4xl">{step.title}</h3>
              <p className="max-w-xl text-sm leading-relaxed text-primary-foreground/60 md:col-span-5">{step.line}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function PrinciplesSection({ studio }: { studio: Studio }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:py-40">
      <SectionIntro eyebrow="Why Aurexis" title="Precision you can see. Discipline you can trust." />
      <div className="mt-16 grid border-t border-border sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {studio.principles.map((principle, index) => (
          <Reveal key={principle.title} delay={(index % 4) * 60} className="border-b border-border py-8 sm:px-6 sm:odd:border-r lg:min-h-64 lg:border-r lg:odd:border-r lg:nth-[4n]:border-r-0 lg:first:pl-0">
            <Check className="size-4 text-accent" aria-hidden="true" />
            <h3 className="mt-10 font-serif text-2xl font-light">{principle.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{principle.proof}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function GallerySection({ studio }: { studio: Studio }) {
  return (
    <section className="overflow-hidden bg-secondary py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro eyebrow="Capability references" title="The quality is in the whole — and the detail" copy="Curated references illustrate relevant finish directions and applications; final systems are confirmed by survey, sampling and technical suitability." />
      </div>
      <div className="mx-auto mt-16 flex max-w-[100rem] flex-col gap-6 px-6 lg:mt-20 lg:gap-10">
        <Reveal>
          <figure className="group">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl md:aspect-[2/1]">
              <Image src={studio.gallery[0].image} alt={studio.gallery[0].alt} fill sizes="100vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]" />
            </div>
            <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">{studio.gallery[0].caption}</figcaption>
          </figure>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <figure className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[4/3]">
                <Image src={studio.gallery[1].image} alt={studio.gallery[1].alt} fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]" />
              </div>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">{studio.gallery[1].caption}</figcaption>
            </figure>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:pt-32" delay={120}>
            <figure className="group">
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image src={studio.gallery[2].image} alt={studio.gallery[2].alt} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]" />
              </div>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">{studio.gallery[2].caption}</figcaption>
            </figure>
          </Reveal>
        </div>
        <Reveal>
          <figure className="group lg:ml-auto lg:w-4/5">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
              <Image src={studio.gallery[3].image} alt={studio.gallery[3].alt} fill sizes="(max-width: 1024px) 100vw, 80vw" className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]" />
            </div>
            <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">{studio.gallery[3].caption}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}

function MaterialsSection({ studio }: { studio: Studio }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28 md:py-40">
      <SectionIntro eyebrow="Aesthetics & palettes" title="Material, finish and application" copy="A curated view of relevant finish directions. Every final selection is sampled against its light, substrate and expected use." />
      <div className="mt-16 grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {studio.materials.map((material, index) => (
          <Reveal key={material.title} delay={(index % 3) * 70}>
            <article>
              <div className="material-swatch relative aspect-square overflow-hidden rounded-3xl">
                <Image src={material.image} alt={`${material.title} material texture`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-light">{material.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{material.finish}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{material.use}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-14 flex justify-center">
        <button type="button" disabled className="cursor-not-allowed rounded-xl border border-border px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground" aria-label="Material Library, coming soon">
          View Material Library — Coming Soon
        </button>
      </Reveal>
    </section>
  )
}

function FaqSection({ studio }: { studio: Studio }) {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-5xl px-6 py-28 md:py-40">
        <SectionIntro eyebrow="Questions, answered" title="Practical clarity before work begins" />
        <div className="mt-16 border-t border-border">
          {studio.faqs.map((faq) => (
            <details key={faq.question} className="faq-disclosure group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 font-serif text-xl font-light text-balance outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-secondary md:text-2xl">
                {faq.question}
                <Plus className="size-5 shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden="true" />
              </summary>
              <div className="faq-answer max-w-2xl pb-7 text-sm leading-relaxed text-muted-foreground md:text-base">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function StudioPage({ studio }: { studio: Studio }) {
  return (
    <main>
      <section className="relative flex min-h-svh items-end overflow-hidden bg-primary text-primary-foreground">
        <Image src={studio.hero} alt={studio.heroAlt} fill priority sizes="100vw" className="studio-hero-image object-cover" />
        <div className="hero-scrim absolute inset-0" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-12 pt-36 md:pb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.45em] text-primary-foreground/65">{studio.eyebrow}</p>
            <h1 className="mt-6 font-serif text-5xl font-light leading-[0.98] text-balance sm:text-6xl md:text-8xl">{studio.title}</h1>
            <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-primary-foreground/75 md:text-lg">{studio.line}</p>
            <a href="#studio-manifesto" className="lift mt-8 inline-flex items-center gap-3 rounded-xl bg-primary-foreground px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Explore the Studio <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="studio-manifesto" className="mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <p className={sectionLabel}>Our position</p>
            <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-balance md:text-6xl">{studio.headline}</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6" delay={120}>
            <p className="font-serif text-3xl font-light leading-snug text-pretty md:text-5xl">{studio.manifesto}</p>
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{studio.overview}</p>
          </Reveal>
        </div>
      </section>

      <SurfaceSection studio={studio} />
      <IndustriesSection studio={studio} />
      <JourneySection />
      <PrinciplesSection studio={studio} />
      <GallerySection studio={studio} />
      <MaterialsSection studio={studio} />
      <FaqSection studio={studio} />

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center md:py-40">
          <Reveal className="flex flex-col items-center">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-primary-foreground/50">Consultation</p>
            <h2 className="mt-5 font-serif text-5xl font-light leading-tight text-balance md:text-7xl">Begin Your Transformation</h2>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-primary-foreground/60 md:text-base">Bring us the surface, space or asset you want to rethink. We will define the material, method and controlled path forward.</p>
            <Link href="/#consultation" className="lift mt-10 inline-flex items-center gap-3 rounded-xl bg-primary-foreground px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Book a consultation <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
