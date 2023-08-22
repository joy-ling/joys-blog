import { WEBSITE_URL } from "config";
import CommentForm from "./commentForm";

export default async function Comments({ slug }: { slug:string }) {
    let comments = [];
    try {
        const commentsRes = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, {next: {revalidate: 10}});
        comments = await commentsRes.json();
    } catch(err) {
        console.log(err);
    }

    return (
        <div className="pt-5 pb-5">
            <h1 className="text-2xl pt-3 pb-3">Comments</h1>

            {/* @ts-ignore */}
            {comments.map((comment) => {
                return (
                    <div className="pt-5 pb-5 border-b-2 border-gray-100" key={comment.uuid}>
                        <strong>{comment.username}</strong>
                        <p>{comment.comment}</p>
                    </div>
                );
            })}

            <h3 className="text-2xl pt-5">Submit a Comment</h3>
            <CommentForm slug={slug} />
            
        </div>
    );
}