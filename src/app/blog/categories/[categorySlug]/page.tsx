import { getCategories, getCategoryBySlug, Category } from "@/lib/posts";
import SmallPostCard from "@/components/smallPostCard";
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import CategoryLabel from "@/components/categoryLabel";
import Link from "next/link";

type CategoryParams = {
  params: {
    categorySlug: string;
    categoryName: string;
  }
}

export default function CategoryPage({ params }: CategoryParams) {
  const category = getCategoryBySlug(params.categorySlug);
  const posts = allPosts.sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date))).filter((post) => post.category === params.categorySlug)
  const categories = getCategories();
  
  return (
      <div>
        <h2 className="text-4xl mb-5">{category?.categoryName}</h2>

        <div className="flex flex-col text-xs pb-5">
          <strong>Filter by Continent:</strong>
          <ul className="flex flex-row pt-2">
            <li className="mr-5"><Link className="text-red-500" href="/blog">All</Link></li>
            {categories.map((category: Category) => (
                <li key={category.categorySlug} className="mr-5"><CategoryLabel category={category}/></li>
            ))}
          </ul>
        </div>
        
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: Post, idx: number) => (
            <SmallPostCard key={idx} {...post} />
          ))}
        </div>
          
      </div>
  );
}
