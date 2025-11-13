import TabActivity from "@/components/tabs/tab-activity";
import TabNoActivity from "@/components/tabs/tab-no-activity";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TabsPage() {
  return (
    <div className="flex flex-col gap-8 p-8 md:p-16 lg:p-24 max-w-6xl mx-auto">
      <div className="flex items-center gap-4">
        <Button asChild variant="outline">
          <Link href="/">
            ← Back to Home
          </Link>
        </Button>
      </div>
      
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {`<Activity />`} Component Demo
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Compare how the new React 19 <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">&lt;Activity /&gt;</code> component 
          improves tab switching behavior versus traditional conditional rendering.
        </p>
      </div>

      <div className="space-y-12">
        {/* With Activity */}
        <div className="border-2 border-green-200 dark:border-green-800 rounded-lg p-6 bg-green-50 dark:bg-green-950/20">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
              <span className="text-green-600 dark:text-green-400">✓</span>
              With {`<Activity />`}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Uses the <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">&lt;Activity /&gt;</code> component. 
              Notice how input focus is <strong>preserved</strong> when switching tabs, and there's no unmounting/remounting flicker.
            </p>
          </div>
          <TabActivity />
        </div>

        {/* Without Activity */}
        <div className="border-2 border-orange-200 dark:border-orange-800 rounded-lg p-6 bg-orange-50 dark:bg-orange-950/20">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
              <span className="text-orange-600 dark:text-orange-400">⚠</span>
              Without {`<Activity />`} (Traditional)
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Uses traditional conditional rendering. Input focus is <strong>lost</strong> when switching tabs because 
              the component is completely unmounted and remounted.
            </p>
          </div>
          <TabNoActivity />
        </div>
      </div>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          💡 Try This
        </h3>
        <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
          <li>Click on a search input and start typing</li>
          <li>Switch between tabs while keeping focus on the input</li>
          <li>Notice the difference in behavior between the two implementations</li>
        </ol>
      </div>
    </div>
  );
}
