export type BlogPost = {
  title: string,
  slug: string,
  category: string,
  description: string,
  content: string,
}

export type Categories = {
  categoryName: string,
  categorySlug: string,
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

const POSTS: BlogPost[] = [
    {
      title: "Solo Trip in Paris",
      slug: "solo-trip-paris",
      category: "europe",
      description: "Short description",
      content: "My first time in Paris was a solo trip.",
    },
    {
      title: "Epic Eurotrip Part I: Barcelona",
      slug: "eurotrip-barcelona",
      category: "europe",
      description: "Short description",
      content: "We flew from Liverpool to Barcelona.",
    },
    {
      title: "Epic Eurotrip Part II: Paris",
      slug: "eurotrip-paris",
      category: "europe",
      description: "Short description",
      content: "We took a train from Barcelona to Paris.",
    },
    {
      title: "Epic Eurotrip Part III: Brussels",
      slug: "eurotrip-brussels",
      category: "europe",
      description: "Short description",
      content: "We took a train from Paris to Brussels.",
    },
    {
      title: "Epic Eurotrip Part IV: Amsterdam",
      slug: "eurotrip-amsterdam",
      category: "europe",
      description: "Short description",
      content: "We took a train from Brussels to Amsterdam.",
    },
    {
      title: "Epic Eurotrip Part V: Paderborn",
      slug: "eurotrip-paderborn",
      category: "europe",
      description: "Short description",
      content: "We took a train from Amsterdam to Paderborn.",
    },
    {
      title: "Epic Eurotrip Part VI: Berlin",
      slug: "eurotrip-berlin",
      category: "europe",
      description: "Short description",
      content: "We took a train from Paderborn to Berlin.",
    },
    {
      title: "Cozy in Copenhagen",
      slug: "cozy-copenhagen",
      category: "europe",
      description: "Short description",
      content: "We went to Copenhagen in the winter. It was very cold.",
    },
    {
      title: "Honeymoon in Vienna",
      slug: "honeymoon-vienna",
      category: "europe",
      description: "Short description",
      content: "We had our honeymoon in Vienna.",
    },
    {
      title: "Childhood Memories: Malaysia Part I",
      slug: "childhood-memories-malaysia-part-1",
      category: "asia",
      description: "Short description",
      content: "My first trip abroad was to Malaysia.",
    },
    {
      title: "Childhood Memories: Taiwan",
      slug: "childhood-memories-taiwan",
      category: "asia",
      description: "Short description",
      content: "I went to Taiwant to visit my father's family.",
    },
    {
      title: "Childhood Memories: Malaysia Part II feat. Singapore",
      slug: "childhood-memories-malaysia-part-2",
      category: "asia",
      description: "Short description",
      content: "My second time in Malaysia. I also went to Singapore",
    },
    {
      title: "Childhood Memories: Malaysia Part III",
      slug: "childhood-memories-malaysia-part-3",
      category: "asia",
      description: "Short description",
      content: "My third time in Malaysia.",
    },
    {
      title: "Layovers in Tokyo",
      slug: "tokyo-layovers",
      category: "asia",
      description: "Short description",
      content: "On my way to Malaysia, we stopped in Tokyo, Japan.",
    },
    {
      title: "A Proposal in Canada",
      slug: "canada-proposal",
      category: "america",
      description: "Short description",
      content: "My husband proposed to me in Canada. Here's how that went.",
    },
    {
      title: "A Wedding in Key West",
      slug: "key-west-wedding",
      category: "america",
      description: "Short description",
      content: "My sister got married in Key West, Florida.",
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

  export function getPostsByCategory(categorySlug:string) {
    return POSTS.filter((post)=> post.category === categorySlug);
  }