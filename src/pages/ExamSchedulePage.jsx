import React from 'react'
import { useData } from '../context/DataContext'
import PageContainer from '../components/PageContainer'

export default function ExamSchedulePage() {
  const { examSchedule = [] } = useData()

  return (
    <PageContainer title="Exam Schedule">
      {examSchedule.length === 0 ? (
        <div className="text-gray-500">No exam schedule available.</div>
      ) : (
        <div className="space-y-2">
          {examSchedule.map((e, idx) => (
            <div key={`${e.course}-${e.date}-${idx}`} className="bg-white p-3 rounded shadow-sm flex justify-between items-center">
              <div className="font-medium">{e.course}</div>
              <div className="text-sm text-gray-500">{e.date} • {e.venue}</div>
            </div>
          ))}
        </div>
      )}
    </PageContainer>
  )
}
