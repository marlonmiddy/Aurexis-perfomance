import Link from 'next/link'
import { Logo } from '@/components/logo'
import { company, studios } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-20 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo inverted />
            <p className="mt-8 max-w-sm text-sm font-light leading-relaxed text-primary-foreground/55">
              A surface transformation practice working across built environments, glass systems and mobility.
            </p>
          </div>
          <nav aria-label="Studios" className="lg:col-span-3">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-primary-foreground/40">Studios</p>
            <ul className="mt-6 flex flex-col gap-3.5">
              {studios.map((studio) => (
                <li key={studio.slug}><Link href={`/divisions/${studio.slug}`} className="text-sm font-light text-primary-foreground/70 transition-colors hover:text-primary-foreground">{studio.title}</Link></li>
              ))}
            </ul>
          </nav>
          <div className="lg:col-span-4">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-primary-foreground/40">Start a project</p>
            <address className="mt-6 flex flex-col gap-3.5 text-sm font-light not-italic text-primary-foreground/70">
              <a href={company.phoneHref} className="transition-colors hover:text-primary-foreground">{company.phone}</a>
              <a href={`mailto:${company.email}`} className="transition-colors hover:text-primary-foreground">{company.email}</a>
              <Link href="/#consultation" className="mt-3 w-fit rounded-xl border border-primary-foreground/25 px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground">Prepare a project brief</Link>
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-6">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/35">© {new Date().getFullYear()} Aurexis Surface Transformations</p>
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground/35">Material suitability confirmed per project</p>
        </div>
      </div>
    </footer>
  )
}
