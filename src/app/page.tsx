import Image from "next/image"
import { kv } from "@vercel/kv";
import Link from "next/link";

export default async function Home() {

  const pageViews = await kv.incr("views");

  return (
      <div className="w-full lg:w-[800px]">
        <h2 className="text-4xl pb-5">Allow me to Introduce Myself</h2>
        <p className="pb-5">My name is Joy Ling, and I&apos;m from Brooklyn, New York. I moved to the United Kingdom four years ago to be with my husband, Alex, a softspoken Brit from Liverpool.</p>
        <p className="pb-5">I&apos;m the youngest child in a family of immigrants. My parents moved from Malaysia to to New York in the 1980s with fifty dollars in their pocket and a determination to seize opportunities that only America could offer them at the time.</p>
        <p className="pb-5">I&apos;m a web developer by trade, and an artist at heart. I&apos;ve studied abroad, worked in creative agencies in New York and the UK and taught in coding schools for kids. Right now, I am a full stack developer at Milexa, an interior design company based in Liverpool.</p>
        <p className="pb-5">I have a wide array of interests, mainly techy and creative, but this isn&apos;t a <Link className="text-red-500" href="https://joychiangling.com">techy creative blog</Link> – this is a blog about my travels. My interest in traveling started when I studied abroad in London during my second semester at college. There, I met my online friend, Alex, who eventually became my boyfriend, then my fiancé, and now my husband. He&apos;s my ideal travel partner. He&apos;s interested in language, history and culture, and I&apos;m interested in food and general vibes. You&apos;ll be reading a lot about our adventures in my travelog.</p>

        <div className="mt-5 mb-5">
          <strong>Your are visitor #{pageViews}</strong>
        </div>
      </div> 
  )
}
