import React, { useState } from 'react'
import { useData } from '../context/DataContext'

function SettingsToggle({ label, enabled, onToggle, description }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
      <div>
        <label className="text-lg font-medium text-gray-900 dark:text-gray-100">{label}</label>
        {description && <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>}
      </div>
      <button
        onClick={onToggle}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ease-in-out ${
          enabled ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
        }`}>
        <span
          className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}>
        </span>
      </button>
    </div>
  )
}

export default function SettingsPage() {
  const { theme, toggleTheme } = useData()
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)

  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Settings</h1>
      <div className="space-y-6">
        <SettingsToggle 
          label="Enable Notifications" 
          enabled={notificationsEnabled} 
          onToggle={() => setNotificationsEnabled(!notificationsEnabled)}
          description="Receive notifications about deadlines and announcements."
        />
        <SettingsToggle 
          label="Dark Mode" 
          enabled={theme === 'dark'} 
          onToggle={toggleTheme} 
          description="Reduces eye strain in low light conditions."
        />
      </div>
    </div>
  )
}