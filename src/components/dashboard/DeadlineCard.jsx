import React from 'react'

export default function DeadlineCard({ tasks = [], onViewAll }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm w-full">
      <div className="text-lg font-semibold mb-3">Deadline</div>
      <div className="space-y-3">
        {tasks.map((t, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-1 h-8 bg-indigo-600 rounded" />
            <div>
              <div className="font-medium">{t.title}</div>
              <div className="text-xs text-gray-400">{t.course} • {t.due}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3">
        <button
          type="button"
          onClick={onViewAll}
          className="text-sm text-indigo-600 font-medium hover:underline"
        >
          View all Tasks →
        </button>
      </div>
    </div>
  )
}
