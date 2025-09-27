import React, { useState } from 'react'
import { useData } from '../context/DataContext'
import PageContainer from '../components/PageContainer'

export default function SubmissionPage() {
  const { assignments = [], submitAssignment } = useData()
  const [fileName, setFileName] = useState('')

  const practicals = assignments.filter((a) => a.type === 'practical')
  const homework = assignments.filter((a) => a.type !== 'practical')

  function handleSubmit(id, e) {
    e.preventDefault()
    if (!fileName) return alert('Please provide a file name (mock upload)')
    submitAssignment(id, { fileName, submittedAt: new Date().toISOString() })
    setFileName('')
    alert('Submission recorded')
  }

  function renderList(list) {
    return list.map((a) => (
      <div key={a.id} className="bg-white p-4 rounded shadow-sm flex justify-between items-center">
        <div>
          <div className="font-medium">{a.title}</div>
          <div className="text-sm text-gray-500">{a.course} • Due {a.due}</div>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-sm ${a.submitted ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{a.submitted ? 'Submitted' : 'Pending'}</span>
          {!a.submitted && (
            <form onSubmit={(e) => handleSubmit(a.id, e)} className="flex items-center gap-2">
              <input value={fileName} onChange={(e) => setFileName(e.target.value)} placeholder="file name (mock)" className="px-2 py-1 rounded bg-gray-50" />
              <button type="submit" className="px-3 py-1 bg-indigo-600 text-white rounded">Upload</button>
            </form>
          )}
        </div>
      </div>
    ))
  }

  return (
    <PageContainer title="Submissions">
      <div className="max-w-3xl space-y-6">
        <div>
          <h4 className="font-semibold mb-2">Practical</h4>
          <div className="space-y-3">{renderList(practicals)}</div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Assignments</h4>
          <div className="space-y-3">{renderList(homework)}</div>
        </div>
      </div>
    </PageContainer>
  )
}
