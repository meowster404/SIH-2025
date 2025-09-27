import React, { useState, useEffect } from 'react'
import { useData } from '../context/DataContext'

function ProjectRow({ project, index, onChange, onRemove }) {
  return (
    <div className="bg-gray-50 rounded-md p-4 mb-4 border">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="text-sm font-medium">Project</div>
          <div className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">In Progress</div>
        </div>
        <button onClick={() => onRemove(index)} className="text-sm text-gray-500">🗑️</button>
      </div>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="md:col-span-2">
          <label className="text-sm text-gray-600">Project Title *</label>
          <input className="w-full mt-1 px-3 py-2 rounded bg-white border" value={project.title} onChange={(e) => onChange(index, { ...project, title: e.target.value })} />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm text-gray-600">Project Description</label>
          <textarea className="w-full mt-1 px-3 py-2 rounded bg-white border" rows={4} value={project.description} onChange={(e) => onChange(index, { ...project, description: e.target.value })} />
        </div>

        <div>
          <label className="text-sm text-gray-600">Start Date *</label>
          <input type="date" className="w-full mt-1 px-3 py-2 rounded bg-white border" value={project.startDate || ''} onChange={(e) => onChange(index, { ...project, startDate: e.target.value })} />
        </div>
        <div>
          <label className="text-sm text-gray-600">End Date</label>
          <input type="date" className="w-full mt-1 px-3 py-2 rounded bg-white border" value={project.endDate || ''} onChange={(e) => onChange(index, { ...project, endDate: e.target.value })} />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm text-gray-600">Project URL</label>
          <input className="w-full mt-1 px-3 py-2 rounded bg-white border" placeholder="https://github.com/username/project" value={project.url || ''} onChange={(e) => onChange(index, { ...project, url: e.target.value })} />
        </div>
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  const data = useData()
  const student = data?.activeStudent || {}
  const updateStudent = data?.updateStudent

  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(student.portfolio?.projects ? [...student.portfolio.projects] : [])
  }, [student])

  function addProject() {
    setProjects((p) => [...p, { title: '', description: '', startDate: '', endDate: '', url: '' }])
  }

  function updateProject(i, next) {
    setProjects((p) => p.map((it, idx) => (idx === i ? next : it)))
  }

  function removeProject(i) {
    setProjects((p) => p.filter((_, idx) => idx !== i))
  }

  function savePortfolio() {
    updateStudent?.({ portfolio: { projects } })
    alert('Portfolio saved')
  }

  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Portfolio Management</h2>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="mb-4">
            <div className="flex gap-3 text-sm text-gray-500">
              <div className="px-3 py-2 bg-gray-100 rounded">Certifications</div>
              <div className="px-3 py-2 bg-indigo-50 rounded text-indigo-700 font-medium">Projects</div>
              <div className="px-3 py-2 bg-gray-100 rounded">Achievements</div>
            </div>
          </div>

          <div>
            {projects.length === 0 && (
              <div className="text-sm text-gray-500 mb-4">No projects yet. Click Add Project to create one.</div>
            )}

            {projects.map((proj, i) => (
              <ProjectRow key={i} project={proj} index={i} onChange={updateProject} onRemove={removeProject} />
            ))}

            <div className="border rounded-md mt-3">
              <button onClick={addProject} className="w-full text-left px-4 py-3 text-indigo-700">+ Add Project</button>
            </div>

            <div className="mt-6 text-right">
              <button onClick={savePortfolio} className="bg-indigo-600 text-white px-4 py-2 rounded">Save Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
