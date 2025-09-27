import React, { useState } from 'react'
import { faculties } from '../dummydata'

export default function FacultyDashboard() {
  const [q, setQ] = useState('')
  const filtered = faculties.filter(f => f.name.toLowerCase().includes(q.toLowerCase()) || f.department.toLowerCase().includes(q.toLowerCase()))

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Faculty Dashboard</h2>

      <div className="mb-4">
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Search by name or department"
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="bg-white rounded shadow overflow-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Department</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(f => (
              <tr key={f.id} className="border-t">
                <td className="px-4 py-2">{f.name}</td>
                <td className="px-4 py-2">{f.email}</td>
                <td className="px-4 py-2">{f.department}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="3" className="p-4 text-center text-gray-500">No faculty match</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
