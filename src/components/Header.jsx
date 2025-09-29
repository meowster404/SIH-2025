import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useData } from '../context/DataContext'
import { FiMenu } from 'react-icons/fi'

const routeTitles = {
  '/': 'Dashboard',
  '/dashboard': 'Dashboard',
  '/my-course': 'My Course',
  '/submission': 'Submission',
  '/projects': 'Projects',
  '/certificates': 'Certificates',
  '/attendance': 'Attendance',
  '/class-schedule': 'Class Schedule',
  '/exam-schedule': 'Exam Schedule',
  '/result': 'Result',
  '/my-profile': 'My Profile',
  '/fee-payment': 'Fee Payment',
  '/library': 'Library',
  '/ask-portal': 'Ask Portal',
  '/resume': 'Resume',
  '/notification': 'Notification',
  '/settings': 'Settings',
  '/logout': 'Logout',
}

export default function Header({ setSidebarOpen }) {
  const data = useData()
  const student = data?.activeStudent
  const location = useLocation()

  const pathname = location.pathname || '/'
  const title = routeTitles[pathname] || routeTitles['/' + (pathname.split('/')[1] || '')] || (pathname === '/' ? 'Dashboard' : pathname.replace('/', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))

  return (
    <header className="bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="sm:hidden" onClick={() => setSidebarOpen(true)}>
            <FiMenu />
          </button>
          <div className="text-xl font-semibold">{title}</div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/my-profile" className="text-right mr-3">
            <div className="text-sm font-semibold">{student ? student.name : '{Student Name}'}</div>
            <div className="text-xs text-gray-400">{student ? student.admission : 'Admission No./ID No.'}</div>
          </Link>
          <Link to="/my-profile" className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center"> 
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.817.636 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </Link>
        </div>
      </div>
    </header>
  )
}
