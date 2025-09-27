import React, { useState } from 'react'
import { useData } from '../context/DataContext'
import PageContainer from '../components/PageContainer'

export default function CertificatesPage() {
  const { certificates = [], addCertificate, activeStudent } = useData()
  const studentCertificates = activeStudent?.certificates || []
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('course')
  const [file, setFile] = useState(null)

  async function readFileAsBase64(file) {
    return await new Promise((res, rej) => {
      const reader = new FileReader()
      reader.onload = () => res(reader.result)
      reader.onerror = rej
      reader.readAsDataURL(file)
    })
  }

  async function onUpload(e) {
    e.preventDefault()
    if (!title) return alert('Please enter a title')
    if (!file) return alert('Please choose a certificate file to upload')
    const id = Date.now()
    const fileData = await readFileAsBase64(file)
    addCertificate({ id, title, date: date || new Date().toISOString().slice(0, 10), category, fileName: file.name, fileData })
    setTitle('')
    setDate('')
    setFile(null)
    alert('Certificate uploaded')
    e.target.reset()
  }

  const studentCertIds = new Set(studentCertificates.map(c => c.id));
  const availableCertificates = certificates.filter(c => !studentCertIds.has(c.id));

  return (
    <PageContainer title="Certificates">
      <div className="max-w-3xl space-y-4">
        <form onSubmit={onUpload} className="bg-white p-4 rounded shadow-sm space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Certificate title" className="col-span-2 px-3 py-2 rounded bg-gray-50" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="px-3 py-2 rounded bg-gray-50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-3 py-2 rounded bg-gray-50">
              <option value="course">Course</option>
              <option value="extracurricular">Extra Curricular</option>
              <option value="competition">Competition</option>
            </select>
            <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="col-span-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
          </div>
          <div className="text-right">
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Upload Certificate</button>
          </div>
        </form>

        <div className="space-y-3">
          {studentCertificates.length > 0 && (
            <div>
              <div className="text-sm text-gray-500 mb-2">Your Certificates</div>
              {studentCertificates.map((c) => (
                <div key={c.id} className="bg-white p-4 rounded shadow-sm flex justify-between items-center mb-2">
                  <div>
                    <div className="font-medium">{c.title}</div>
                    <div className="text-sm text-gray-500">Issued on {c.date} • {c.category}</div>
                  </div>
                  <div>
                    {c.fileData ? (
                          <a href={c.fileData} download={c.fileName} className="px-3 py-1 bg-indigo-600 text-white rounded">Download</a>
                        ) : (
                          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded">Download</button>
                        )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {availableCertificates.length > 0 && (
            <div>
              <div className="text-sm text-gray-500 mb-2">Available Certificates</div>
              {availableCertificates.map((c) => (
                <div key={c.id} className="bg-white p-4 rounded shadow-sm flex justify-between items-center">
                  <div>
                    <div className="font-medium">{c.title}</div>
                    <div className="text-sm text-gray-500">Issued on {c.date} • {c.category}</div>
                  </div>
                  <div>
                    {c.fileData ? (
                      <a href={c.fileData} download={c.fileName} className="px-3 py-1 bg-indigo-600 text-white rounded">Download</a>
                    ) : (
                      <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded">Download</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  )
}
