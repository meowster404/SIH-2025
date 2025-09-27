import React from 'react'
import { useData } from '../context/DataContext'
import PageContainer from '../components/PageContainer'

export default function ResultPage() {
  const { grades = [] } = useData()

  return (
    <PageContainer title="Results">
      {grades.length === 0 ? (
        <div className="text-gray-500">No grades available yet.</div>
      ) : (
        <div className="max-w-md space-y-2">
          {grades.map((g, i) => (
            <div key={`${g.course}-${i}`} className="bg-white p-3 rounded shadow-sm flex justify-between">
              <div>{g.course}</div>
              <div className="font-medium">{g.grade}</div>
            </div>
          ))}
        </div>
      )}
    </PageContainer>
  )
}
