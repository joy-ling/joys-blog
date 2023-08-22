import Link from "next/link";
import SmallPostCard from "@/components/smallPostCard";
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { getCategories, Category } from "@/lib/posts";
import CategoryLabel from "@/components/categoryLabel";


export default function BlogPage() {
  const posts = allPosts.sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)))
  const categories = getCategories();

  console.log(categories);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2 className="text-4xl font-black mb-5">The Travelog</h2>
        
      <div className="flex flex-col text-xs pb-5">
        <strong>Filter by Category:</strong>
        <ul className="flex flex-row pt-2">
          {categories.map((category: Category) => (
              <li className="mr-5"><CategoryLabel key={category.categorySlug} category={category}/></li>
          ))}
        </ul>
        
      </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {posts.map((post: Post, idx: number) => (
            <SmallPostCard key={idx} {...post} />
          ))}
        </div>
          
      </div>
    </main>
  );
}
