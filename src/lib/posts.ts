export type BlogPost = {
  title: string,
  slug: string,
  category: string,
  description: string,
  content: string,
  featuredImage: string,
}

export type Categories = {
  categoryName: string,
  categorySlug: string,
}

export type FeaturedImage = {
  imageID: string,
  imageUrl: string,
  imageAlt: string,
}

const CATEGORIES: Categories[] = [
  {
    categoryName: "Europe",
    categorySlug: "europe",
  },
  {
    categoryName: "Asia",
    categorySlug: "asia",
  },
  {
    categoryName: "America",
    categorySlug: "america",
  }
]

const FEATURED_IMAGES: FeaturedImage[] = [
  {
    imageID: "placeholder",
    imageUrl: "/placeholder.jpg",
    imageAlt: "This is just a placeholder",
  },
  {
    imageID: "louvre",
    imageUrl: "/louvre.jpg",
    imageAlt: "Me in front of the Louvre"
  }
]

const POSTS: BlogPost[] = [
    {
      title: "Solo Trip in Paris",
      slug: "solo-trip-paris",
      category: "europe",
      description: "Short description",
      content: "My first time in Paris was a solo trip.",
      featuredImage: "louvre",
    },
    {
      title: "Epic Eurotrip Part I: Barcelona",
      slug: "eurotrip-barcelona",
      category: "europe",
      description: "Short description",
      content: "We flew from Liverpool to Barcelona.",
      featuredImage: "placeholder",
    },
    {
      title: "Epic Eurotrip Part II: Paris",
      slug: "eurotrip-paris",
      category: "europe",
      description: "Short description",
      content: "We took a train from Barcelona to Paris.",
      featuredImage: "placeholder",
    },
    {
      title: "Epic Eurotrip Part III: Brussels",
      slug: "eurotrip-brussels",
      category: "europe",
      description: "Short description",
      content: "We took a train from Paris to Brussels.",
      featuredImage: "placeholder",
    },
    {
      title: "Epic Eurotrip Part IV: Amsterdam",
      slug: "eurotrip-amsterdam",
      category: "europe",
      description: "Short description",
      content: "We took a train from Brussels to Amsterdam.",
      featuredImage: "placeholder",
    },
    {
      title: "Epic Eurotrip Part V: Paderborn",
      slug: "eurotrip-paderborn",
      category: "europe",
      description: "Short description",
      content: "We took a train from Amsterdam to Paderborn.",
      featuredImage: "placeholder",
    },
    {
      title: "Epic Eurotrip Part VI: Berlin",
      slug: "eurotrip-berlin",
      category: "europe",
      description: "Short description",
      content: "We took a train from Paderborn to Berlin.",
      featuredImage: "placeholder",
    },
    {
      title: "Cozy in Copenhagen",
      slug: "cozy-copenhagen",
      category: "europe",
      description: "Short description",
      content: "We went to Copenhagen in the winter. It was very cold.",
      featuredImage: "placeholder",
    },
    {
      title: "Honeymoon in Vienna",
      slug: "honeymoon-vienna",
      category: "europe",
      description: "Short description",
      content: "We had our honeymoon in Vienna.",
      featuredImage: "placeholder",
    },
    {
      title: "Childhood Memories: Malaysia Part I",
      slug: "childhood-memories-malaysia-part-1",
      category: "asia",
      description: "Short description",
      content: "My first trip abroad was to Malaysia.",
      featuredImage: "placeholder",
    },
    {
      title: "Childhood Memories: Taiwan",
      slug: "childhood-memories-taiwan",
      category: "asia",
      description: "Short description",
      content: "I went to Taiwant to visit my father's family.",
      featuredImage: "placeholder",
    },
    {
      title: "Childhood Memories: Malaysia Part II feat. Singapore",
      slug: "childhood-memories-malaysia-part-2",
      category: "asia",
      description: "Short description",
      content: "My second time in Malaysia. I also went to Singapore",
      featuredImage: "placeholder",
    },
    {
      title: "Childhood Memories: Malaysia Part III",
      slug: "childhood-memories-malaysia-part-3",
      category: "asia",
      description: "Short description",
      content: "My third time in Malaysia.",
      featuredImage: "placeholder",
    },
    {
      title: "Layovers in Tokyo",
      slug: "tokyo-layovers",
      category: "asia",
      description: "Short description",
      content: "On my way to Malaysia, we stopped in Tokyo, Japan.",
      featuredImage: "placeholder",
    },
    {
      title: "A Proposal in Canada",
      slug: "canada-proposal",
      category: "america",
      description: "Short description",
      content: "My husband proposed to me in Canada. Here's how that went.",
      featuredImage: "placeholder",
    },
    {
      title: "A Wedding in Key West",
      slug: "key-west-wedding",
      category: "america",
      description: "Short description",
      content: "My sister got married in Key West, Florida.",
      featuredImage: "placeholder",
    },
  ];

  // Get all posts
  export function getPosts() {
    return POSTS;
  }

  // Get single post
  export function getPostBySlug(slug: string) {
    return POSTS.find((post)=> post.slug === slug);
  }

  export function getCategories() {
    return CATEGORIES;
  }

  export function getCategoryBySlug(slug: string){
    return CATEGORIES.find((category)=> category.categorySlug === slug);
  }

  export function getPostsByCategory(categorySlug: string) {
    return POSTS.filter((post)=> post.category === categorySlug);
  }
  
  export function getFeaturedImageByUrl(image: string) {
    return FEATURED_IMAGES.find((featuredImage)=> featuredImage.imageID === image);
  }