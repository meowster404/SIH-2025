import React from 'react'

export default function AnnouncementList({ items = [] }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="text-lg font-semibold mb-4">Announcement</div>
      <div className="space-y-3">
        {items.map((a, i) => (
          <div key={a.id} className="flex items-start gap-4 p-3 rounded-lg hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-md flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-700 text-white font-bold">
              {a.title?.charAt(0) || '?'}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-gray-800">{a.title}</div>
                <div className="text-sm text-indigo-600">{formatDate(a.date)}</div>
              </div>
              <div className="text-sm text-gray-500 mt-1">{a.course ? `${a.course} • ` : ''}{a.description || ''}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function formatDate(d) {
  if (!d) return 'Coming soon'
  try {
    const dt = typeof d === 'string' ? parseISO(d) : d
    if (!isValid(dt)) return 'Coming soon'
    return format(dt, 'dd MMM, yyyy')
  } catch (e) {
    return 'Coming soon'
  }
}
