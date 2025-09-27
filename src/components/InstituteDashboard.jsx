import React from 'react'
import { institutes, students, faculties } from '../dummydata'

export default function InstituteDashboard() {
  const withCounts = institutes.map(i => {
    return {
      ...i,
      studentCount: students.filter(s => s.instituteId === i.id).length,
      facultyCount: faculties.filter(f => f.instituteId === i.id).length,
    }
  })

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Institute Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {withCounts.map(inst => (
          <div key={inst.id} className="bg-white p-4 rounded shadow">
            <div className="text-lg font-semibold">{inst.name}</div>
            <div className="text-sm text-gray-500">{inst.city}</div>
            <div className="mt-3">
              <div className="text-sm text-gray-600">Students: <span className="font-bold">{inst.studentCount}</span></div>
              <div className="text-sm text-gray-600">Faculties: <span className="font-bold">{inst.facultyCount}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
