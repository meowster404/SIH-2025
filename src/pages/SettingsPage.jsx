import React, { useState, useEffect } from 'react'
import PageContainer from '../components/PageContainer'

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem('ui_settings')
    if (raw) {
      const parsed = JSON.parse(raw)
      setNotifications(!!parsed.notifications)
      setDark(!!parsed.dark)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('ui_settings', JSON.stringify({ notifications, dark }))
  }, [notifications, dark])

  return (
    <PageContainer title="Settings">
      <div className="max-w-md space-y-4">
        <div className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
          <div>
            <div className="font-medium">Notifications</div>
            <div className="text-sm text-gray-500">Enable email & in-app notifications</div>
          </div>
          <input type="checkbox" checked={notifications} onChange={(e) => setNotifications(e.target.checked)} />
        </div>

        <div className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
          <div>
            <div className="font-medium">Dark Mode</div>
            <div className="text-sm text-gray-500">Prefer dark theme for the UI</div>
          </div>
          <input type="checkbox" checked={dark} onChange={(e) => setDark(e.target.checked)} />
        </div>
      </div>
    </PageContainer>
  )
}
