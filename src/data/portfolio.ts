export type PortfolioProject = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];

  coverImage: string; // path under /public
  goal: string;
  scope: string;
  outcome: string;
  whatChanged: string[];
  galleryImages: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'dalkarlsa',
    title: 'Dalkarlså — Interior & exterior styling',
    summary:
      'A cohesive refresh across key rooms and outdoor areas—prioritising calm flow, warm neutrals, and practical upgrades that improve daily use.',
    tags: ['Styling', 'Layout', 'Lighting', 'Palette', 'Cohesion'],

    // IMPORTANT: path is relative to /public, so start with "images/..."
    coverImage: 'images/portfolio/dalkarlsa/Vardagsrum-med-salongsdel-och-kamin-6.jpg',

    goal:
      'Create a calm, cohesive home with better flow and a consistent material and colour direction—without losing warmth or practicality.',
    scope:
      'Styling direction, layout recommendations, lighting and palette guidance, and curated suggestions for key touchpoints (surfaces, textiles, accessories).',
    outcome:
      'A more finished, harmonious look across spaces, with clearer zones, improved lighting layers, and fewer competing materials.',

    whatChanged: [
      'Aligned the palette across rooms (warm neutrals, natural textures, restrained contrast).',
      'Improved flow by clarifying zones and reducing visual noise on key surfaces.',
      'Introduced lighting layers (ambient + task + accent) to support evening warmth.',
      'Simplified styling decisions with a repeatable “materials + shapes” rule of thumb.',
      'Prioritised upgrades that deliver high impact without major renovation work.',
    ],

    galleryImages: [
      'images/portfolio/dalkarlsa/Vardagsrum-med-salongsdel-och-kamin-6.jpg',
      'images/portfolio/dalkarlsa/Vardagsrum-med-salongsdel-och-kamin-11.jpg',
      'images/portfolio/dalkarlsa/K-k-med-matplats.jpg',
      'images/portfolio/dalkarlsa/K-k-med-matplats-2.jpg',
      'images/portfolio/dalkarlsa/K-k-med-matplats-4.jpg',
      'images/portfolio/dalkarlsa/Inre-hall-passage-med-l-sh-rna.jpg',
      'images/portfolio/dalkarlsa/Inre-hall-passage-med-l-sh-rna-10.jpg',
      'images/portfolio/dalkarlsa/Badrum-k-llarplan.jpg',
      'images/portfolio/dalkarlsa/Duschrum.jpg',
      'images/portfolio/dalkarlsa/Entr.jpg',
      'images/portfolio/dalkarlsa/Utomhusmilj-er-7.jpg',
      'images/portfolio/dalkarlsa/Grillplats.jpg',
      'images/portfolio/dalkarlsa/Framsida.jpg',
      'images/portfolio/dalkarlsa/Baksida.jpg',
      'images/portfolio/dalkarlsa/Baksida-9.jpg',
    ],
  },
];

export const getProjectBySlug = (slug: string) => portfolioProjects.find((p) => p.slug === slug);
