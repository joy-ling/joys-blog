import { getCategories, getCategoryBySlug } from "@/lib/posts";
import SmallPostCard from "@/components/smallPostCard";
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

type CategoryParams = {
  params: {
    categorySlug: string;
    categoryName: string;
  }
}

export default function CategoryPage({ params }: CategoryParams) {
  const categories = getCategoryBySlug(params.categorySlug);
  const posts = allPosts.sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date))).filter((post) => post.category === params.categorySlug)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2 className="text-3xl mb-5">{categories?.categoryName}</h2>
        
        <div className="grid grid-cols-3 gap-5">
          {posts.map((post: Post, idx: number) => (
            <SmallPostCard key={idx} {...post} />
          ))}
        </div>
          
      </div>
    </main>
  );
}
