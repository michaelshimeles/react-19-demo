import TabActivity from "@/components/tabs/tab-activity";
import TabNoActivity from "@/components/tabs/tab-no-activity";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TabsPage() {
  return (
    <div className="flex flex-col gap-8 p-8 md:p-16 lg:p-24 max-w-6xl mx-auto">
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
      
      <div className="w-fit inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-4">
        <span className="text-sm font-medium text-teal-700 dark:text-teal-300">Module 2</span>
      </div>
      
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {`<Activity />`} Component
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Learn how to preserve component state during view transitions using React 19's <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">&lt;Activity /&gt;</code> component.
        </p>

        {/* Learning Objectives */}
        <div className="bg-teal-50 dark:bg-teal-950/20 border-2 border-teal-200 dark:border-teal-800 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            Learning Objectives
          </h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-teal-500 font-bold">1.</span>
              <span>Understand why component remounting can cause UX issues</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-500 font-bold">2.</span>
              <span>Learn how <code className="text-xs px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">&lt;Activity /&gt;</code> preserves state during transitions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-500 font-bold">3.</span>
              <span>Implement seamless tab switching without losing focus or scroll position</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-500 font-bold">4.</span>
              <span>Compare traditional conditional rendering vs. Activity-based rendering</span>
            </li>
          </ul>
        </div>

        {/* The Problem */}
        <div className="bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
            <span className="text-2xl">⚠️</span>
            The Problem with Traditional Rendering
          </h2>
          <div className="space-y-3 text-gray-600 dark:text-gray-400">
            <p>
              In traditional React, switching between views using conditional rendering (like <code className="text-xs px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">{`{tab === 'a' ? <TabA /> : <TabB />}`}</code>) 
              causes components to <strong>unmount and remount</strong>. This leads to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Lost input focus when switching tabs</li>
              <li>Reset scroll positions</li>
              <li>Loss of internal component state</li>
              <li>Unnecessary re-initialization of expensive operations</li>
            </ul>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
            <span className="text-2xl">✨</span>
            The Activity Component Solution
          </h2>
          <div className="space-y-3 text-gray-600 dark:text-gray-400">
            <p>
              The <code className="text-xs px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">&lt;Activity /&gt;</code> component solves this by keeping components mounted in the background 
              and controlling their visibility with CSS. This means:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>State is preserved</strong> - components stay mounted</li>
              <li><strong>Focus is maintained</strong> - no re-initialization</li>
              <li><strong>Smooth transitions</strong> - no flicker or jump</li>
              <li><strong>Better performance</strong> - no unnecessary remounting</li>
            </ul>
          </div>
        </div>

        {/* Try It Yourself */}
        <div className="bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
            <span className="text-2xl">🧪</span>
            Try It Yourself
          </h2>
          <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
            <li>Click on a search input in either demo and start typing</li>
            <li>Switch to another tab while keeping focus on the input</li>
            <li>Switch back and notice the difference:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li><strong>With Activity:</strong> Focus and text are preserved</li>
                <li><strong>Without Activity:</strong> Focus is lost and you have to click again</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
 
      {/* Live Demo Comparisons */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          🔬 Live Demo: Side-by-Side Comparison
        </h2>
        <div className="space-y-12">
          {/* With Activity */}
          <div className="border-2 border-green-200 dark:border-green-800 rounded-lg p-6 bg-green-50 dark:bg-green-950/20">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-green-600 dark:bg-green-400 rounded-full flex items-center justify-center text-white dark:text-gray-900 font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Demo A: With {`<Activity />`}
                </h3>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded p-3 mb-3">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong className="text-green-700 dark:text-green-300">✨ Expected Behavior:</strong>
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-4 mt-1">
                  <li>Input focus <strong>stays preserved</strong> when switching tabs</li>
                  <li>Text you typed <strong>remains in the input</strong></li>
                  <li>No flicker or remounting effects</li>
                  <li>Smooth, seamless transitions</li>
                </ul>
              </div>
            </div>
            <TabActivity />
          </div>

          {/* Without Activity */}
          <div className="border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6 bg-orange-50 dark:bg-orange-950/20">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-orange-600 dark:bg-orange-400 rounded-full flex items-center justify-center text-white dark:text-gray-900 font-bold">
                  ⚠
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  Demo B: Without {`<Activity />`} (Traditional)
                </h3>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded p-3 mb-3">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong className="text-orange-700 dark:text-orange-300">⚠️ Expected Behavior:</strong>
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-4 mt-1">
                  <li>Input focus is <strong>lost</strong> when switching tabs</li>
                  <li>Text remains but you must <strong>click again</strong> to focus</li>
                  <li>Components unmount and remount (potential flicker)</li>
                  <li>State is reset on each tab switch</li>
                </ul>
              </div>
            </div>
            <TabNoActivity />
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
          <span className="text-2xl">🎓</span>
          Key Takeaways
        </h3>
        <div className="space-y-3 text-gray-600 dark:text-gray-400">
          <div className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">→</span>
            <p><strong>State Preservation:</strong> <code className="text-xs px-1 py-0.5 bg-gray-200 dark:bg-gray-700 rounded">&lt;Activity /&gt;</code> keeps components alive in the background, maintaining their state</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">→</span>
            <p><strong>Better UX:</strong> Users don't lose their place, focus, or typed content when navigating</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">→</span>
            <p><strong>When to Use:</strong> Perfect for tabs, wizards, multi-step forms, or any UI where you want to preserve state between views</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-blue-500 font-bold">→</span>
            <p><strong>Performance:</strong> Avoids expensive re-initialization of components on every view switch</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="p-6 bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
            <span className="text-xl">←</span>
            Review Suspense
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Go back to learn about the use() hook and Suspense
          </p>
          <Button asChild variant="outline" className="w-full">
            <Link href="/suspense">
              Previous: Suspense + use()
            </Link>
          </Button>
        </div>
        <div className="p-6 bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
            <span className="text-xl">🎉</span>
            Tutorial Complete!
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            You've mastered React 19's key features
          </p>
          <Button asChild variant="default" className="w-full bg-green-600 hover:bg-green-700">
            <Link href="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
