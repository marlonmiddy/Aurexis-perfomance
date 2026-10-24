export type Project = {
  slug: string
  title: string
  industry: string
  location: string
  services: string
  outcome: string
  cover: string
  coverAlt: string
  gallery: { src: string; alt: string }[]
}

// Verified project records can be added here when client approval and factual
// project details are available. Concept imagery is intentionally not presented
// as completed AUREXIS work.
export const projects: Project[] = []

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
