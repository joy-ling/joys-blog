import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center p-5">
            <p>Joy Chiang Ling</p>
            <Link className="text-red-500" href="https://joychiangling.com">Visit my Portfolio Site</Link>
        </footer>
    );
}