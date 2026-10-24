import type { Metadata } from 'next'
import Link from 'next/link'
import { LegalShell, Notice, type LegalSection } from '@/components/legal-shell'
import { routes } from '@/lib/seo'

const UPDATED = '19 September 2026'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How the Aurexis Surface Transformations website uses essential, functional and analytical cookies and similar technologies.',
  alternates: { canonical: routes.cookies },
  openGraph: {
    title: 'Cookie Policy — AUREXIS',
    description:
      'Information about cookies and similar technologies used by the Aurexis website.',
    url: routes.cookies,
    type: 'article',
  },
}

const sections: LegalSection[] = [
  {
    id: 'what-are-cookies',
    title: 'What Are Cookies?',
    body: (
      <>
        <p>
          Cookies are small files or pieces of information that websites may store on
          your device or access through your browser. Similar technologies may perform
          related functions.
        </p>
        <p>
          Cookies can help websites remember preferences, maintain functionality,
          understand how visitors use a website and improve website performance.
        </p>
      </>
    ),
  },
  {
    id: 'categories',
    title: 'Cookie Categories',
    body: (
      <>
        <h3>Essential Cookies</h3>
        <p>
          Essential technologies are used where necessary for the website to operate,
          maintain security, deliver requested functionality or support core technical
          operations.
        </p>
        <h3>Functional Cookies</h3>
        <p>
          Functional technologies may remember preferences or settings and help provide
          a more consistent website experience.
        </p>
        <h3>Analytical Cookies</h3>
        <p>
          Analytical technologies may collect information about how visitors interact
          with the website, such as pages visited, approximate usage patterns and
          performance information. This information may be used to understand website
          performance and improve the user experience.
        </p>
      </>
    ),
  },
  {
    id: 'technologies-used',
    title: 'Technologies Used on This Website',
    body: (
      <>
        <p>
          The Aurexis website may use essential technical technologies required for
          hosting, security, routing and normal website functionality.
        </p>
        <p>
          Where analytics, embedded content or other third-party functionality is
          enabled, those services may introduce additional cookies or similar
          technologies. Their processing may be governed by their respective privacy
          policies and terms.
        </p>
        <Notice title="Third-party services">
          The specific cookies active on the website can change as website functionality
          and service providers change. Third-party services may therefore introduce
          technologies that are not directly controlled by Aurexis.
        </Notice>
      </>
    ),
  },
  {
    id: 'managing-cookies',
    title: 'Managing Cookies',
    body: (
      <>
        <p>
          Most modern browsers provide controls that allow you to view, restrict, block
          or delete cookies stored on your device.
        </p>
        <p>
          Blocking certain cookies may affect website functionality or prevent
          particular features from operating as intended.
        </p>
      </>
    ),
  },
  {
    id: 'cookies-and-personal-information',
    title: 'Cookies and Personal Information',
    body: (
      <>
        <p>
          Some cookie identifiers or information collected through similar technologies
          may constitute personal information under applicable privacy laws depending on
          the circumstances.
        </p>
        <p>
          Where applicable, such information will be handled in accordance with the
          Aurexis <Link href={routes.privacy}>Privacy Policy</Link> and applicable
          privacy legislation, including POPIA where applicable.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    body: (
      <p>
        Aurexis may update this Cookie Policy when website technologies, service
        providers, legal requirements or our practices change. Updates will be published
        on this page.
      </p>
    ),
  },
]

export default function CookiePolicyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Cookie Policy"
      description="Information about cookies and similar technologies that may be used by the Aurexis website."
      updated={UPDATED}
      sections={sections}
      trail={[
        { name: 'Home', path: routes.home },
        { name: 'Cookie Policy', path: routes.cookies },
      ]}
    />
  )
}
