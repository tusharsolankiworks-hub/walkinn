import { Product } from './types';

export const CATEGORIES = ["All", "Running", "Lifestyle", "Basketball", "Limited Edition"];

// These products serve as a fallback if the Supabase database is empty.
// They match the specific images provided by the user.
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Air White",
    category: "Lifestyle",
    price: 99.00,
    description: "The definitive white sneaker. Features a durable leather upper, perforated toe box for breathability, and a chunky sole for that classic street look.",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1000&auto=format&fit=crop",
    sizes: [7, 8, 9, 10, 11, 12],
    featured: true
  },
  {
    id: 2,
    name: "Urban Grey Low",
    category: "Lifestyle",
    price: 75.00,
    description: "Minimalist grey design tailored for the modern commuter. Soft synthetic leather and a flat sole provide all-day comfort.",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1000&auto=format&fit=crop",
    sizes: [6, 7, 8, 9, 10, 11]
  },
  {
    id: 3,
    name: "Tech Bowfin 270",
    category: "Running",
    price: 145.00,
    description: "A rugged utility runner with a toggle lacing system and mixed-material upper. Designed for traction and stability in urban environments.",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop",
    sizes: [8, 9, 10, 11, 12]
  },
  {
    id: 4,
    name: "Zoom Speed Rival",
    category: "Running",
    price: 110.00,
    description: "Electric blue and green colorway. Engineered mesh upper with Zoom Air units in the forefoot for propulsive energy return.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
    sizes: [7, 8, 9, 10, 11],
    featured: true
  },
  {
    id: 5,
    name: "Fresh Foam White",
    category: "Running",
    price: 120.00,
    description: "Cloud-like comfort in a pristine white package. The Fresh Foam midsole delivers a plush, natural ride.",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop",
    sizes: [8, 9, 10, 11, 12]
  },
  {
    id: 6,
    name: "SB Janoski Black",
    category: "Lifestyle",
    price: 85.00,
    description: "A skateboarding staple. Black suede upper with the iconic white swoosh. Low-profile cushioning and boardfeel.",
    image: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=1000&auto=format&fit=crop",
    sizes: [7, 8, 9, 10, 11, 12]
  },
  {
    id: 7,
    name: "Beige Knit Runner",
    category: "Lifestyle",
    price: 105.00,
    description: "Slip-on comfort with a premium beige knit upper. The unique lacing cage adds support and style.",
    image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=1000&auto=format&fit=crop",
    sizes: [6, 7, 8, 9, 10]
  },
  {
    id: 8,
    name: "Air Max Dia Color",
    category: "Limited Edition",
    price: 130.00,
    description: "Designed specifically for a woman's foot, the lifted look and airy aesthetic features a colorful translucent upper.",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1000&auto=format&fit=crop",
    sizes: [5, 6, 7, 8, 9],
    featured: true
  },
  {
    id: 9,
    name: "Human Race NMD",
    category: "Limited Edition",
    price: 220.00,
    description: "A collaboration celebrating humanity. White Primeknit upper with embroidered lettering and energy-returning Boost midsole.",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop",
    sizes: [8, 9, 10, 11]
  },
  {
    id: 10,
    name: "Yeezy 350 Zebra",
    category: "Limited Edition",
    price: 280.00,
    description: "The highly sought-after silhouette. Features a black and white re-engineered Primeknit upper with a post-dyed monofilament side stripe.",
    image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&w=1000&auto=format&fit=crop",
    sizes: [8, 9, 10, 11, 12]
  },
  {
    id: 11,
    name: "Air Max 1 Anniversary",
    category: "Lifestyle",
    price: 150.00,
    description: "The one that started it all. Original white and red colorway with visible Air cushioning in the heel.",
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1000&auto=format&fit=crop",
    sizes: [9, 10, 11, 12]
  }
];