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

export default function Sidebar() {
  return (
  <aside className="w-64 bg-white border-r h-screen sticky top-0 flex flex-col justify-between px-4 py-6 overflow-auto no-scrollbar">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">C</div>
          <div>
            <div className="text-sm font-semibold">{useData()?.site?.name || '{Name} College'}</div>
            <div className="text-xs text-gray-400">{useData()?.site?.subtitle || 'Student Portal'}</div>
          </div>
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
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                    isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'
                  }`
                }
              >
                <div className="w-5 h-5 text-lg">{it.icon}</div>
                <div>{it.label}</div>
              </NavLink>
            )
          )}
        </nav>
      </div>

      <div className="mt-6">
        <div className="w-full h-24 rounded-xl bg-gray-100" />
      </div>
    </aside>
  )
}
