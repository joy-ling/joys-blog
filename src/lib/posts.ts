const POSTS = [
    {
      title: "Blog one",
      slug: "blog-one",
      content: "Test1",
    },
    {
      title: "Blog two",
      slug: "blog-two",
      content: "Test2",
    }
  ];

  // Get all posts
  export function getPosts() {
    return POSTS;
  }

  // Get single post
  export function getPostBySlug(slug: string) {
    return POSTS.find((post)=> post.slug === slug);
  }