import { comments } from "@/data/comments";

export async function GET() {
    return Response.json(comments)
}

export async function POST(req: Request) {
    const { text } = await req.json();
    const newComment = { id: comments.length + 1, text };
    comments.push(newComment);
    return Response.json(newComment, {status:201})
}

