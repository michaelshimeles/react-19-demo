"use server"

import db from "@/db";
import { posts } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export async function createPost(formData: FormData) {
    const title = formData.get('title');
    const body = formData.get('body');

    if (!title || !body) {
        return { error: 'Title and body are required' };
    }

    const post = await db.insert(posts).values({ title: title as string, body: body as string }).returning();
    return { success: true, data: post[0] };
}

export async function deletePost(id: number) {
    const post = await db.delete(posts).where(eq(posts.id, id));
    return { success: true, data: post };
}
