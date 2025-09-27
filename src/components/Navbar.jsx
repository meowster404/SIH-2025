import React from 'react'

export default function Navbar({ view, setView }) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Student Central</h1>
        <nav className="space-x-2">
          <button
            onClick={() => setView('student')}
            className={`px-3 py-1 rounded ${view === 'student' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Student Dashboard
          </button>
          <button
            onClick={() => setView('faculty')}
            className={`px-3 py-1 rounded ${view === 'faculty' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Faculty Dashboard
          </button>
          <button
            onClick={() => setView('institute')}
            className={`px-3 py-1 rounded ${view === 'institute' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Institute Dashboard
          </button>
        </nav>
      </div>
    </header>
  )
}
