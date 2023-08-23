import Image from 'next/image'
import { kv } from "@vercel/kv";

export default async function Home() {

  const pageViews = await kv.incr("views");

  return (
    <main className="w-full lg:w-[700px] flex min-h-screen flex-col items-center justify-between p-24">
      <p>Welcome!</p>

      <div className="mt-5 mb-5">
        <strong>Your are visitor #{pageViews}</strong>
      </div>
    </main>
  )
}
