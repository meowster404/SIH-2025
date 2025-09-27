import React from 'react'

export default function PageContainer({ title, children }) {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
        <div className="bg-white rounded-2xl p-6 shadow-sm">{children}</div>
      </div>
    </div>
  )
}
