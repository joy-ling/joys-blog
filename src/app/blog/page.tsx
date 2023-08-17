import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { Maiden_Orange } from "next/font/google";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>My Posts</h2>
        <ul>
          {posts.map((post) => {
            return(
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

