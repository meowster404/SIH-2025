import React, { useState } from 'react'
import { useData } from '../context/DataContext'
import PageContainer from '../components/PageContainer'

export default function MyCoursePage() {
  const data = useData()
  const { activeStudent } = data
  const courses = activeStudent?.courses || []
  const allCourses = data?.courses || []

  // normalize semester string like '4th' or 'Semester 8' to number
  function semesterNumber(sem) {
    if (!sem) return null
    const m = String(sem).match(/(\d+)/)
    return m ? Number(m[1]) : null
  }

  const studentSemNum = semesterNumber(activeStudent?.semester)
  const fallbackCourses = studentSemNum ? allCourses.filter((c) => Number(c.semester) === studentSemNum) : []
  const displayCourses = courses.length > 0 ? courses : fallbackCourses
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <PageContainer title="Current Semester Courses">
      <p className="text-sm text-gray-600 mb-6">Semester: {activeStudent?.semester || 'N/A'}</p>

      <div className="space-y-4">
        {displayCourses.map((c, i) => {
          const detail = allCourses.find((x) => x.code === c.code) || {}
          return (
            <div key={c.code} className="bg-white border rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full text-left p-4 flex items-center justify-between"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-medium text-gray-800">{c.code} - {detail.title || c.name}</div>
                    <div className="text-xs text-gray-500">{detail.instructor || c.instructor}</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Click to view notes</div>
                </div>
                <div className="text-indigo-600 font-medium">{openIndex === i ? 'Hide' : 'Show'}</div>
              </button>

              {openIndex === i && (
                <div className="px-4 pb-4 pt-0 border-t bg-gray-50">
                  <div className="text-sm text-gray-700 p-3 bg-white rounded border">{c.notes}</div>
                  {detail.description && <div className="mt-2 text-sm text-gray-600">{detail.description}</div>}
                </div>
              )}
            </div>
          )
        })}

        {courses.length === 0 && (
          <div className="text-gray-500">No courses found for the current semester.</div>
        )}
      </div>
    </PageContainer>
  )
}
