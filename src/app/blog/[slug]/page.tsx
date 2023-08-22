import { getCategoryBySlug, getPostBySlug, getPosts } from "@/lib/posts";
import Link from "next/link";
import CategoryLabel from "@/components/categoryLabel";
import Image from 'next/image';
import { format, parseISO } from 'date-fns'
import Comments from "@/components/comments";


export const generateStaticParams = async () => getPosts().map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = getPostBySlug(params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

export default function PostLayout ({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  const category = getCategoryBySlug(post.category);

  return (
    <article className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mb-8 text-center">
        
        <Image className="shadow-md" src={post.featuredImage} alt={post.description} width={700} height={500}></Image>

        <h1 className="text-3xl mt-5 mb-5">{post?.title}</h1>

        <time dateTime={post.date} className="mb-5 text-xs text-gray-600">
          {format(parseISO(post.date), 'd LLLL yyyy')}
        </time>

        <div className="flex flex-col mt-3 mb-3">
          <strong>Category:</strong>
          {/* @ts-ignore */}
          <CategoryLabel category={category}/>
        </div>

      </div>

      <div className="w-full lg:w-[700px] [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />

      {/* @ts-ignore */}
      <Comments slug={params.slug}/>
    
    </article>
  )
}