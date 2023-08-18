import { getCategoryBySlug, getPostBySlug, getPosts } from "@/lib/posts";
import Link from "next/link";
import CategoryLabel from "@/components/categoryLabel";
import Image from 'next/image';
import { format, parseISO } from 'date-fns'


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
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>

        <Image className="shadow-md" src={post.featuredImage} alt={post.description} width={700} height={500}></Image>

        <h1 className="text-3xl mt-5 mb-5">{post?.title}</h1>

        <div className="flex flex-col mt-3 mb-3">
          <strong>Category:</strong>
          {/* @ts-ignore */}
          <CategoryLabel category={category}/>
        </div>

      </div>

      <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    
    </article>
  )
}