import React, { createContext, useContext, useState, useEffect } from 'react'
import initialData from '../data'

const DataContext = createContext(null)

export function DataProvider({ children }) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem('app_data')
      return raw ? JSON.parse(raw) : initialData
    } catch (e) {
      return initialData
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('app_data', JSON.stringify(state))
    } catch (e) {
      // ignore
    }
  }, [state])

  function updateStudent(patch) {
    setState((prev) => {
      const students = prev.students.map((s) => (s.id === prev.activeStudentId ? { ...s, ...patch } : s))
      return { ...prev, students }
    })
  }

  function addCertificate(cert) {
    setState((prev) => {
      const certificates = [...(prev.certificates || []), cert]
      const students = (prev.students || []).map((s) => {
        if (s.id === prev.activeStudentId) {
          const sCerts = [...((s.certificates && s.certificates) || []), cert]
          return { ...s, certificates: sCerts }
        }
        return s
      })

      return { ...prev, certificates, students }
    })
  }

  function addProject(project) {
    setState((prev) => {
      const students = prev.students.map((s) => {
        if (s.id === prev.activeStudentId) {
          const portfolio = { ...(s.portfolio || {}), projects: [...((s.portfolio && s.portfolio.projects) || []), project] }
          return { ...s, portfolio }
        }
        return s
      })
      return { ...prev, students }
    })
  }

  function submitAssignment(id, submission) {
    setState((prev) => ({
      ...prev,
      assignments: (prev.assignments || []).map((a) => (a.id === id ? { ...a, submitted: true, submission } : a)),
    }))
  }

  const activeStudent = state.students.find((s) => s.id === state.activeStudentId)
  const value = { ...state, activeStudent, updateStudent, addCertificate, addProject, submitAssignment }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useData() {
  return useContext(DataContext)
}

export default DataContext
