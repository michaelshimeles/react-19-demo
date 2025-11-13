import DataContent from "@/components/data-content";
import { Button } from "@/components/ui/button";
import db from "@/db";
import { posts } from "@/db/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";
import { Suspense } from "react";

export default function DataPage() {
    const postsPromise = getPosts();

    return (
        <div className="flex flex-col gap-6 p-8 md:p-16 lg:p-24 max-w-5xl mx-auto">
            <div className="flex items-center gap-4">
                <Button asChild variant="outline">
                    <Link href="/">
                        ← Back to Home
                    </Link>
                </Button>
            </div>
            
            <div className="mb-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    {`<Suspense />`} + use() Demo
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                    This demo shows how React 19's <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">&lt;Suspense /&gt;</code> component 
                    and <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">use()</code> hook work together to handle async data fetching.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 ml-4">
                    <li>Data is fetched from the database on the server</li>
                    <li>While loading, the fallback UI (skeleton) is displayed</li>
                    <li>Once loaded, the actual content replaces the fallback smoothly</li>
                </ul>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent Posts</h2>
                <Suspense fallback={
                <div className="flex flex-col gap-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex flex-col gap-2 border-2 border-gray-300 rounded-md p-4 animate-pulse">
                            {/* <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div> */}
                            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
                        </div>
                    ))}
                </div>
            }>
                    <DataContent postsPromise={postsPromise} />
                </Suspense>
            </div>
        </div>
    );
}

const getPosts = async () => {
    const postsData = await db.select().from(posts).orderBy(desc(posts.createdAt)).limit(10);
    return { success: true, data: postsData };
};
