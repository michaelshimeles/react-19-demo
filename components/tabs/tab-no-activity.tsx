'use client';
import { useState } from "react";

export default function TabNoActivity() {

    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">No Activity</h1>
            <div className="w-full">
                <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
                    <button
                        className={`px-6 py-3 font-medium text-sm transition-all duration-200 border-b-2 ${
                            activeTab === 'tab1' 
                                ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400' 
                                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                        onClick={() => setActiveTab('tab1')}
                    >
                        All
                    </button>
                    <button
                        className={`px-6 py-3 font-medium text-sm transition-all duration-200 border-b-2 ${
                            activeTab === 'tab2' 
                                ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400' 
                                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                        onClick={() => setActiveTab('tab2')}
                    >
                        Active
                    </button>
                </div>
                <div className="tab-content">
                    {activeTab === 'tab1' && (
                        <div className="tab-content-item animate-in fade-in duration-200">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">All Posts</h2>
                            <input 
                                className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                                name="search"
                                type="text" 
                                placeholder="Search posts" 
                            />
                        </div>
                    )}
                    {activeTab === 'tab2' && (
                        <div className="tab-content-item animate-in fade-in duration-200">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Active Posts</h2>
                            <input 
                                className='w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                                name="search"
                                type="text" 
                                placeholder="Search posts" 
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}