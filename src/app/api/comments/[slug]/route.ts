import { NextRequest, NextResponse } from "next/server";
import { getComments, saveComment } from "@/lib/comments";

type BlogPostParams = {
    params: {
        slug: string;
    };
};

export async function GET(request: NextRequest, {params}: BlogPostParams) {
    // Get the comments
    const comments = await getComments(params.slug);

    // Return the comments
    return NextResponse.json(comments);
}

export async function POST(request: NextRequest, {params}: BlogPostParams) {
    const form = await request.formData();
    const username = form.get("username") as string;
    const comment = form.get("comment") as string;

    await saveComment(username, comment, params.slug);

    return NextResponse.json("Comment saved");
}