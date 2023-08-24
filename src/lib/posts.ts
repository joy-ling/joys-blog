import { allPosts as POSTS } from "contentlayer/generated";

export type Category = {
  categoryName: string,
  categorySlug: string,
}

export type FeaturedImage = {
  imageID: string,
  imageUrl: string,
  imageAlt: string,
}

const CATEGORIES: Category[] = [
  {
    categoryName: "Europe",
    categorySlug: "europe",
  },
  {
    categoryName: "Asia",
    categorySlug: "asia",
  },
  {
    categoryName: "North America",
    categorySlug: "north-america",
  }
]

export function getPosts() {
  return POSTS;
}

export function getPostBySlug(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

export function getCategories() {
  return CATEGORIES;
}

export function getCategoryBySlug(slug: string){
  return CATEGORIES.find((category)=> category.categorySlug === slug);
}

export function getPostsByCategory(catslug: string) {
  return POSTS.filter((post) => post.category === catslug);
}