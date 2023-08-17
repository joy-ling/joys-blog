import Link from "next/link";
import { mouse_memoirs } from "@/app/layout";

export default function Header(){
    return(
        <header className="flex flex-col items-center p-10 bg-[url('/sky.jpg')] h-[300px] shadow-md">
            <h1 className={`${mouse_memoirs.className} text-7xl`}>Joy&apos;s Travelog</h1>
            <nav>
                <ul className="flex flex-row p-10">
                    <li className="mr-5"><Link className="nav-link" href="/">Home</Link></li>
                    <li><Link className="nav-link" href="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    );
}