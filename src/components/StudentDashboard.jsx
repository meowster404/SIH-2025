import React, { useMemo, useState } from 'react'
import { students } from '../dummydata'

export default function StudentDashboard() {
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return students
    return students.filter(s => s.name.toLowerCase().includes(term) || s.email.toLowerCase().includes(term))
  }, [q])

  const total = students.length
  const active = students.filter(s => s.status === 'active').length
  const avgGpa = (students.reduce((a, b) => a + b.gpa, 0) / total).toFixed(2)

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Student Dashboard</h2>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <div className="text-sm text-gray-500">Total students</div>
          <div className="text-2xl font-bold">{total}</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="text-sm text-gray-500">Active</div>
          <div className="text-2xl font-bold">{active}</div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="text-sm text-gray-500">Average GPA</div>
          <div className="text-2xl font-bold">{avgGpa}</div>
        </div>
      </div>

      <div className="mb-4">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search by name or email"
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="bg-white rounded shadow overflow-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">GPA</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(s => (
              <tr key={s.id} className="border-t">
                <td className="px-4 py-2">{s.name}</td>
                <td className="px-4 py-2">{s.email}</td>
                <td className="px-4 py-2">{s.gpa}</td>
                <td className="px-4 py-2">{s.status}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">No students match</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
