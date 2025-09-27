import React from 'react'
import PageContainer from '../components/PageContainer'

export default function WorkInProgressPage({ feature }) {
  return (
    <PageContainer title="Work in progress">
      <div>
        <p className="text-gray-600">The {feature || 'requested'} page is still under development. We’re working on it — check back soon.</p>
        <div className="mt-6">
          <button onClick={() => window.history.back()} className="px-4 py-2 bg-indigo-600 text-white rounded">Go back</button>
        </div>
      </div>
    </PageContainer>
  )
}
