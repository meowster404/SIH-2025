import React from 'react'
import { useData } from '../context/DataContext'
import PageContainer from '../components/PageContainer'

export default function SubmissionPage() {
  const { assignments = [], submitAssignment } = useData()

  const practicals = assignments.filter((a) => a.type === 'practical')
  const homework = assignments.filter((a) => a.type !== 'practical')

  function handleSubmit(id, e) {
    e.preventDefault()
    const fileInput = e.target.elements.fileInput;
    const file = fileInput.files[0];
    if (!file) {
      alert('Please select a file to upload');
      return;
    }
    submitAssignment(id, { fileName: file.name, submittedAt: new Date().toISOString() })
    alert('Submission recorded for ' + file.name)
    e.target.reset();
  }

  function renderList(list) {
    return list.map((a) => (
      <div key={a.id} className="bg-white px-6 py-4 rounded shadow-sm flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="mb-4 md:mb-0">
          <div className="font-medium">{a.title}</div>
          <div className="text-sm text-gray-500">{a.course} • Due {a.due}</div>
        </div>
        <div className="flex items-center gap-4">
          {a.submitted ? (
            <span className={`px-4 py-2 rounded-full text-sm bg-green-100 text-green-800`}>Submitted</span>
          ) : (
            <form onSubmit={(e) => handleSubmit(a.id, e)} className="flex flex-col gap-4 w-full">
              <div className="flex items-center gap-4">
                <span className={`px-4 py-2 rounded-full text-sm bg-yellow-100 text-yellow-800`}>Pending</span>
                <input type="file" name="fileInput" className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 w-full overflow-hidden" />
              </div>
              <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Upload</button>
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
          <div className="space-y-4">{renderList(practicals)}</div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Assignments</h4>
          <div className="space-y-4">{renderList(homework)}</div>
        </div>
      </div>
    </PageContainer>
  )
}