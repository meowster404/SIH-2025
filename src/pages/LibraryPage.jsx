import React, { useState } from 'react'
import { useData } from '../context/DataContext'
import PageContainer from '../components/PageContainer'

export default function LibraryPage() {
  const { library, toggleBookAvailability } = useData()
  const [query, setQuery] = useState('')

  const results = (library || []).filter((b) => b.title.toLowerCase().includes(query.toLowerCase()) || b.author.toLowerCase().includes(query.toLowerCase()))

  return (
    <PageContainer title="Library">
      <div className="max-w-3xl">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by title or author" className="w-full p-2 border rounded mb-4" />

        <div className="space-y-3">
          {results.map((b) => (
            <div key={b.id} className="bg-white p-3 rounded shadow-sm flex justify-between items-center">
              <div>
                <div className="font-medium">{b.title}</div>
                <div className="text-sm text-gray-500">{b.author}</div>
              </div>
              <div>
                <button
                  onClick={() => toggleBookAvailability(b.id)}
                  className={`px-3 py-1 rounded ${
                    b.available ? 'bg-indigo-600 text-white' : 'bg-green-600 text-white'
                  }`}
                >
                  {b.available ? 'Borrow' : 'Return'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  )
}
