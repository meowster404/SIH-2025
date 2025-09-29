import React from 'react'
import { useData } from '../context/DataContext'
import { NavLink } from 'react-router-dom'
import {
  FiHome,
  FiBook,
  FiUpload,
  FiFolder,
  FiAward,
  FiCalendar,
  FiClock,
  FiClipboard,
  FiUser,
  FiCreditCard,
  FiBookOpen,
  FiMessageCircle,
  FiFileText,
  FiBell,
  FiSettings,
  FiLogOut,
  FiX,
  FiCode
} from 'react-icons/fi'

const items = [
  { to: '/', label: 'Dashboard', icon: <FiHome /> },
  { section: 'Academics' },
  { to: '/my-course', label: 'My Course', icon: <FiBook /> },
  { to: '/submission', label: 'Submission', icon: <FiUpload /> },
  { to: '/projects', label: 'Projects', icon: <FiFolder /> },
  { to: '/certificates', label: 'Certificates', icon: <FiAward /> },
  { to: '/attendance', label: 'Attendance', icon: <FiCalendar /> },
  { to: '/class-schedule', label: 'Class Schedule', icon: <FiClock /> },
  { to: '/exam-schedule', label: 'Exam Schedule', icon: <FiClipboard /> },
  { to: '/result', label: 'Result', icon: <FiFileText /> },
  { section: 'Services' },
  { to: '/my-profile', label: 'My Profile', icon: <FiUser /> },
  { to: '/fee-payment', label: 'Fee Payment', icon: <FiCreditCard /> },
  { to: '/library', label: 'Library', icon: <FiBookOpen /> },
  { to: '/ask-portal', label: 'Ask Portal', icon: <FiMessageCircle /> },
  { to: '/resume', label: 'Resume', icon: <FiFileText /> },
  { to: '/notification', label: 'Notification', icon: <FiBell /> },
  { to: '/settings', label: 'Settings', icon: <FiSettings /> },
  { to: '/logout', label: 'Logout', icon: <FiLogOut /> },
]

export default function Sidebar({ isSidebarOpen, setSidebarOpen }) {
  return (
  <aside className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 bg-white border-r sm:sticky sm:top-0 flex flex-col justify-between px-4 py-6 overflow-auto no-scrollbar`}>
      <div>
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <FiCode className="text-2xl" />
            <span className="text-lg font-bold">Student Central</span>
          </div>
          <button className="sm:hidden" onClick={() => setSidebarOpen(false)}>
            <FiX />
          </button>
        </div>

        <nav className="space-y-1">
          {items.map((it, idx) =>
            it.section ? (
              <div key={idx} className="mt-3 text-xs text-gray-400 px-3">{it.section}</div>
            ) : (
              <NavLink
                key={idx}
                to={it.to}
                end={it.to === '/'} 
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                    isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'
                  }`
                }
              >
                {it.icon}
                <span>{it.label}</span>
              </NavLink>
            )
          )}
        </nav>
      </div>

      <div className="text-center text-xs text-gray-500">
        <p>&copy; 2025 Student Central</p>
      </div>
    </aside>
  )
}
