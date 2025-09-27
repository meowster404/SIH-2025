import React from 'react'

export default function FacultyLeaveCard({ items = [] }) {
  if (!items || items.length === 0) {
    return (
      <div className="bg-white rounded-xl p-4 shadow-sm w-full">
        <div className="text-lg font-semibold mb-2">Faculty on Leave</div>
        <div className="text-sm text-gray-500">No faculty currently on leave</div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm w-full">
      <div className="text-lg font-semibold mb-3">Faculty on Leave</div>
      <div className="space-y-3">
        {items.map((f) => (
          <div key={f.id} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-indigo-600 text-white flex items-center justify-center font-semibold">{f.name.charAt(0)}</div>
            <div>
              <div className="font-medium">{f.name}</div>
              <div className="text-xs text-gray-400">{f.department} • {f.reason || 'On leave'}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
