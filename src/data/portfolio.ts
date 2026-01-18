export type PortfolioProject = {
  slug: string;                 // URL: /portfolio/<slug>
  title: string;                // Display name
  summary: string;              // Portfolio card summary
  tags: string[];
  location?: string;
  year?: string;

  // Images live in public/images/portfolio/<slug>/
  coverImage: string;           // e.g. images/portfolio/<slug>/cover.jpg
  galleryImages: string[];      // e.g. images/portfolio/<slug>/01.jpg, ...

  // Case study content
  goal: string;
  scope: string;
  outcome: string;
  whatChanged: string[];        // bullet list
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'dalkarlsa',
    title: 'Dalkarlsa',
    summary: 'Cohesive styling direction with warm Scandinavian texture and calmer visual hierarchy.',
    tags: ['Styling', 'Cohesion', 'Warm neutrals'],
    location: 'Sweden',
    year: '2026',
    coverImage: 'images/portfolio/dalkarlsa/cover.jpg',
    galleryImages: [
      'images/portfolio/dalkarlsa/01.jpg',
      'images/portfolio/dalkarlsa/02.jpg',
      'images/portfolio/dalkarlsa/03.jpg',
      'images/portfolio/dalkarlsa/04.jpg',
      'images/portfolio/dalkarlsa/05.jpg',
    ],
    goal: 'Create a calm, cohesive feel with warmer texture and a clearer styling hierarchy.',
    scope: 'Styling direction, palette refinement, and targeted updates to lighting and textiles.',
    outcome: 'A warmer, more finished look with intentional surfaces and improved balance across the space.',
    whatChanged: [
      'Refined the palette to reduce competing tones and make materials feel intentional.',
      'Improved lighting layers to create warmth in evenings (ambient + task + accent).',
      'Simplified surfaces and grouped objects for clearer visual hierarchy.',
      'Added texture through textiles and curated finishing pieces to make the room feel complete.',
    ],
  },

  {
    slug: 'living-room-refresh',
    title: 'Living room refresh',
    summary: 'Warm neutrals, improved flow, and layered lighting for calm everyday living.',
    tags: ['Layout', 'Lighting', 'Styling'],
    coverImage: 'images/portfolio/living-room-refresh/cover.jpg',
    galleryImages: [
      'images/portfolio/living-room-refresh/01.jpg',
      'images/portfolio/living-room-refresh/02.jpg',
      'images/portfolio/living-room-refresh/03.jpg',
      'images/portfolio/living-room-refresh/04.jpg',
      'images/portfolio/living-room-refresh/05.jpg',
    ],
    goal: 'Create a calmer layout and cohesive palette while keeping key existing pieces.',
    scope: 'Layout guidance, lighting strategy, palette refinement, and finishing styling.',
    outcome: 'Improved flow, warmer atmosphere, and a finished look via texture and deliberate placement.',
    whatChanged: [
      'Clarified zones for seating and circulation to improve flow.',
      'Layered lighting to reduce harshness and improve evening ambience.',
      'Aligned neutrals/materials so the room feels cohesive rather than busy.',
      'Balanced art and accessories to simplify surfaces without feeling empty.',
    ],
  },

  {
    slug: 'kitchen-refresh',
    title: 'Kitchen refresh',
    summary: 'High-impact updates: lighting, hardware, and a cohesive palette—without a full renovation.',
    tags: ['Palette', 'Fixtures', 'Function'],
    coverImage: 'images/portfolio/kitchen-refresh/cover.jpg',
    galleryImages: [
      'images/portfolio/kitchen-refresh/01.jpg',
      'images/portfolio/kitchen-refresh/02.jpg',
      'images/portfolio/kitchen-refresh/03.jpg',
      'images/portfolio/kitchen-refresh/04.jpg',
      'images/portfolio/kitchen-refresh/05.jpg',
    ],
    goal: 'Improve function and overall feel with upgrades that make a visible difference.',
    scope: 'Lighting, small fixture/finish recommendations, and surface styling.',
    outcome: 'A more intentional, warmer kitchen with improved task lighting and cohesive finishes.',
    whatChanged: [
      'Upgraded task lighting strategy for safer and more pleasant daily use.',
      'Unified hardware/finishes to create a more intentional look.',
      'Reduced competing tones so materials read as cohesive.',
      'Kept surfaces functional while adding a few high-quality “anchor” objects.',
    ],
  },
];

// Utility: quick lookup
export const getProjectBySlug = (slug: string) =>
  portfolioProjects.find((p) => p.slug === slug);
