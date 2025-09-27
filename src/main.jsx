import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { DataProvider } from './context/DataContext'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>
)
