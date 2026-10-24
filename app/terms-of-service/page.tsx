import type { Metadata } from 'next'
import { DetailGrid, LegalShell, type LegalSection } from '@/components/legal-shell'
import { routes } from '@/lib/seo'
import { legalEntity } from '@/lib/site-data'

const UPDATED = '19 September 2026'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms governing use of the Aurexis Surface Transformations website and the surface transformation services provided by MSS TRADING (PTY) LTD.',
  alternates: { canonical: routes.terms },
  openGraph: {
    title: 'Terms of Service — AUREXIS',
    description:
      'Terms governing the use of the Aurexis website and our surface transformation services.',
    url: routes.terms,
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
          These Terms of Service govern your use of the Aurexis Surface Transformations
          website and the provision of services by Aurexis Surface Transformations, a
          trading name and operating business of MSS TRADING (PTY) LTD.
        </p>
        <p>
          By using this website or engaging Aurexis for services, you agree to comply
          with these terms together with any applicable quotation, project scope,
          written agreement or other commercial terms issued for a specific project.
        </p>
      </>
    ),
  },
  {
    id: 'company-details',
    title: 'Company Details',
    body: (
      <DetailGrid
        items={[
          { label: 'Trading Name', value: legalEntity.tradingAs },
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
    id: 'website-use',
    title: 'Website Use',
    body: (
      <>
        <p>
          You may use this website for lawful purposes only. You must not knowingly use
          the website in a way that could damage, disable, overburden or impair the
          website or interfere with another person&apos;s use of it.
        </p>
        <p>
          You must not attempt to gain unauthorised access to website systems, accounts,
          servers, databases or security mechanisms.
        </p>
      </>
    ),
  },
  {
    id: 'services',
    title: 'Surface Transformation Services',
    body: (
      <>
        <p>
          Aurexis may provide surface transformation services including, depending on
          project requirements and availability, architectural films, cabinetry
          transformation, glass films, automotive wrapping and related surface finishing
          services.
        </p>
        <p>
          Services, materials, finishes, installation methods, availability and project
          suitability may vary from project to project.
        </p>
      </>
    ),
  },
  {
    id: 'surface-preparation',
    title: 'Surface Preparation and Substrate Conditions',
    body: (
      <>
        <p>
          Successful installation depends significantly on the condition and suitability
          of the underlying surface.
        </p>
        <p>
          Before installation, surfaces may need to be cleaned, degreased, repaired,
          dried, levelled or otherwise prepared. Existing paint, coatings, laminates,
          sealants, contamination, moisture, structural defects or surface deterioration
          may affect adhesion and final results.
        </p>
        <p>
          Aurexis may decline to install a material on a substrate that it reasonably
          considers unsuitable or unsafe. Where installation proceeds despite an
          identified condition, the applicable risks may be recorded in the project
          quotation or agreement.
        </p>
      </>
    ),
  },
  {
    id: 'quotations',
    title: 'Quotations and Pricing',
    body: (
      <>
        <p>
          Website information, indicative prices and initial discussions do not
          constitute a binding quotation unless expressly identified as such.
        </p>
        <p>
          A quotation may depend on measurements, material selection, surface condition,
          preparation requirements, access, installation complexity, location and other
          project-specific factors.
        </p>
        <p>
          Changes requested after acceptance of a quotation, additional preparation,
          unforeseen substrate conditions, additional materials or additional work may
          result in additional charges where agreed between the parties.
        </p>
      </>
    ),
  },
  {
    id: 'customer-responsibilities',
    title: 'Customer Responsibilities',
    body: (
      <>
        <p>
          Customers are responsible for providing accurate information relevant to the
          project, ensuring that the property or vehicle is available for the agreed
          work, and disclosing known conditions that could materially affect
          installation.
        </p>
        <p>
          Where a customer supplies materials, measurements, drawings, instructions or
          other specifications, the customer remains responsible for their accuracy
          unless Aurexis expressly assumes responsibility in writing.
        </p>
      </>
    ),
  },
  {
    id: 'materials-and-results',
    title: 'Materials and Finished Results',
    body: (
      <>
        <p>
          Surface transformation is dependent on the substrate, existing finishes,
          environmental conditions, material characteristics and installation
          conditions.
        </p>
        <p>
          Visual differences may occur between samples, digital images, displays and
          installed materials. Material manufacturers may also specify limitations
          concerning temperature, moisture, exposure, cleaning, maintenance and
          substrate suitability.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    title: 'Liability',
    body: (
      <>
        <p>
          To the extent permitted by applicable law, Aurexis will not be responsible for
          losses arising from conditions outside its reasonable control, including
          undisclosed substrate defects, inaccurate information supplied by a customer,
          pre-existing damage, unsuitable surfaces or improper subsequent care.
        </p>
        <p>
          Nothing in these terms excludes or limits liability where doing so would be
          prohibited by applicable law.
        </p>
        <p>
          Where a specific project agreement provides different warranty, remedy or
          liability terms, those terms will apply to the extent that they conflict with
          these general website terms.
        </p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    body: (
      <>
        <p>
          Unless otherwise stated, content appearing on this website, including
          branding, text, graphics, photographs, layouts and other materials, is owned
          by or licensed to Aurexis or its relevant rights holders.
        </p>
        <p>
          Website content may not be reproduced, commercially exploited, modified or
          redistributed without appropriate permission, except where permitted by law.
        </p>
      </>
    ),
  },
  {
    id: 'third-party-services',
    title: 'Third-Party Services',
    body: (
      <>
        <p>
          The website may depend on or interact with third-party services, hosting
          providers, analytics services, communication platforms or other external
          systems.
        </p>
        <p>
          Aurexis is not responsible for the independent operation, content, security or
          availability of third-party services outside its reasonable control.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    body: (
      <p>
        Aurexis may update these Terms of Service from time to time. The current version
        published on this website will apply to future website use, subject to any
        separate written terms governing an existing project.
      </p>
    ),
  },
]

export default function TermsOfServicePage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Terms of Service"
      description="Terms governing the use of the Aurexis website and our surface transformation services."
      updated={UPDATED}
      sections={sections}
      trail={[
        { name: 'Home', path: routes.home },
        { name: 'Terms of Service', path: routes.terms },
      ]}
    />
  )
}
