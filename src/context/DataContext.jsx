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

  const activeStudent = state.students.find((s) => s.id === state.activeStudentId)
  const value = { ...state, activeStudent, updateStudent }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useData() {
  return useContext(DataContext)
}

export default DataContext
