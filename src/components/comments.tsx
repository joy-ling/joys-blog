import { WEBSITE_URL } from "config";
import CommentForm from "./commentForm";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";
import Link from "next/link";

export default async function Comments({ slug }: { slug:string }) {
    let comments = [];
    try {
        const commentsRes = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, {next: {revalidate: 10}});
        comments = await commentsRes.json();
    } catch(err) {
        console.log(err);
    }

    const user: User | null = await currentUser();

    return (
        <div className="pt-5 pb-5">
            <h1 className="text-2xl pt-3 pb-3">Comments</h1>

            {/* @ts-ignore */}
            {comments?.map((comment) => {
                return (
                    <div className="pt-5 pb-5 border-b-2 border-gray-100" key={comment.uuid}>
                        <strong>{comment.username}</strong>
                        <p>{comment.comment}</p>
                    </div>
                );
            })}

            <h3 className="text-2xl pt-5">Submit a Comment</h3>

            {/* @ts-ignore */}
            {user ? <CommentForm slug={slug} username={user.username} /> : <Link href={`/sign-in?redirect=/blog/${slug}`}>Please sign in to comment</Link>}

        </div>
    );
}