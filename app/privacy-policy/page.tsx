import type { Metadata } from 'next'
import { DetailGrid, LegalShell, type LegalSection } from '@/components/legal-shell'
import { routes } from '@/lib/seo'
import { legalEntity } from '@/lib/site-data'

const UPDATED = '19 September 2026'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Aurexis Surface Transformations, a trading name of MSS TRADING (PTY) LTD, collects, uses, stores and protects personal information under POPIA.',
  alternates: { canonical: routes.privacy },
  openGraph: {
    title: 'Privacy Policy — AUREXIS',
    description:
      'How Aurexis Surface Transformations collects, uses, protects and handles personal information.',
    url: routes.privacy,
    type: 'article',
  },
}

const sections: LegalSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    body: (
      <>
        <p>
          Aurexis Surface Transformations is a trading name and operating business of
          MSS TRADING (PTY) LTD. This Privacy Policy explains how we collect, use,
          store, disclose and protect personal information obtained through our
          website, enquiries and business interactions.
        </p>
        <p>
          Aurexis is committed to handling personal information responsibly and in
          accordance with applicable South African privacy law, including the
          Protection of Personal Information Act 4 of 2013 (POPIA), where applicable.
        </p>
      </>
    ),
  },
  {
    id: 'responsible-party',
    title: 'Responsible Party',
    body: (
      <DetailGrid
        items={[
          { label: 'Trading Entity', value: legalEntity.tradingAs },
          { label: 'Legal Entity', value: legalEntity.name },
          { label: 'Taxpayer Reference', value: legalEntity.taxpayerReference },
          {
            label: 'Registered Address',
            value: `${legalEntity.registeredAddress.lines.join(', ')}, ${legalEntity.registeredAddress.postalCode}`,
          },
        ]}
      />
    ),
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    body: (
      <>
        <p>
          Depending on how you interact with Aurexis, we may collect information that
          you voluntarily provide to us, including:
        </p>
        <ul>
          <li>Name and contact information.</li>
          <li>Email address, telephone number or other contact details.</li>
          <li>Project location and project requirements.</li>
          <li>Information concerning surfaces, materials and dimensions.</li>
          <li>Photographs, videos, drawings or other project files.</li>
          <li>Information contained in correspondence with us.</li>
        </ul>
        <p>
          We may also receive limited technical information about visits to our
          website, such as browser type, device type, pages viewed and general website
          usage information, depending on the technologies enabled on the website.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use-information',
    title: 'How We Use Personal Information',
    body: (
      <>
        <p>We may use personal information to:</p>
        <ul>
          <li>Respond to enquiries and requests for information.</li>
          <li>Prepare quotations and project proposals.</li>
          <li>Assess project requirements and installation conditions.</li>
          <li>Communicate with customers and prospective customers.</li>
          <li>Provide and administer our services.</li>
          <li>Improve our website, services and customer experience.</li>
          <li>Maintain website security and prevent misuse.</li>
          <li>Meet applicable legal, regulatory or contractual obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'lawful-processing',
    title: 'Lawful Processing',
    body: (
      <>
        <p>
          Where POPIA or another applicable privacy regime requires a lawful basis for
          processing, Aurexis may process information where the processing is based on
          consent, a contractual or pre-contractual relationship, a legal obligation,
          legitimate interests where permitted, or another lawful basis recognised by
          applicable law.
        </p>
        <p>
          Where processing relies on consent, you may withdraw that consent subject to
          legal or operational limitations.
        </p>
      </>
    ),
  },
  {
    id: 'disclosure',
    title: 'Disclosure and Third Parties',
    body: (
      <>
        <p>
          Aurexis does not intend to sell personal information. We may, however,
          disclose information where reasonably necessary to operate our business,
          provide services, communicate with customers, process enquiries, maintain
          technology systems or comply with legal obligations.
        </p>
        <p>
          Third-party service providers may process information on our behalf. Where
          appropriate, we seek to ensure that such processing is subject to suitable
          confidentiality, security and data-processing arrangements.
        </p>
        <p>
          Information may also be disclosed where required by law, lawful process,
          court order, regulatory authority or where necessary to protect the rights,
          property or security of Aurexis, its customers or other persons.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    body: (
      <>
        <p>
          Aurexis takes reasonable technical and organisational measures to protect
          personal information against unauthorised access, loss, misuse, alteration or
          disclosure.
        </p>
        <p>
          No transmission or storage system connected to the internet can be guaranteed
          to be completely secure. You should therefore avoid sending highly sensitive
          information through unsecured channels unless specifically requested and
          appropriately protected.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'Retention',
    body: (
      <p>
        Personal information is retained only for as long as reasonably necessary for
        the purpose for which it was collected, to maintain business records, resolve
        disputes, comply with legal obligations, enforce agreements or protect
        legitimate business interests.
      </p>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    body: (
      <>
        <p>
          Subject to applicable law, individuals may have rights relating to their
          personal information, including the right to request access to personal
          information, request correction of inaccurate information, object to certain
          processing, withdraw consent where applicable, or request deletion where
          legally available.
        </p>
        <p>
          Requests should provide sufficient information to identify the relevant
          individual and information concerned. Applicable limitations and verification
          requirements may apply.
        </p>
      </>
    ),
  },
  {
    id: 'international-processing',
    title: 'International Processing',
    body: (
      <p>
        Some technology or service providers used in connection with our website or
        communications may process information outside South Africa. Where applicable
        law requires safeguards for cross-border transfers, Aurexis will seek to comply
        with those requirements.
      </p>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    body: (
      <p>
        Our services and website are intended for general business and consumer
        audiences and are not directed specifically at children. We do not knowingly
        seek to collect personal information from children in circumstances where
        applicable law prohibits such collection.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    body: (
      <p>
        Aurexis may update this Privacy Policy from time to time to reflect changes in
        our business, technology, legal requirements or practices. The updated version
        will be published on this website with a revised effective or update date.
      </p>
    ),
  },
]

export default function PrivacyPolicyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Privacy Policy"
      description="How Aurexis Surface Transformations collects, uses, protects and handles personal information."
      updated={UPDATED}
      sections={sections}
      trail={[
        { name: 'Home', path: routes.home },
        { name: 'Privacy Policy', path: routes.privacy },
      ]}
    />
  )
}
