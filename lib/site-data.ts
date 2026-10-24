export const company = {
  name: 'AUREXIS',
  legalName: 'Aurexis Surface Transformations',
  tagline: 'Surface Transformations',
  ceo: 'Midas M',
  ceoRole: 'Chief Executive Officer',
  phone: '061 820 2622',
  phoneHref: 'tel:+27618202622',
  phoneE164: '+27618202622',
  whatsappHref: 'https://wa.me/27618202622',
  email: 'aurexiscorp@gmail.com',
  instagram: '@w3st_midas',
  instagramHref: 'https://instagram.com/w3st_midas',
  googleBusinessProfile: 'https://maps.app.goo.gl/qfJr7eL7aiAQp3RT7?g_st=ic',
  offices: [
    {
      city: 'Cape Town',
      country: 'South Africa',
      lines: ['30 Cole Street', 'Observatory', 'Cape Town'],
      mapHref:
        'https://www.google.com/maps/search/?api=1&query=30+Cole+Street+Observatory+Cape+Town',
    },
    {
      city: 'Victoria Falls',
      country: 'Zimbabwe',
      lines: ['Victoria Falls', 'Zimbabwe'],
      mapHref:
        'https://www.google.com/maps/search/?api=1&query=Victoria+Falls+Zimbabwe',
    },
  ],
  regions: ['Cape Town', 'Victoria Falls', 'Southern Africa'],
} as const

/**
 * Registered corporate identity. Aurexis Surface Transformations is the
 * trading name; MSS TRADING (PTY) LTD is the legal entity behind it.
 */
export const legalEntity = {
  name: 'MSS TRADING (PTY) LTD',
  tradingAs: 'Aurexis Surface Transformations',
  combined: 'MSS TRADING (PTY) LTD t/a Aurexis Surface Transformations',
  taxpayerReference: '9070764197',
  registeredAddress: {
    lines: ['842-25 Novha Street', 'Block WW', 'Soshanguve'],
    postalCode: '0052',
    country: 'South Africa',
  },
} as const

/** Physical trading location used for local search and LocalBusiness data. */
export const primaryLocation = {
  street: '30 Cole Street',
  suburb: 'Observatory',
  city: 'Cape Town',
  region: 'Western Cape',
  country: 'South Africa',
  countryCode: 'ZA',
} as const

export type StudioEnvironment = {
  title: string
  line: string
  detail: string
  image: string
  alt: string
}

type StudioPrinciple = { title: string; proof: string }
type StudioMaterial = { title: string; finish: string; use: string; image: string }
type StudioFaq = { question: string; answer: string }
type StudioGalleryItem = { image: string; alt: string; caption: string; format: 'wide' | 'portrait' | 'detail' }

export type Studio = {
  slug: string
  title: string
  shortTitle: string
  eyebrow: string
  headline: string
  line: string
  overview: string
  manifesto: string
  hero: string
  heroAlt: string
  environmentsLabel: string
  environments: StudioEnvironment[]
  industries: StudioEnvironment[]
  principles: StudioPrinciple[]
  gallery: StudioGalleryItem[]
  materials: StudioMaterial[]
  faqs: StudioFaq[]
}

export const studioJourney = [
  { title: 'Discover', line: 'We define the ambition, context and commercial priorities.' },
  { title: 'Design', line: 'The visual direction is resolved around the space and its use.' },
  { title: 'Material Selection', line: 'Samples are reviewed in place, under the light they will live in.' },
  { title: 'Preparation', line: 'Surfaces, access and schedules are prepared for controlled execution.' },
  { title: 'Installation', line: 'Specialist teams apply every system with measured precision.' },
  { title: 'Quality Assurance', line: 'Every junction, edge, plane and performance detail is inspected.' },
  { title: 'Reveal', line: 'The finished transformation is handed over with care guidance and support.' },
] as const

const materialImages = {
  stone: '/images/material-stone.png',
  timber: '/images/material-timber.png',
  metal: '/images/material-metal.png',
  matte: '/images/material-matte.png',
  glass: '/images/material-glass.png',
  carbon: '/images/material-carbon.png',
}

export const studios: Studio[] = [
  {
    slug: 'built-environments',
    title: 'Built Environments Studio',
    shortTitle: 'Built Environments',
    eyebrow: 'Studio 01',
    headline: 'Architecture, resurfaced',
    line: 'Interior and exterior architectural surfaces, transformed in place.',
    overview: 'AUREXIS transforms walls, cabinetry, joinery, entrances and exterior building elements through considered surface systems — retaining sound assets while changing how environments look, feel and perform.',
    manifesto: 'A room is understood through its surfaces: the warmth of a wall, the rhythm of joinery, the quiet continuity of a finish. We retain what works, then precisely alter what the eye and hand experience.',
    hero: '/images/portfolio-built-hero.avif',
    heroAlt: 'Curved timber-clad walls defining a contemporary commercial interior',
    environmentsLabel: 'What we transform',
    environments: [
      { title: 'Kitchen & Cabinetry', line: 'Existing joinery, materially renewed.', detail: 'Doors, drawer fronts, islands and fitted units can be resurfaced with controlled edges and consistent grain direction.', image: '/images/portfolio-cabinetry.avif', alt: 'Kitchen cabinetry with dark matte fronts and a tiled splashback' },
      { title: 'Walls & Feature Walls', line: 'Large planes become defining gestures.', detail: 'Timber, stone and solid-colour finishes can bring continuity and material depth to corridors and feature walls.', image: '/images/portfolio-wall-surfaces.avif', alt: 'Commercial corridor lined with continuous timber wall panels' },
      { title: 'Doors & Panels', line: 'High-contact details, precisely resolved.', detail: 'Surface systems can renew doors, lift surrounds and fitted panels without removing the underlying asset.', image: '/images/portfolio-doors.avif', alt: 'Dark lift doors framed by warm architectural timber panels' },
      { title: 'Furniture & Joinery', line: 'Retained pieces, materially realigned.', detail: 'Counters, fitted furniture and sound joinery can be resurfaced to support a renewed interior direction.', image: '/images/portfolio-joinery.avif', alt: 'Fitted kitchen island and tall units in a dark timber grain finish' },
      { title: 'Architectural Facades', line: 'A considered exterior expression.', detail: 'Suitable facade panels, entrances and exterior building elements can be renewed following substrate, exposure and system assessment.', image: '/images/aurexis-facade-elevation.avif', alt: 'Exterior building facade with brick and rusted metal cladding panels' },
      { title: 'Exterior Surfaces', line: 'The material story continues outside.', detail: 'Suitable exterior panels and building elements can be coordinated with the wider architectural palette and exposure requirements.', image: '/images/be-facade-cement-elevation.avif', alt: 'Large-format cement-finish cladding panels on an exterior elevation' },
    ],
    industries: [
      { title: 'Hospitality', line: 'Material renewal for guest-facing environments.', detail: 'Bars, counters and shared spaces can evolve through focused surface interventions.', image: '/images/portfolio-hospitality.avif', alt: 'Hospitality bar with timber, stone and metal finishes' },
      { title: 'Workplace', line: 'Material identity for focused teams.', detail: 'Reception, meeting and work areas can communicate confidence through coordinated surface finishes.', image: '/images/portfolio-workplace.avif', alt: 'Contemporary workplace with glazed partitions and warm timber surfaces' },
      { title: 'Retail Environments', line: 'Physical identity across customer-facing surfaces.', detail: 'Shopfronts, counters, walls and fitted elements can be coordinated as one commercial environment.', image: '/images/portfolio-reception.avif', alt: 'Customer-facing reception counter finished in timber batten and dark surfaces' },
      { title: 'Residential', line: 'A considered second life for interiors.', detail: 'Kitchen, wardrobe and fitted furniture surfaces can gain material depth without wholesale replacement.', image: '/images/be-wardrobe-joinery.avif', alt: 'Fitted bedroom wardrobe joinery in a soft blue painted finish' },
      { title: 'Commercial Interiors', line: 'Existing assets, visually realigned.', detail: 'Walls, doors, counters and joinery can be coordinated around a renewed interior direction.', image: '/images/be-commercial-lobby.avif', alt: 'Commercial building lobby with timber-clad wall and integrated mailboxes' },
    ],
    principles: [
      { title: 'Retain what works', proof: 'Sound substrates stay in place, reducing demolition, waste and cost.' },
      { title: 'Material realism', proof: 'Grain, scale and junctions are specified to read as an architectural whole.' },
      { title: 'Operational continuity', proof: 'Phased installation limits closures and protects occupied environments.' },
      { title: 'Controlled preparation', proof: 'Every substrate is assessed, repaired and primed before application.' },
      { title: 'Edge discipline', proof: 'Returns, reveals and interfaces are resolved before the first panel is laid.' },
      { title: 'Commercial durability', proof: 'Systems are selected against traffic, cleaning cycles and expected use.' },
      { title: 'Renewable by design', proof: 'Finishes can be changed again as the environment evolves.' },
      { title: 'Documented handover', proof: 'Cleaning and maintenance guidance is defined for the selected finish.' },
    ],
    gallery: [
      { image: '/images/aurexis-facade-elevation.avif', alt: 'Exterior facade with brick and rusted metal cladding panels', caption: 'Facade panels / Exterior reference', format: 'wide' },
      { image: '/images/portfolio-cabinetry.avif', alt: 'Dark matte cabinetry paired with a patterned splashback', caption: 'Cabinetry / Interior reference', format: 'portrait' },
      { image: '/images/be-install-joinery.avif', alt: 'Installer applying architectural film to a timber table edge', caption: 'Application detail / Joinery', format: 'detail' },
      { image: '/images/portfolio-wall-surfaces.avif', alt: 'Continuous timber wall treatment in a commercial corridor', caption: 'Wall surfaces / Interior reference', format: 'wide' },
    ],
    materials: [
      { title: 'Deep Blue Matte', finish: 'Uniform low-sheen colour field', use: 'Walls, circulation and wayfinding', image: '/images/aurexis-palette-blue-matte.avif' },
      { title: 'Two-Tone Colour', finish: 'Coordinated matte architectural fields', use: 'Stairwells, workplaces and shared areas', image: '/images/aurexis-palette-two-tone.avif' },
      { title: 'Finish Sample Library', finish: 'Colour and grain swatch comparison', use: 'Sampling, specification and client review', image: '/images/pal-swatch-fan.avif' },
      { title: 'Colour & Wood Palette', finish: 'Solid colour and grain references', use: 'Cabinetry, walls and fitted elements', image: '/images/aurexis-palette-colour-grain.avif' },
      { title: 'Stone & Mineral Palette', finish: 'Veining, movement and tonal depth', use: 'Walls, counters and feature panels', image: '/images/aurexis-palette-mineral.avif' },
      { title: 'Concrete & Stone Films', finish: 'Mineral texture in roll form', use: 'Feature walls and large planes', image: '/images/pal-film-samples.avif' },
    ],
    faqs: [
      { question: 'How long does installation take?', answer: 'Programme depends on substrate condition, area, preparation and access. The working sequence is defined after survey.' },
      { question: 'What surfaces can be resurfaced?', answer: 'Stable, properly prepared substrates including laminate, metal, glass, sealed timber and many painted surfaces can be transformed after a site assessment.' },
      { question: 'How durable are the finishes?', answer: 'Durability varies by system, substrate, traffic and cleaning regime. The intended use is reviewed before a material direction is recommended.' },
      { question: 'How should surfaces be cleaned?', answer: 'Use a soft cloth with a mild, non-abrasive cleaner. We provide finish-specific care guidance at handover.' },
      { question: 'What is confirmed before work begins?', answer: 'The agreed scope, substrate preparation, selected finish, care requirements and commercial terms are recorded before installation.' },
      { question: 'Will the site need to close?', answer: 'Usually not. We coordinate low-noise, low-dust phases and can work zone by zone or outside peak operating hours.' },
      { question: 'Can the finish be removed later?', answer: 'Most film systems can be professionally removed, allowing the substrate to be renewed again without demolition.' },
      { question: 'What is the expected lifespan?', answer: 'Interior architectural finishes commonly deliver a long service life when matched to the environment and maintained as specified.' },
    ],
  },
  {
    slug: 'glass-systems',
    title: 'Glass Systems Studio',
    shortTitle: 'Glass Systems',
    eyebrow: 'Studio 02',
    headline: 'Light, engineered',
    line: 'Light, privacy and protection — engineered into glass.',
    overview: 'AUREXIS transforms and enhances architectural glazing through privacy, decorative, branding and performance treatments that preserve the defining quality of glass: light.',
    manifesto: 'Glass defines how a building meets daylight, climate and privacy. Our work changes its performance while preserving its defining quality: the sense that space can remain open, calm and full of light.',
    hero: '/images/portfolio-glass-hero.avif',
    heroAlt: 'Decorative frosted tree motif applied across a glazed entrance',
    environmentsLabel: 'What we transform',
    environments: [
      { title: 'Privacy Film', line: 'Separation without losing daylight.', detail: 'Frosted films can calibrate visibility across windows, doors and internal glass partitions.', image: '/images/portfolio-glass-privacy.avif', alt: 'Workplace windows treated with full-height frosted privacy film' },
      { title: 'Glazed Partitions', line: 'Privacy aligned across architectural sightlines.', detail: 'Manifestation bands can be set out consistently across framed office partition systems.', image: '/images/portfolio-glass-frosted.avif', alt: 'Office glass partitions with aligned frosted privacy bands' },
      { title: 'Decorative Glass', line: 'Pattern integrated into architecture.', detail: 'Cut and printed films can bring controlled screening and visual identity to glazed entrances.', image: '/images/portfolio-glass-hero.avif', alt: 'Glazed double doors with a decorative frosted tree design' },
      { title: 'Glass Branding', line: 'Commercial identity carried through glazing.', detail: 'Large-format graphics can turn windows and partitions into branded environmental surfaces.', image: '/images/portfolio-glass-branding.avif', alt: 'Automotive showroom glazing with large-format vehicle graphics' },
      { title: 'Manifestation & Wayfinding', line: 'Glazing that identifies and directs.', detail: 'Gradient bands, room names and safety manifestation can be combined on a single glazed plane.', image: '/images/gs-manifestation-gradient.avif', alt: 'Glass partition with a gradient frosted band and meeting room manifestation' },
      { title: 'Solar Control', line: 'Daylight retained, heat and glare reduced.', detail: 'Solar-control films can be fitted to existing windows where heat gain, glare or UV exposure need managing.', image: '/images/gs-solar-arched.avif', alt: 'Arched heritage windows fitted with solar-control window film' },
    ],
    industries: [
      { title: 'Workplace', line: 'Privacy across glazed meeting and work areas.', detail: 'Frosted treatments can screen occupied zones while retaining shared light.', image: '/images/gs-partitions-gradient.avif', alt: 'Office glass partitions treated with graduated frosted film' },
      { title: 'Commercial Property', line: 'Existing glazing adapted to new spatial needs.', detail: 'Privacy and decorative films can update occupied interiors without replacing glass.', image: '/images/gs-reeded-partitions.avif', alt: 'Reeded glass partitions dividing a commercial workspace' },
      { title: 'Retail', line: 'Glass that communicates.', detail: 'Branded and decorative layers can support storefront and showroom identity.', image: '/images/portfolio-glass-branding.avif', alt: 'Branded automotive showroom glazing' },
      { title: 'Corporate', line: 'Identity with appropriate restraint.', detail: 'Custom manifestations can combine privacy, pattern and workplace character.', image: '/images/gs-branding-lettering.avif', alt: 'Frosted lettering applied to a corporate glass entrance door' },
      { title: 'Hospitality', line: 'Decorative screening with light preserved.', detail: 'Patterned film can define entrances and partitions without closing the space.', image: '/images/gs-decorative-door.avif', alt: 'Glazed door with a decorative frosted pattern in a lit interior' },
    ],
    principles: [
      { title: 'Measured first', proof: 'Orientation, glass type, exposure and performance goals are assessed on site.' },
      { title: 'System compatibility', proof: 'Film and glazing compatibility is considered against thermal stress and intended use.' },
      { title: 'Performance clarity', proof: 'Specifications state the expected solar, UV, privacy or safety outcome.' },
      { title: 'Light preserved', proof: 'Solutions are selected to retain useful daylight and visual openness.' },
      { title: 'Clean installation', proof: 'Controlled preparation limits dust, contamination and visible edge variation.' },
      { title: 'Precise sightlines', proof: 'Patterns and gradients align across panels, mullions and room geometry.' },
      { title: 'Operational phasing', proof: 'Occupied spaces are completed pane by pane with contained disruption.' },
      { title: 'Documented aftercare', proof: 'Cleaning, curing and inspection requirements are defined for the selected system.' },
    ],
    gallery: [
      { image: '/images/portfolio-glass-frosted.avif', alt: 'Aligned frosted bands across workplace glass partitions', caption: 'Privacy film / Workplace', format: 'wide' },
      { image: '/images/portfolio-glass-hero.avif', alt: 'Decorative frosted tree motif across a glazed entrance', caption: 'Decorative glass / Entrance', format: 'portrait' },
      { image: '/images/portfolio-glass-graphics.avif', alt: 'Frosted topographic environmental graphic on glass', caption: 'Manifestation / Corporate', format: 'detail' },
      { image: '/images/portfolio-glass-branding.avif', alt: 'Large-format graphics applied to showroom glazing', caption: 'Glass branding / Retail', format: 'wide' },
    ],
    materials: [
      { title: 'Neutral Solar', finish: 'Low-reflection, optically clear', use: 'Facades and large glazed elevations', image: '/images/gs-solar-arched.avif' },
      { title: 'Frosted Privacy', finish: 'Even, light-transmitting opacity', use: 'Windows, doors and partitions', image: '/images/portfolio-glass-privacy.avif' },
      { title: 'Gradient Frost', finish: 'Soft transition from private to clear', use: 'Meeting rooms and clinics', image: '/images/gs-partitions-gradient.avif' },
      { title: 'Reeded Optic', finish: 'Linear visual diffusion', use: 'Partitions and decorative screens', image: materialImages.glass },
      { title: 'Cut Manifestation', finish: 'Precision-cut graphic layer', use: 'Branding, wayfinding and safety marking', image: '/images/gs-manifestation-gradient.avif' },
      { title: 'Decorative Pattern', finish: 'Printed and cut ornamental film', use: 'Entrances and feature glazing', image: '/images/portfolio-glass-graphics.avif' },
    ],
    faqs: [
      { question: 'How long does glass film installation take?', answer: 'Programme depends on panel count, access, preparation and operating requirements. A sequence is proposed after survey.' },
      { question: 'Will solar film make the room dark?', answer: 'Not necessarily. Modern neutral films can reject meaningful heat and UV while retaining high levels of visible light.' },
      { question: 'How is filmed glass cleaned?', answer: 'After curing, use a soft cloth or non-abrasive squeegee with mild soapy water. Avoid blades and abrasive chemicals.' },
      { question: 'Does film strengthen glass?', answer: 'Safety film helps hold fragments together after breakage. It does not make glass unbreakable, and the complete anchoring specification determines performance.' },
      { question: 'How is the final system confirmed?', answer: 'Glass type, exposure, film compatibility, intended result and supplier terms are recorded in the final specification.' },
      { question: 'Will installation interrupt the building?', answer: 'Work is low-noise and contained. We coordinate pane-by-pane access so nearby rooms can usually remain operational.' },
      { question: 'Can the film be removed?', answer: 'Yes. Architectural film can be professionally removed and replaced without changing the glass itself.' },
      { question: 'How long does architectural film last?', answer: 'Quality interior and exterior systems are designed for multi-year service. Orientation, climate and maintenance influence the exact lifespan.' },
    ],
  },
  {
    slug: 'mobility',
    title: 'Mobility Studio',
    shortTitle: 'Mobility',
    eyebrow: 'Studio 03',
    headline: 'Motion, protected',
    line: 'Precision surface craft for vehicles of every scale.',
    overview: 'AUREXIS transforms, protects and brands vehicles through colour change, paint protection and commercial fleet graphics, applied with controlled preparation and precise finishing.',
    manifesto: 'Moving objects meet weather, friction and attention at speed. We treat every panel, pane and junction as part of one continuous form, protecting the machine while sharpening how it is seen.',
    hero: '/images/portfolio-mobility-hero.jpeg',
    heroAlt: 'Modified performance car finished in a muted green wrap',
    environmentsLabel: 'What we transform',
    environments: [
      { title: 'Colour Change', line: 'A new character across the complete form.', detail: 'Colour-change film can transform body panels while retaining the underlying painted finish.', image: '/images/mob-colour-before-after.jpeg', alt: 'Saloon car shown before in white and after a blue colour-change wrap' },
      { title: 'Paint Protection', line: 'A clear protective layer over vulnerable paintwork.', detail: 'Paint protection film can be applied to high-impact panels or mapped across the full vehicle.', image: '/images/mob-ppf-bonnet.jpeg', alt: 'Clear paint protection film being laid over a white vehicle bonnet' },
      { title: 'Automotive Detailing', line: 'Every panel considered as part of one form.', detail: 'Wrap, trim and finish choices can be coordinated around the lines and details of the vehicle.', image: '/images/portfolio-mobility-detail.jpeg', alt: 'Blue performance vehicle with a satin-finished bonnet' },
      { title: 'Commercial Vehicles', line: 'Moving assets made commercially recognisable.', detail: 'Fleet graphics can translate identity into repeatable layouts for vans and trucks.', image: '/images/mob-fleet-logistics-truck.jpeg', alt: 'Branded logistics truck and trailer in company livery' },
      { title: 'Fleet Branding', line: 'One identity, repeated across every asset.', detail: 'Matching graphic layouts can be rolled out consistently across a fleet of vehicles.', image: '/images/mob-fleet-emixion.jpeg', alt: 'Two branded company cars in matching fleet livery parked on site' },
      { title: 'Vehicle Wraps', line: 'Full-body transformation, panel by panel.', detail: 'Wrap installation is carried out with panels prepared, film laid and edges finished in a controlled bay.', image: '/images/mob-wrap-in-progress.jpeg', alt: 'Vehicle part-wrapped in orange film during installation in a workshop' },
    ],
    industries: [
      { title: 'Performance Vehicles', line: 'Surface transformation shaped around the vehicle.', detail: 'Colour and protective films can follow complex bodywork and high-impact areas.', image: '/images/portfolio-mobility-hero.jpeg', alt: 'Modified performance car in a muted green finish' },
      { title: 'Colour Change', line: 'A reversible visual direction.', detail: 'Film can alter colour and finish while leaving sound factory paint beneath.', image: '/images/portfolio-colour-wrap.jpeg', alt: 'Sports coupe in a pale purple wrap' },
      { title: 'Paint Protection', line: 'Protection focused on vulnerable panels.', detail: 'Clear film can shield high-contact and road-facing surfaces while preserving the visible finish.', image: '/images/portfolio-paint-protection.jpeg', alt: 'Clear protection film installed over blue vehicle paintwork' },
      { title: 'Commercial Fleets', line: 'A consistent identity across moving assets.', detail: 'Repeatable graphics can be adapted across commercial vans and larger vehicles.', image: '/images/portfolio-fleet-identity.jpeg', alt: 'Branded service vans shown in a matching fleet graphic layout' },
      { title: 'Vehicle Graphics', line: 'Detail, pattern and identity in motion.', detail: 'Graphic systems can be applied at full-body or feature-panel scale.', image: '/images/aurexis-mobility-colour.avif', alt: 'Haulage truck wrapped in a large-format graphic livery' },
    ],
    principles: [
      { title: 'Controlled environment', proof: 'Lighting, cleanliness and temperature support consistent application.' },
      { title: 'Panel mapping', proof: 'Coverage, seams and edges are planned around each vehicle before installation.' },
      { title: 'Paint assessment', proof: 'Finish condition is documented before any film is applied.' },
      { title: 'Reversible change', proof: 'Quality wraps alter character while protecting the finish beneath.' },
      { title: 'Edge precision', proof: 'Returns and terminations are concealed wherever safe and technically sound.' },
      { title: 'Optical clarity', proof: 'Protection and tint are selected to preserve colour, gloss and visibility.' },
      { title: 'Asset-specific process', proof: 'Passenger, performance and commercial vehicles receive preparation matched to their panels, paint and intended use.' },
      { title: 'Aftercare support', proof: 'Cure, cleaning and inspection guidance protects the finished result.' },
    ],
    gallery: [
      { image: '/images/mob-colour-defender.jpeg', alt: 'Four-wheel drive finished in a pale lilac colour-change wrap', caption: 'Colour transformation / Automotive reference', format: 'wide' },
      { image: '/images/portfolio-colour-wrap.jpeg', alt: 'Pale purple colour-change finish on a sports coupe', caption: 'Colour change / Automotive reference', format: 'portrait' },
      { image: '/images/mob-ppf-porsche.jpeg', alt: 'Paint protection film applied across a silver sports car front end', caption: 'Paint protection / Application detail', format: 'detail' },
      { image: '/images/mob-fleet-emixion.jpeg', alt: 'Branded company cars in a consistent fleet livery', caption: 'Fleet identity / Commercial reference', format: 'wide' },
    ],
    materials: [
      { title: 'Gloss PPF', finish: 'Optically clear, self-healing gloss', use: 'Full body and high-impact zones', image: '/images/portfolio-paint-protection.jpeg' },
      { title: 'Satin Colour Change', finish: 'Factory-like low sheen', use: 'Full-body finish conversion', image: '/images/portfolio-mobility-hero.jpeg' },
      { title: 'Forged Carbon', finish: 'Technical dimensional pattern', use: 'Roofs, trim and feature panels', image: materialImages.carbon },
      { title: 'Brushed Metal', finish: 'Directional satin grain', use: 'Vehicle accents and feature panels', image: materialImages.metal },
      { title: 'Gloss Colour Film', finish: 'Deep, reflective colour field', use: 'Colour-change wraps and accents', image: '/images/mob-colour-orange.jpeg' },
      { title: 'Fleet Colour', finish: 'Consistent commercial colour field', use: 'Fleet graphics and vehicle identity', image: '/images/portfolio-fleet-identity.jpeg' },
    ],
    faqs: [
      { question: 'How long does a vehicle installation take?', answer: 'Paint protection commonly takes two to four days depending on coverage and complexity. Full colour changes may require additional time for preparation and detailed finishing.' },
      { question: 'How should wrapped vehicles be washed?', answer: 'Hand washing with pH-neutral products is preferred. Avoid abrasive compounds, aggressive pressure at edges and automatic brush washes.' },
      { question: 'How is paint protection film specified?', answer: 'Film selection depends on paint condition, coverage areas, intended use and maintenance. These factors are reviewed before installation.' },
      { question: 'Will film damage factory paint?', answer: 'Quality film applied to sound factory paint is designed for safe professional removal. Refinished or compromised panels require individual assessment.' },
      { question: 'How durable is paint protection film?', answer: 'Premium systems resist road debris, staining and environmental exposure, with self-healing topcoats helping manage fine surface marks.' },
      { question: 'Can I use the vehicle immediately?', answer: 'We recommend a short cure period and provide specific guidance for washing, weather exposure and edge inspection after collection.' },
      { question: 'Can colour-change wrap be removed?', answer: 'Yes. Professional removal returns the vehicle to the protected finish beneath, subject to the original paint condition.' },
      { question: 'How long do wraps and tint last?', answer: 'Service life varies with material, exposure, storage and care. Premium systems are selected around the asset and intended ownership period.' },
    ],
  },
]

export function getStudio(slug: string) {
  return studios.find((studio) => studio.slug === slug)
}
