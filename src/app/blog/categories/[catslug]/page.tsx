import { getPosts, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

type CategoryParams = {
  params: {
    categorySlug: string;
  }
}

const posts = getPosts();

// This builds all the params for ALL blog posts when the website is deployed
export function generateStaticParams() {
  const posts = getPosts();

  // generateStaticParams expects you to output an array of objects, containing the slug
  const slugsArray = posts.map((post) => ({slug: post.slug}))
  
  return slugsArray;
}

export default function page({ params }: CategoryParams) {
  const post = getPostBySlug(params.slug);

  if(!post) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Missing Post</h1>
        <p>This category does not exist</p>
      </div>
    </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>Categories</h2>
        <p>{post?.category}</p>
      </div>
    </main>
  );
}
