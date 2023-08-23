"use client"; // Keep this on the first line.
import { WEBSITE_URL } from "config";
import { useRouter } from "next/navigation";
import { useTransition } from "react";


export default function CommentForm({ slug, username }: { slug:string; username:string }) {
    // The router to trigger a page refresh
    const router = useRouter();
    // The react useTransition hook to manage client/server data updates WITHOUT refreshing the page
    // isPending gives us the ability to show something while the transition is running (like a spinner)
    const [isPending, startTransition] = useTransition();

    async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // Get the information from the form

        // @ts-ignore
        const comment = event.target.comment.value;

        // Create our FormData object
        const formData = new FormData();
        formData.append("username", username);
        formData.append("comment", comment);

        // Make our API call
        const options = {body: formData, method: "Post"};
        const res = await fetch(`/api/comments/${slug}`, options);
        console.log(res);

        // @ts-ignore
        event.target.comment.value = "";

        // Refresh the current route and fetch new data from the server without listing the client-side browser or React state
        startTransition(() => {
            router.refresh();
            console.log("Reloading");
        })
    }

    return (
        <form className="flex flex-col pt-5 pb-5" onSubmit={handleFormSubmit}>
            <div className="flex flex-col pb-3">
                <p>Commenting as <strong>{username}</strong></p>
            </div>
            
            <div className="flex flex-col pb-3">
                <label htmlFor="comment">Comment</label>
                <textarea className="border-2 border-gray-100" name="comment" cols={30} rows={10} required/>
            </div>

            <button className="w-max bg-red-600 text-white p-3 mt-5" type="submit" disabled={isPending}>
                { isPending ? "Submitting..." : "Submit Comment"}
            </button>
        </form>
    );
}