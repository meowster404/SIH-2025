import React from 'react'

export default function WorkInProgressPage({ feature }) {
  return (
    <div className="p-8">
      <div className="max-w-3xl bg-white rounded-2xl p-8 shadow-md">
        <h2 className="text-2xl font-bold mb-2">Work in progress</h2>
        <p className="text-gray-600">The {feature || 'requested'} page is still under development. We’re working on it — check back soon.</p>
        <div className="mt-6">
          <button onClick={() => window.history.back()} className="px-4 py-2 bg-indigo-600 text-white rounded">Go back</button>
        </div>
      </div>
    </div>
  )
}
