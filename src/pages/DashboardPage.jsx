import React from 'react'
import PageContainer from '../components/PageContainer'
import { useData } from '../context/DataContext'

export default function DashboardPage() {
  const { activeStudent, students = [], assignments = [], projects = [] } = useData()

  const totalStudents = students.length
  const pendingAssignments = assignments.filter((a) => !a.submitted).length
  const studentProjects = activeStudent?.portfolio?.projects?.length || 0
  const attendance = activeStudent?.stats?.attendance || '--'

  return (
    <PageContainer title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="text-sm text-gray-500">Active Student</div>
          <div className="text-xl font-semibold">{activeStudent?.name || '—'}</div>
        </div>

        <div className="bg-white p-4 rounded shadow-sm">
          <div className="text-sm text-gray-500">Students</div>
          <div className="text-xl font-semibold">{totalStudents}</div>
        </div>

        <div className="bg-white p-4 rounded shadow-sm">
          <div className="text-sm text-gray-500">Pending Assignments</div>
          <div className="text-xl font-semibold">{pendingAssignments}</div>
        </div>

        <div className="bg-white p-4 rounded shadow-sm">
          <div className="text-sm text-gray-500">Your Projects</div>
          <div className="text-xl font-semibold">{studentProjects}</div>
          <div className="text-sm text-gray-500 mt-1">Attendance: {attendance}%</div>
        </div>
      </div>
    </PageContainer>
  )
}
