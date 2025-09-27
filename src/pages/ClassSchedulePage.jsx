import React from 'react'
import { useData } from '../context/DataContext'
import PageContainer from '../components/PageContainer'

export default function ClassSchedulePage() {
  const { classSchedule = [] } = useData()

  return (
    <PageContainer title="Class Schedule">
      {classSchedule.length === 0 ? (
        <div className="text-gray-500">No class schedule available.</div>
      ) : (
        <div className="space-y-2 max-w-md">
          {classSchedule.map((s, idx) => (
            <div key={`${s.day}-${s.time}-${idx}`} className="bg-white p-3 rounded shadow-sm flex justify-between">
              <div>{s.day} • {s.course}</div>
              <div className="text-gray-500">{s.time}</div>
            </div>
          ))}
        </div>
      )}
    </PageContainer>
  )
}
