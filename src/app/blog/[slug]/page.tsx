import { getPosts, getPostBySlug, getCategoryBySlug, getFeaturedImageByUrl } from "@/lib/posts";
import Link from "next/link";
import CategoryLabel from "@/components/categoryLabel";
import Image from 'next/image';


type BlogPostParams = {
  params: {
    slug: string;
  }
}

// This builds all the params for ALL blog posts when the website is deployed
export function generateStaticParams() {
  const posts = getPosts();

  // generateStaticParams expects you to output an array of objects, containing the slug
  const slugsArray = posts.map((post) => ({slug: post.slug}))
  
  return slugsArray;
}

export default function page({ params }: BlogPostParams) {

  const post = getPostBySlug(params.slug);
  const category = getCategoryBySlug(post?.category);
  const image = getFeaturedImageByUrl(post?.featuredImage);

  // If post is missing...
  if(!post) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col justify-start w-full">
        <h1 className="text-3xl">Missing Post</h1>
        <p>This post does not exist</p>
      </div>
    </main>
    );
  }
  


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>

        <Image className="shadow-md" src={image?.imageUrl} alt={image?.imageAlt} width={700} height={500}></Image>

        <h1 className="text-3xl mt-5 mb-5">{post?.title}</h1>

        <div className="flex flex-col mt-3 mb-3">
          <strong>Category:</strong>
          <CategoryLabel category={category}/>
        </div>
        

        <div className="mt-5 mb-5">
          {post?.content}
        </div>
      </div>
    </main>
  );
}
