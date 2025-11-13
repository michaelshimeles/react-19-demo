import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full gap-8 p-8 max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mt-12 mb-4">
        <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
          <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Interactive Tutorial</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Learn React 19
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Master the latest features in React 19 through interactive demos and real-world examples
        </p>
      </div>

      {/* What You'll Learn Section */}
      <div className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 border-2 border-sky-200 dark:border-sky-800 rounded-lg p-8 mb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <span className="text-3xl">🎯</span>
          What You'll Learn
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Async Data Handling</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Master the <code className="text-xs px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">use()</code> hook for promises</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Advanced Suspense</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Build better loading experiences</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">State Preservation</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Use <code className="text-xs px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">{`<Activity />`}</code> for seamless transitions</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">Optimistic Updates</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Instant UI feedback patterns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tutorial Modules */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          📚 Tutorial Modules
        </h2>
        <div className="flex flex-col gap-6">
          {/* Module 1: Suspense */}
          <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-400 dark:hover:border-blue-600 transition-all hover:shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-2xl font-bold text-blue-600 dark:text-blue-400">
                1
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Suspense + use() Hook
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Learn how React 19's <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">use()</code> hook 
                  and <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">&lt;Suspense /&gt;</code> work together 
                  to handle async data fetching with elegant loading states.
                </p>
                
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm">
                    💡 Key Concepts:
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">→</span>
                      <span>Unwrapping promises with the <code className="text-xs px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">use()</code> hook</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">→</span>
                      <span>Creating smooth loading experiences with Suspense boundaries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">→</span>
                      <span>Server-side data fetching patterns with Next.js</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">→</span>
                      <span>Optimistic UI updates with <code className="text-xs px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">useOptimistic()</code></span>
                    </li>
                  </ul>
                </div>

                <Link href="/suspense">
                  <Button variant="default" className="w-full">
                    Start Learning →
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Module 2: Activity */}
          <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-teal-400 dark:hover:border-teal-600 transition-all hover:shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center text-2xl font-bold text-teal-600 dark:text-teal-400">
                2
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {`<Activity />`} Component
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Discover how the new <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">&lt;Activity /&gt;</code> component 
                  preserves component state during transitions, creating seamless user experiences without remounting.
                </p>
                
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm">
                    💡 Key Concepts:
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500">→</span>
                      <span>State preservation across view transitions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500">→</span>
                      <span>Preventing unwanted component remounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500">→</span>
                      <span>Maintaining focus and scroll positions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500">→</span>
                      <span>Side-by-side comparison with traditional rendering</span>
                    </li>
                  </ul>
                </div>

                <Link href="/activity">
                  <Button variant="default" className="w-full bg-teal-600 hover:bg-teal-700">
                    Start Learning →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
