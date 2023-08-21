import Link from "next/link";
import { getCategoryBySlug } from "@/lib/posts";
import CategoryLabel from "./categoryLabel";
import Image from 'next/image';
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { notFound } from 'next/navigation'


export default function SmallPostCard(post: Post){

    const category = getCategoryBySlug(post.category);

    if(!category) {
        return notFound()
    }

    return (
        <div key={post?.slug} className="flex flex-col justify-between border-2 border-slate-100 p-7 shadow-md">
            
            <div className="w-full h-[200px] relative">
                <Link href={`/blog/${post.slug}`}>
                    <Image src={post.featuredImage} alt={post.title} layout='fill' objectFit='cover'></Image>
                </Link>
            </div>

            <Link href={`/blog/${post.slug}`}>
                <h2 className="pt-3 text-lg text-red-500 font-black hover:underline">{post?.title}</h2>
            </Link>

            <p className="text-s pt-3 pb-3">{post?.description}</p>

            <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
                {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>

            <CategoryLabel category={category}/>
        </div>
    );
}