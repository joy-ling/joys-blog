import Link from "next/link";
import { BlogPost, getCategoryBySlug, getFeaturedImageByUrl } from "@/lib/posts";
import CategoryLabel from "./categoryLabel";
import Image from 'next/image';


export default function SmallPostCard({blogPost}: {blogPost: BlogPost}){

    const category = getCategoryBySlug(blogPost.category);
    const image = getFeaturedImageByUrl(blogPost.featuredImage);


    return (
        <div key={blogPost?.slug} className="flex flex-col justify-between border-2 border-slate-100 p-7 shadow-md">
            
            <Link href={`/blog/${blogPost?.slug}`}>
                <Image src={image?.imageUrl} alt={image?.imageAlt} width={400} height={500}></Image>
            </Link>

            <Link href={`/blog/${blogPost?.slug}`}>
                <h2 className="pt-3 text-lg text-red-500 font-black hover:underline">{blogPost?.title}</h2>
            </Link>

            <p className="text-s pt-3 pb-3">{blogPost?.description}</p>

            <CategoryLabel category={category}/>
        </div>
    );
}