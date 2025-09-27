import React, { useState } from 'react'
import { useData } from '../context/DataContext'
import PageContainer from '../components/PageContainer'

export default function ProjectsPage() {
  const { activeStudent, addProject, projects: globalProjects = [] } = useData()
  const projects = activeStudent?.portfolio?.projects || globalProjects

  const [title, setTitle] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [description, setDescription] = useState('')
  const [repoUrl, setRepoUrl] = useState('')
  const [demoUrl, setDemoUrl] = useState('')

  function onAdd(e) {
    e.preventDefault()
    if (!title) return alert('Please provide a project title')
    if (!repoUrl) return alert('Please provide the GitHub repository link')
    const project = { title, startDate, endDate, description, repoUrl, demoUrl }
    addProject(project)
    setTitle('')
    setStartDate('')
    setEndDate('')
    setDescription('')
    setRepoUrl('')
    setDemoUrl('')
    alert('Project added to portfolio')
  }

  return (
    <PageContainer title="Projects">
      <div className="max-w-4xl space-y-4">
          <form onSubmit={onAdd} className="bg-white p-4 rounded shadow-sm space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Project title" className="col-span-2 px-3 py-2 rounded bg-gray-50" />
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="px-3 py-2 rounded bg-gray-50" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="px-3 py-2 rounded bg-gray-50" />
            <input value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)} placeholder="GitHub repo link (required)" className="px-3 py-2 rounded bg-gray-50 col-span-2" />
          </div>
          <input value={demoUrl} onChange={(e) => setDemoUrl(e.target.value)} placeholder="Demo URL (optional)" className="w-full px-3 py-2 rounded bg-gray-50" />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short description" className="w-full px-3 py-2 rounded bg-gray-50" />
          <div className="text-right">
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Add Project</button>
          </div>
        </form>

        {projects.length === 0 ? (
          <div className="text-gray-500">No projects yet. Add some above.</div>
        ) : (
          <div className="space-y-3">
            {projects.map((p, idx) => (
              <div key={idx} className="bg-white p-4 rounded shadow-sm">
                <div className="font-medium">{p.title || 'Untitled Project'}</div>
                <div className="text-sm text-gray-500">{p.startDate} — {p.endDate || 'Present'}</div>
                <div className="mt-2 text-sm">{p.description}</div>
                {p.url && <a className="text-indigo-600 text-sm mt-2 inline-block" href={p.url} target="_blank" rel="noreferrer">View Repository</a>}
              </div>
            ))}
          </div>
        )}
      </div>
    </PageContainer>
  )
}
