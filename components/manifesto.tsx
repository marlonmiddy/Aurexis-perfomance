import { Reveal } from '@/components/reveal'
import { LogoMark } from '@/components/logo'

const principles = [
  { title: 'Assess', copy: 'Start with the substrate, use and site conditions.' },
  { title: 'Specify', copy: 'Match the finish direction to performance and visual intent.' },
  { title: 'Approve', copy: 'Confirm samples and scope before work moves forward.' },
]

export function Manifesto() {
  return (
    <section id="approach" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6 py-28 text-center md:py-44">
        <Reveal><LogoMark inverted className="mx-auto mb-12 size-14" /></Reveal>
        <Reveal delay={100}>
          <p className="font-serif text-3xl font-light leading-snug text-balance md:text-5xl">
            Surface transformation is a considered alternative to unnecessary replacement.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-primary-foreground/60">
            Aurexis brings built environments, glass systems and mobility surfaces into one practical discipline. Commercial identity is applied through the physical space, pane or vehicle — always as a material response to the asset and brief.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <dl className="mt-20 grid gap-8 border-t border-primary-foreground/15 pt-12 sm:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.title}>
                <dt className="font-serif text-2xl font-light">{principle.title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-primary-foreground/55">{principle.copy}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
