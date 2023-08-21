import short from "short-uuid";
import { kv } from "@vercel/kv";

export async function saveComment(username: string, comment: string, slug: string) {
    // Generate a unique ID for this comment
    const uuid = short.generate();

    // Stringify our comment object
    const commentObject = JSON.stringify({
        username,
        comment,
        uuid
    });

    // Add the comment to the kv store - comment:90978
    kv.set(`comment:${uuid}`, commentObject);

    // Add this comment to the list of comments for the post - comments:post-one
    const commentsList = await kv.lpush(`comments:${slug}`, uuid);

    return "Success. UUID: " + uuid;
}

export async function getComments(slug: string) {
    const commentIds = await kv.lrange(`comments:${slug}`, 0, -1);
    const commentKeys = commentIds.map(id => `comment:${id}`);

    if(commentKeys.length < 1) {
        return [];
    } else {
        return await kv.mget<Comment[]>(...commentKeys);
    }
}