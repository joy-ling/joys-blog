import Link from "next/link";
import { BlogPost, Categories } from "@/lib/posts";


export default function SmallPostCard({blogPost}: {blogPost: BlogPost}){
    return(
        <div key={blogPost?.slug} className="flex flex-col justify-between border-2 border-slate-100 p-10 shadow-md rounded-xl">
            
            <Link href={`/blog/${blogPost?.slug}`}>
            <h2 className="text-lg text-red-500 font-black hover:underline">{blogPost?.title}</h2>
            </Link>

            <p>{blogPost?.description}</p>

            <Link href={`/blog/categories/${blogPost?.category}`}>
                <span className="text-xs text-red-500">
                {blogPost?.category}
                </span>
            </Link>
        </div>
    );
}