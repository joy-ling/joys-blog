import Image from 'next/image'
import { kv } from "@vercel/kv";

export default async function Home() {

  const pageViews = await kv.incr("views");

  return (
    <main className="flex w-full min-h-screen flex-col items-center p-24">

      <div className="lg:w-[800px]">
        <h2 className="text-3xl pb-5">Allow me Introduce Myself</h2>
        <p className="pb-5">My name is Joy Ling, and I'm from Brooklyn, New York. I moved to the United Kingdom four years ago to be with my husband, Alex, a softspoken Brit from Liverpool.</p>
        <p className="pb-5">I'm the youngest child in a family of immigrants. My parents moved from Malaysia to to New York in the 1980s with fifty dollars in their pocket and a determination to seize the opportunities that only America could offer at the time.</p>
        <p className="pb-5">I'm a web developer by trade, and an artist by heart. I've studied abroad, worked in creative agencies in New York and the UK and taught in coding schools for kids. Right now, I am a full stack developer at Milexa, an interior design company based in Liverpool.</p>
        <p className="pb-5">I have a wide array of interests, mainly techy and creative, but this is a blog about my travels. My interest in traveling started when I studied abroad in London during my second semester at college. There, I met my online friend, Alex, who eventually became my boyfriend, then my fiancé, and now my husband. He's my ideal travel partner. He's interested in language, history and culture, and I'm interested in food and general vibes. You'll be reading a lot about our adventures in my travelog.</p>

        <div className="mt-5 mb-5">
          <strong>Your are visitor #{pageViews}</strong>
        </div>
      </div>
      
    </main>
  )
}
