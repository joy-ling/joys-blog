import Link from "next/link";
import { BlogPost, getPosts } from "@/lib/posts";
import SmallPostCard from "@/components/smallPostCard";


export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2 className="text-4xl font-black mb-5">My Posts</h2>
        
        <div className="grid grid-cols-3 gap-5">
          {posts.map((post: BlogPost) => {
            return(
              <SmallPostCard blogPost={post}/>
            );
          })}
        </div>
          
      </div>
    </main>
  );
}

