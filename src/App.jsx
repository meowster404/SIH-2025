import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StudentDashboard from './components/StudentDashboard'
import FacultyDashboard from './components/FacultyDashboard'
import InstituteDashboard from './components/InstituteDashboard'
import StudentHome from './components/StudentHome'
import DashboardPage from './pages/DashboardPage'
import MyCoursePage from './pages/MyCoursePage'
import SubmissionPage from './pages/SubmissionPage'
import ProjectsPage from './pages/ProjectsPage'
import CertificatesPage from './pages/CertificatesPage'
import AttendancePage from './pages/AttendancePage'
import ClassSchedulePage from './pages/ClassSchedulePage'
import ExamSchedulePage from './pages/ExamSchedulePage'
import ResultPage from './pages/ResultPage'
import MyProfilePage from './pages/MyProfilePage'
import PortfolioPage from './pages/PortfolioPage'
import FeePaymentPage from './pages/FeePaymentPage'
import LibraryPage from './pages/LibraryPage'
import AskPortalPage from './pages/AskPortalPage'
import ResumePage from './pages/ResumePage'
import NotificationPage from './pages/NotificationPage'
import SettingsPage from './pages/SettingsPage'
import LogoutPage from './pages/LogoutPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <StudentHome /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/my-course", element: <MyCoursePage /> },
      { path: "/submission", element: <SubmissionPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/certificates", element: <CertificatesPage /> },
      { path: "/attendance", element: <AttendancePage /> },
      { path: "/class-schedule", element: <ClassSchedulePage /> },
      { path: "/exam-schedule", element: <ExamSchedulePage /> },
      { path: "/result", element: <ResultPage /> },
      { path: "/my-profile", element: <MyProfilePage /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/fee-payment", element: <FeePaymentPage /> },
      { path: "/library", element: <LibraryPage /> },
      { path: "/ask-portal", element: <AskPortalPage /> },
      { path: "/resume", element: <ResumePage /> },
      { path: "/notification", element: <NotificationPage /> },
      { path: "/settings", element: <SettingsPage /> },
      { path: "/logout", element: <LogoutPage /> },
    ]
  }
], {
  future: {
    // Use the latest features
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

function Root() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="h-screen flex bg-gray-100">
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-auto max-w-7xl w-full mx-auto no-scrollbar">
          <Outlet />
        </main>
        <footer className="text-center text-sm text-gray-500 py-4 bg-gray-50">© Student Central</footer>
      </div>
    </div>
  )
}

import { DataProvider } from './context/DataContext'

function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  )
}

export default App;