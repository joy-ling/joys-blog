import Link from "next/link";
import SmallPostCard from "@/components/smallPostCard";
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'


export default function BlogPage() {
  const posts = allPosts.sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2 className="text-4xl font-black mb-5">The Travelog</h2>
        
        <div className="grid grid-cols-3 gap-5">
          {posts.map((post: Post, idx: number) => (
            <SmallPostCard key={idx} {...post} />
          ))}
        </div>
          
      </div>
    </main>
  );
}
