import React from 'react'
import { useData } from '../context/DataContext'
import PageContainer from '../components/PageContainer'

export default function ResumePage() {
  const { activeStudent } = useData()
  const { courses = [], grades = [] } = useData()

  function download() {
    const content = `Name: ${activeStudent?.name}\nEmail: ${activeStudent?.email}\nAdmission: ${activeStudent?.admission}`
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'resume.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <PageContainer title="Resume">
      <div className="max-w-xl">
        <div className="bg-white rounded p-4 shadow-sm">
          <div className="font-medium">{activeStudent?.name}</div>
          <div className="text-sm text-gray-500">{activeStudent?.email}</div>

          <div className="mt-3">
            <div className="text-sm font-semibold mb-1">Courses</div>
            <div className="text-sm text-gray-600">{(activeStudent?.courses || []).map((c) => c.code).join(', ')}</div>
          </div>

          <div className="mt-3">
            <div className="text-sm font-semibold mb-1">Grades</div>
            <div className="text-sm text-gray-600">{grades.map((g) => `${g.course}:${g.grade}`).join(', ')}</div>
          </div>

          <div className="mt-4 text-right">
            <button onClick={download} className="px-4 py-2 bg-indigo-600 text-white rounded">Download Resume</button>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
