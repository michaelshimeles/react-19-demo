"use client"
import { use } from "react";

type Post = {
    id: number;
    title: string;
    body: string;
    userId?: number;
}

export default function DataContent({ postsPromise }: { postsPromise: Promise<any> }) {
    const response = use(postsPromise);

    return (
        <div className="flex flex-col gap-4">
            {response.data.map((post: Post) => (
                <div className="flex flex-col gap-2 border-2 border-gray-300 rounded-md p-4" key={post.id}>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">{post.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{post.body}</p>
                </div>
            ))}
        </div>
    );
}

