import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

type BlogPostParams = {
  params: {
    slug: string;
  }
}

export default function page({ params }: BlogPostParams) {
  const post = getPostBySlug(params.slug);

  if(!post) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Missing Post</h1>
        <p>This post does not exist</p>
      </div>
    </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>{post?.title}</h1>
        <p>{post?.content}</p>
      </div>
    </main>
  );
}
