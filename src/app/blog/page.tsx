import Link from "next/link";
import SmallPostCard from "@/components/smallPostCard";
import { compareDesc } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import { getCategories, Category } from "@/lib/posts";
import CategoryLabel from "@/components/categoryLabel";
import { kv } from "@vercel/kv";

type BlogSortQuery = {
  sortBy: string;
}

// This function returns an array of numbers (views)
// async function getPostViews() {
//   const posts = allPosts;

//   const postsWithViews = Promise.all(posts.map((post)=> {
//     return kv.get(`views-${post.slug}`);
//   }));

//   return postsWithViews;
// }

// function sortPostsByViewCount(a: any, b: any) {
//   if(a.views < b.views) {
//     return -1;
//   } else if (a.views > b.views) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

function sortPostsByDate(a: any, b: any) {
  if(a.date < b.date) {
    return -1;
  } else if (a.date > b.date) {
    return 1;
  } else {
    return 0;
  }
}

export default async function BlogPage({searchParams}: {searchParams: BlogSortQuery}) {  
  const posts = allPosts.sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)));
  const categories = getCategories();
  // Get views and posts and add our views to each post object
  // const postViews = await getPostViews();

  // for (let i=0; i < posts.length; i++) {
  //   //@ts-ignore
  //   posts[i].views = postViews[i];
  // }

  // if(searchParams.sortBy === "most-popular") {
  //   posts.sort(sortPostsByViewCount).reverse();
  // } else if (searchParams.sortBy === "least-popular") {
  //   posts.sort(sortPostsByViewCount);
  // }

  if(searchParams.sortBy === "newest") {
    posts.sort(sortPostsByDate).reverse();
  } else if (searchParams.sortBy === "oldest") {
    posts.sort(sortPostsByDate);
  }

  return (
    <div>
      <h2 className="text-4xl font-black mb-5">The Travelog</h2>
      
      <div className="flex flex-col md:flex-row pb-5 justify-between">

        <div className="flex flex-col text-xs">
          <strong>Filter by Continent:</strong>
          <ul className="flex flex-row pt-2">
            <li className="mr-5"><Link className="text-red-500" href="/blog">All</Link></li>
            {categories.map((category: Category) => (
                <li key={category.categorySlug} className="mr-5"><CategoryLabel category={category}/></li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col text-xs pt-5 md:pt-0">
          <strong>Sort:</strong>
          <ul className="flex flex-row pt-2">
            <li className="mr-5"><Link className="text-red-500" href="/blog?sortBy=newest">Newest</Link></li>
            <li className="mr-5"><Link className="text-red-500" href="/blog?sortBy=oldest">Oldest</Link></li>
            {/* <li className="mr-5"><Link className="text-red-500" href="/blog?sortBy=most-popular">Most Popular</Link></li>
            <li><Link className="text-red-500" href="/blog?sortBy=least-popular">Least Popular</Link></li> */}
          </ul>
        </div>

      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Post, idx: number) => (
          <SmallPostCard key={idx} {...post} />
        ))}
      </div>
        
    </div>
  );
}
