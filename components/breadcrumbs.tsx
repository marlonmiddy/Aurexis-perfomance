import Link from 'next/link'
import { JsonLd } from '@/components/json-ld'
import { breadcrumbGraph } from '@/lib/structured-data'

export type Crumb = { name: string; path: string }

/**
 * Renders the visible trail and the matching BreadcrumbList together so the
 * structured data can never describe a trail the user cannot see.
 */
export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          {trail.map((crumb, index) => {
            const last = index === trail.length - 1
            return (
              <li key={crumb.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-foreground">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.path} className="transition-colors hover:text-accent">
                    {crumb.name}
                  </Link>
                )}
                {last ? null : <span aria-hidden="true">/</span>}
              </li>
            )
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbGraph(trail)} />
    </>
  )
}
