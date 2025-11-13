"use server"

import db from "@/db";
import { posts } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createPost(prevState: { error?: string } | null, formData: FormData) {
    const title = formData.get('title');
    const body = formData.get('body');

    if (!title || !body) {
        return { error: 'Title and body are required' };
    }

    await db.insert(posts).values({ 
        title: title as string, 
        body: body as string 
    }).returning();
    
    revalidatePath('/suspense');
    return { error: undefined }; // or return null for success
}

export async function deletePost(id: number) {
    await db.delete(posts).where(eq(posts.id, id));
    revalidatePath('/suspense');
}