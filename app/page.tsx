import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full gap-8 p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          React 19 Feature Demos
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore new React 19 features and patterns
        </p>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-2xl">
        {/* Data Demo */}
        <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Suspense + use() Demo
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            See how <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">&lt;Suspense /&gt;</code> and the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">use()</code> hook work together to handle async data fetching with loading states.
          </p>
          <Link href="/suspense">
            <Button variant="default" className="w-full">
              View Suspense Demo
            </Button>
          </Link>
        </div>

        {/* Tabs Demo */}
        <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {`<Activity />`} Demo
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Explore the new <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">&lt;Activity /&gt;</code> component that manages loading and transition states for better UX in React 19.
          </p>
          <Link href="/activity">
            <Button variant="outline" className="w-full">
              View {`<Activity />`} Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
