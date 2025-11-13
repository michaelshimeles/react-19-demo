import DataContent from "@/components/content";
import DataForm from "@/components/form";
import { Button } from "@/components/ui/button";
import db from "@/db";
import { posts } from "@/db/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";
import { cache, Suspense } from "react";

export default function DataPage() {
    const postsPromise = getPosts();

    return (
        <div className="flex flex-col gap-6 p-8 md:p-16 lg:p-24 max-w-5xl mx-auto">
            <DataHeader />
            
            {/* Code Example Section */}
            <div className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                    <span className="text-2xl">💻</span>
                    How This Works
                </h2>
                <div className="space-y-4">
                    <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            <strong>Step 1:</strong> Create a promise in your Server Component
                        </p>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`const postsPromise = getPosts(); // Returns a Promise`}
                        </pre>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            <strong>Step 2:</strong> Wrap your component in Suspense
                        </p>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`<Suspense fallback={<LoadingSkeleton />}>
  <DataContent postsPromise={postsPromise} />
</Suspense>`}
                        </pre>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            <strong>Step 3:</strong> Use the use() hook to unwrap the promise
                        </p>
                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs">
{`function DataContent({ postsPromise }) {
  const { data } = use(postsPromise); // Unwraps the Promise!
  return <div>{/* Render data */}</div>;
}`}
                        </pre>
                    </div>
                </div>
            </div>

            {/* Interactive Form Section */}
            <div className="border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 bg-blue-50 dark:bg-blue-950/20">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    📝 Create a New Post
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    This form uses <code className="text-xs px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">useActionState()</code> to handle submissions
                </p>
                <DataForm />
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">📋 Recent Posts</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Watch the Suspense fallback while data loads, then try deleting a post to see optimistic updates
                </p>
                <Suspense fallback={<PostsSkeleton />}>
                    <DataContent postsPromise={postsPromise} />
                </Suspense>
            </div>
            {/* Next Steps */}
            <div className="mt-6 p-6 bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    Ready for More?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Continue your learning journey with the Activity component to master state preservation!
                </p>
                <Button asChild variant="default" className="bg-teal-600 hover:bg-teal-700">
                    <Link href="/activity">
                        Next: Learn Activity Component →
                    </Link>
                </Button>
            </div>
        </div>
    );
}

const getPosts = async () => {
    const postsData = await db.select().from(posts).orderBy(desc(posts.createdAt)).limit(10);
    return { success: true, data: postsData };
};


const PostsSkeleton = () => {
    return (
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
    );
};

const DataHeader = () => {
    return (
        <div>
            <div className="flex items-center gap-4 mb-6">
                <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-[1.5px] border-gray-200 bg-white/80 px-5 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white hover:text-gray-900 dark:border-gray-700 dark:bg-gray-900/40 dark:text-gray-100"
                >
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-lg">←</span>
                        Back to Home
                    </Link>
                </Button>
            </div>
            
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Module 1</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Suspense + use() Hook
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Learn how to handle async data fetching in React 19 using the powerful combination of <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">&lt;Suspense /&gt;</code> and <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">use()</code>.
            </p>

            {/* Learning Objectives */}
            <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Learning Objectives
                </h2>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold">1.</span>
                        <span>Understand how the <code className="text-xs px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">use()</code> hook unwraps promises in React components</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold">2.</span>
                        <span>Implement <code className="text-xs px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">&lt;Suspense /&gt;</code> boundaries for better loading states</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold">3.</span>
                        <span>Create optimistic UI updates with <code className="text-xs px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">useOptimistic()</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold">4.</span>
                        <span>Handle form submissions with <code className="text-xs px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">useActionState()</code></span>
                    </li>
                </ul>
            </div>
        </div>
    );
};