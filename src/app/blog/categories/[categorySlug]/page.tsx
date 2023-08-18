import { getPostsByCategory, getCategories, getCategoryBySlug } from "@/lib/posts";
import SmallPostCard from "@/components/smallPostCard";


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
  const categories = getCategoryBySlug(params.categorySlug);
  const posts = getPostsByCategory(params.categorySlug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2 className="text-3xl mb-5">{categories?.categoryName}</h2>
        
        <div className="grid grid-cols-3 gap-5">
          {posts.map((post) => {
            return (
              <div key={post.slug}>
                  <SmallPostCard blogPost={post}/>
              </div>
            );
          })}
        </div>
          
      </div>
    </main>
  );
}
