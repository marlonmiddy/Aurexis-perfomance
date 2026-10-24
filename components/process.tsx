import { Compass, ScanSearch, SwatchBook, FileCheck, Wrench } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  { icon: Compass, title: 'Brief', line: 'Define the asset, objective, operating context and desired finish.' },
  { icon: ScanSearch, title: 'Survey', line: 'Review substrate condition, access, measurements and constraints.' },
  { icon: SwatchBook, title: 'Sample', line: 'Develop a material direction for visual and practical approval.' },
  { icon: FileCheck, title: 'Specify', line: 'Confirm scope, preparation, finish, programme and commercial terms.' },
  { icon: Wrench, title: 'Deliver', line: 'Prepare and install the approved system with a structured handover.' },
]

export function Process() {
  return (
    <section id="process" className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-28 md:py-40">
        <Reveal>
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-accent">Project Method</p>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl font-light leading-tight text-balance md:text-6xl">From existing condition to approved finish</h2>
        </Reveal>
        <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.title} as="li" delay={index * 70}>
              <div className="glass lift flex h-full flex-col rounded-3xl p-7">
                <step.icon className="size-5 text-accent" aria-hidden="true" />
                <p className="mt-8 text-xs text-muted-foreground">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-serif text-2xl font-normal">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.line}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
