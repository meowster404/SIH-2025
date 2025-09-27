import React, { useState, useEffect } from 'react'
import { useData } from '../context/DataContext'
import { FiTrash2, FiCode, FiPlus, FiSave } from 'react-icons/fi'

function ProjectRow({ project, index, onChange, onRemove }) {
  return (
    <div className="bg-gray-50 rounded-md p-4 mb-4 border border-gray-100 shadow-sm">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="text-sm font-medium flex items-center gap-2 text-gray-700">
            <FiCode className="text-gray-500" />
            <span>Project</span>
          </div>
          <div className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">In Progress</div>
        </div>

        <button onClick={() => onRemove(index)} className="text-gray-400 hover:text-red-500">
          <FiTrash2 />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="md:col-span-2">
          <label className="text-sm text-gray-600">Project Title <span className="text-red-500">*</span></label>
          <input placeholder="Enter project title" className="w-full mt-1 px-3 py-2 rounded bg-gray-100 border border-gray-200" value={project.title} onChange={(e) => onChange(index, { ...project, title: e.target.value })} />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm text-gray-600">Project Description</label>
          <textarea placeholder="Describe your project, technologies used, and key achievements" className="w-full mt-1 px-3 py-2 rounded bg-gray-100 border border-gray-200" rows={4} value={project.description} onChange={(e) => onChange(index, { ...project, description: e.target.value })} />
        </div>

        <div>
          <label className="text-sm text-gray-600">Start Date <span className="text-red-500">*</span></label>
          <input type="date" placeholder="dd/mm/yyyy" className="w-full mt-1 px-3 py-2 rounded bg-gray-100 border border-gray-200" value={project.startDate || ''} onChange={(e) => onChange(index, { ...project, startDate: e.target.value })} />
        </div>
        <div>
          <label className="text-sm text-gray-600">End Date</label>
          <input type="date" placeholder="dd/mm/yyyy" className="w-full mt-1 px-3 py-2 rounded bg-gray-100 border border-gray-200" value={project.endDate || ''} onChange={(e) => onChange(index, { ...project, endDate: e.target.value })} />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm text-gray-600">Project URL</label>
          <input placeholder="https://github.com/username/project" className="w-full mt-1 px-3 py-2 rounded bg-gray-100 border border-gray-200" value={project.url || ''} onChange={(e) => onChange(index, { ...project, url: e.target.value })} />
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
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">Portfolio Management</h2>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="mb-4">
            <div className="flex gap-3 text-sm">
              <button className="px-3 py-2 rounded bg-gray-100 text-gray-600">Certifications</button>
              <button className="px-3 py-2 rounded bg-indigo-50 text-indigo-700 font-medium">Projects</button>
              <button className="px-3 py-2 rounded bg-gray-100 text-gray-600">Achievements</button>
            </div>
          </div>

          <div>
            {projects.length === 0 && (
              <div className="text-sm text-gray-500 mb-4">No projects yet. Click Add Project to create one.</div>
            )}

            {projects.map((proj, i) => (
              <ProjectRow key={i} project={proj} index={i} onChange={updateProject} onRemove={removeProject} />
            ))}

            <div className="mt-3">
              <button onClick={addProject} className="w-full border-2 border-indigo-600 rounded-lg py-3 text-indigo-700 flex items-center justify-center gap-2 hover:bg-indigo-50">
                <FiPlus />
                <span className="font-medium">Add Project</span>
              </button>
            </div>

            <div className="mt-6 flex justify-end">
              <button onClick={savePortfolio} className="bg-indigo-600 text-white px-5 py-2 rounded-lg inline-flex items-center gap-2">
                <FiSave />
                Save Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
