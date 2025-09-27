import React, { useState } from 'react'
import { useData } from '../context/DataContext'
import PageContainer from '../components/PageContainer'

export default function NotificationPage() {
  const { announcements } = useData()
  const [read, setRead] = useState({})

  return (
    <PageContainer title="Notifications">
      <div className="space-y-3 max-w-3xl">
        {announcements.map((a) => (
          <div key={a.id} className={`p-4 rounded shadow-sm bg-white flex justify-between ${read[a.id] ? 'opacity-60' : ''}`}>
            <div>
              <div className="font-medium">{a.title}</div>
              <div className="text-sm text-gray-500">{a.course || 'General'} • {a.date || 'Coming soon'}</div>
              <div className="mt-1 text-sm">{a.description}</div>
            </div>
            <div className="flex flex-col gap-2">
              <button onClick={() => setRead((r) => ({ ...r, [a.id]: !r[a.id] }))} className="px-3 py-1 bg-indigo-600 text-white rounded">{read[a.id] ? 'Unread' : 'Mark read'}</button>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  )
}
