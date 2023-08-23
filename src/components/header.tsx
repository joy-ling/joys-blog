import Link from "next/link";
import { mouse_memoirs } from "@/app/layout";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import Sticker from "@/components/sticker";


export default async function Header(){

    const user: User | null = await currentUser();

    return(
        <header className="flex flex-col overflow-hidden items-center p-10 bg-[url('/hero.jpg')] h-[350px] bg-top bg-cover shadow-md">
            
            <div className="flex flex-row w-full items-end">
                {/* @ts-ignore */}
                {user ? "" : <Link className="nav-link" href="/sign-in">Sign In</Link>}
                <UserButton afterSignOutUrl="/" />
            </div>

            <h1 className={`${mouse_memoirs.className} text-7xl pt-7`}>Joy&apos;s Travelog</h1>
            <nav>
                <ul className="flex flex-row p-10">
                    <li className="mr-5"><Link className="nav-link" href="/">Home</Link></li>
                    <li><Link className="nav-link" href="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    );
}