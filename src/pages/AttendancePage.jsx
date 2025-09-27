import React from 'react'
import PageContainer from '../components/PageContainer'
import { useData } from '../context/DataContext'

function Bar({ value }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className="h-2 rounded-full bg-indigo-600" style={{ width: `${value}%` }} />
    </div>
  )
}

export default function AttendancePage() {
  const { activeStudent } = useData()
  const list = activeStudent?.attendanceByCourse || []

  return (
    <PageContainer title="Attendance">
      <div className="mb-4">
        <div className="text-gray-700">Overall attendance: <span className="font-medium">{activeStudent?.stats?.attendance}%</span></div>
        <div className="mt-1 text-sm text-gray-500">Per-semester: {activeStudent?.stats?.perSemester?.join(', ')}</div>
      </div>

      <div className="space-y-4 max-w-3xl">
        {list.map((c) => (
          <div key={c.code} className="bg-white p-4 rounded shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">{c.code} — {c.name}</div>
                <div className="text-sm text-gray-500">Overall: {c.overall}%</div>
              </div>
              <div className="text-sm font-medium">{c.overall}%</div>
            </div>

            <div className="mt-3 space-y-3">
              <div>
                <div className="flex justify-between text-xs text-gray-600 mb-1"><div>Lectures</div><div>{c.breakdown.lectures}%</div></div>
                <Bar value={c.breakdown.lectures} />
              </div>
              <div>
                <div className="flex justify-between text-xs text-gray-600 mb-1"><div>Practicals</div><div>{c.breakdown.practicals}%</div></div>
                <Bar value={c.breakdown.practicals} />
              </div>
              <div>
                <div className="flex justify-between text-xs text-gray-600 mb-1"><div>Extra-curricular</div><div>{c.breakdown.extracurricular}%</div></div>
                <Bar value={c.breakdown.extracurricular} />
              </div>
            </div>
          </div>
        ))}

        {list.length === 0 && (
          <div className="text-gray-500">No per-subject attendance data available.</div>
        )}
      </div>
    </PageContainer>
  )
}
