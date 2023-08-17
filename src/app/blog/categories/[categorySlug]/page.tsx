import { getPostsByCategory, getCategories } from "@/lib/posts";
import Link from "next/link";

type CategoryParams = {
  params: {
    categorySlug: string;
    categoryName: string;
  }
}

export function generateStaticParams({params}: CategoryParams) {
  const categories = getCategories();

  return categories.map((category) => {
    return { category: params.categorySlug };
  });
}

export default function CategoryPage({ params }: CategoryParams) {
  const posts = getPostsByCategory(params.categorySlug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>{params.categoryName}</h2>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post?.slug}>
                <Link href={`/blog/${post?.slug}`}>{post?.title}</Link>
              </li>
            );
          })}
      </ul>
      </div>
    </main>
  );
}
