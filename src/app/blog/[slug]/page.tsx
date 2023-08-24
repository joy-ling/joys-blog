import { getCategoryBySlug, getPostBySlug, getPosts } from "@/lib/posts";
import Link from "next/link";
import CategoryLabel from "@/components/categoryLabel";
import Image from 'next/image';
import { format, parseISO } from 'date-fns'
import Comments from "@/components/comments";
import { Suspense } from "react";
import LoadComment from "@/components/loadComment";
import { kv } from "@vercel/kv";


export const generateStaticParams = async () => getPosts().map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = getPostBySlug(params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

export default async function PostLayout ({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  const category = getCategoryBySlug(post.category);
  const pageViews = await kv.incr(`views-${params.slug}`);

  return (
    <article className="w-full flex min-h-screen flex-col items-center justify-between p-5 md:p-24">

      <div className="w-full lg:w-[800px]">
        <div className="w-full lg:w-[800px] flex flex-col items-center">
          
          <div className="w-full h-[300px] md:h-[400px] shadow-md relative">
              <Image  src={post.featuredImage} alt={post.description} layout='fill' objectFit='cover'></Image>
          </div>
  
          <h1 className="text-3xl mt-5 mb-5">{post?.title}</h1>

          <div className="w-full flex flex-row justify-between items-start pt-5 pb-3">
            <div className="flex flex-col">
              <strong>Travel Date:</strong>
              <time dateTime={post.date} className="mb-5 text-xs text-gray-600">
                {format(parseISO(post.date), 'd LLLL yyyy')}
              </time>
            </div>

            <div className="flex flex-col">
              <strong>Continent:</strong>
              {/* @ts-ignore */}
              <CategoryLabel category={category}/>
            </div>
            
            <div className="flex flex-col">
              <strong>Views:</strong>
              <span>{pageViews}</span>
            </div>
          </div>
          
        </div>

        <div className="border-y-2 pt-10 pb-10 [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />

        <Suspense fallback={<LoadComment />}>
          {/* @ts-ignore */}
          <Comments slug={params.slug}/>
        </Suspense>
      </div>

    </article>
  )
}