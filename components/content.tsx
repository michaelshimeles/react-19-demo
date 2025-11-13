"use client"
import { use, useOptimistic, useTransition } from "react";
import { Button } from "./ui/button";
import { TrashIcon } from "lucide-react";
import { deletePost } from "@/actions/posts";

type Post = {
    id: number;
    title: string;
    body: string;
    userId?: number;
}

export default function DataContent({ postsPromise }: { postsPromise: Promise<any> }) {
    const { data } = use(postsPromise);
    const [isPending, startTransition] = useTransition();

    // Optimistic state management
    const [optimisticPosts, removeOptimisticPost] = useOptimistic(
        data,
        (state: Post[], deletedId: number) => state.filter(post => post.id !== deletedId)
    );

    const handleDelete = (id: number) => {
        startTransition(async () => {
            // Move optimistic update INSIDE the transition
            removeOptimisticPost(id);
            // Actually delete on server
            await deletePost(id);
        });
    };

    return (
        <div className="flex flex-col gap-4">
            {optimisticPosts.map((post: Post) => (
                <div
                    className={isPending ? "flex flex-col gap-2 border-2 border-gray-300 rounded-md p-4 opacity-50 cursor-not-allowed" : "flex flex-col gap-2 border-2 border-gray-300 rounded-md p-4"}
                    key={post.id}
                >
                    <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">{post.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{post.body}</p>
                    <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={() => handleDelete(post.id)}
                        disabled={isPending}
                    >
                        <TrashIcon className="w-4 h-4" />
                    </Button>

                </div>
            ))}
        </div>
    );
}