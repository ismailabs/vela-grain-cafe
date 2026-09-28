export type MenuItem = {
  name: string
  description: string
  price: string
  tag?: string
}

export type MenuSection = {
  id: string
  label: string
  items: MenuItem[]
}

export type GalleryItem = {
  src: string
  alt: string
  category: 'coffee' | 'food' | 'interior' | 'details'
  tall?: boolean
}

export const site = {
  name: 'Vela & Grain',
  eyebrow: 'Coffee · Kitchen · Slow mornings',
  tagline: 'Made for mornings worth keeping.',
  description:
    'A fictional neighbourhood café concept built around thoughtful coffee, seasonal plates, and calm, tactile spaces.',
  address: '18 Arbor Lane, Meridian Quarter, Kuala Lumpur — fictional address',
  phone: '+60 3-0000 1842',
  email: 'hello@velagrain.example',
  hours: [
    ['Mon–Fri', '7:30 AM – 6:00 PM'],
    ['Saturday', '8:00 AM – 7:00 PM'],
    ['Sunday', '8:00 AM – 5:00 PM'],
  ],
}

export const menuSections: MenuSection[] = [
  {
    id: 'coffee',
    label: 'Coffee',
    items: [
      {
        name: 'House Espresso',
        description: 'Cocoa, toasted almond, dried cherry.',
        price: 'RM 11',
      },
      {
        name: 'Flat White',
        description: 'Double ristretto with silky textured milk.',
        price: 'RM 14',
        tag: 'Favourite',
      },
      {
        name: 'Long Black',
        description: 'Clean, balanced and quietly chocolatey.',
        price: 'RM 12',
      },
      {
        name: 'Pour Over',
        description: 'Rotating single origin, brewed to order.',
        price: 'RM 18',
      },
      {
        name: 'Cold Brew',
        description: '18-hour steep, orange peel, brown sugar.',
        price: 'RM 16',
      },
    ],
  },
  {
    id: 'specialty',
    label: 'Specialty drinks',
    items: [
      {
        name: 'Salted Maple Latte',
        description: 'Espresso, maple, smoked sea salt, milk.',
        price: 'RM 18',
        tag: 'Signature',
      },
      {
        name: 'Cloud Matcha',
        description: 'Ceremonial matcha, vanilla cream, oat milk.',
        price: 'RM 19',
      },
      {
        name: 'Black Sesame Cocoa',
        description: 'Dark cocoa, roasted sesame, steamed milk.',
        price: 'RM 18',
      },
      {
        name: 'Citrus Tonic',
        description: 'Espresso, tonic, calamansi and rosemary.',
        price: 'RM 17',
      },
    ],
  },
  {
    id: 'breakfast',
    label: 'Breakfast & brunch',
    items: [
      {
        name: 'Soft Egg Sourdough',
        description: 'Jammy eggs, whipped feta, herbs, chilli crisp.',
        price: 'RM 26',
        tag: 'All day',
      },
      {
        name: 'Brown Butter Pancakes',
        description: 'Burnt honey, cultured butter, seasonal fruit.',
        price: 'RM 28',
      },
      {
        name: 'Mushroom Toast',
        description: 'Roasted mushrooms, miso butter, herbs, rye.',
        price: 'RM 29',
      },
      {
        name: 'Garden Bowl',
        description: 'Grains, charred greens, avocado, tahini, egg.',
        price: 'RM 30',
      },
      {
        name: 'Crisp Chicken Brioche',
        description: 'Buttermilk chicken, cabbage, pickles, hot honey.',
        price: 'RM 32',
      },
    ],
  },
  {
    id: 'pastries',
    label: 'Pastries & sweets',
    items: [
      {
        name: 'Butter Croissant',
        description: 'Classic laminated pastry, baked each morning.',
        price: 'RM 12',
      },
      {
        name: 'Pistachio Morning Bun',
        description: 'Cardamom sugar, pistachio praline.',
        price: 'RM 16',
        tag: 'Limited',
      },
      {
        name: 'Burnt Cheesecake',
        description: 'Caramelised top, soft centre, sea salt.',
        price: 'RM 18',
      },
      {
        name: 'Dark Chocolate Tart',
        description: '70% chocolate, crème fraîche, olive oil.',
        price: 'RM 19',
      },
    ],
  },
]

export const featuredMenu = [
  menuSections[1].items[0],
  menuSections[2].items[1],
  menuSections[3].items[1],
]

export const galleryItems: GalleryItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=84',
    alt: 'Latte art in a ceramic cup on a café table',
    category: 'coffee',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=84',
    alt: 'Warm modern café interior with timber furniture',
    category: 'interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=84',
    alt: 'Seasonal brunch dishes arranged across a table',
    category: 'food',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=84',
    alt: 'Coffee drinks gathered over a café table',
    category: 'coffee',
  },
  {
    src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1400&q=84',
    alt: 'Warm café interior photograph',
    category: 'interior',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1200&q=84',
    alt: 'Breakfast toast with fruit and syrup',
    category: 'food',
  },
  {
    src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=1200&q=84',
    alt: 'Coffee drink in a café setting',
    category: 'details',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=84',
    alt: 'Fresh pastry photographed for a café menu',
    category: 'food',
  },
  {
    src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1400&q=84',
    alt: 'Inviting café interior seen through the front window',
    category: 'interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=1200&q=84',
    alt: 'Tactile café detail photograph',
    category: 'details',
  },
]

export const values = [
  {
    number: '01',
    title: 'Make fewer things, better',
    body: 'A short menu keeps attention on seasonality, technique and consistency rather than sheer choice.',
  },
  {
    number: '02',
    title: 'Let the room breathe',
    body: 'Natural materials, soft light and deliberate negative space make the café feel calm without feeling precious.',
  },
  {
    number: '03',
    title: 'Hospitality over performance',
    body: 'The concept prioritises clear service, familiar flavours and thoughtful details over novelty for its own sake.',
  },
]
