import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import WorkInProgressPage from './pages/WorkInProgressPage'
import LogoutPage from './pages/LogoutPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex bg-gray-100">
        <Sidebar />

        <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
          <Header />

          <main className="flex-1 overflow-auto max-w-7xl w-full mx-auto no-scrollbar">
            <Routes>
              <Route path="/" element={<StudentHome />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/my-course" element={<MyCoursePage />} />
              <Route path="/submission" element={<WorkInProgressPage feature="Submission" />} />
              <Route path="/projects" element={<WorkInProgressPage feature="Projects" />} />
              <Route path="/certificates" element={<WorkInProgressPage feature="Certificates" />} />
              <Route path="/attendance" element={<AttendancePage />} />
              <Route path="/class-schedule" element={<ClassSchedulePage />} />
              <Route path="/exam-schedule" element={<ExamSchedulePage />} />
              <Route path="/result" element={<ResultPage />} />
              <Route path="/my-profile" element={<MyProfilePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/fee-payment" element={<WorkInProgressPage feature="Fee Payment" />} />
              <Route path="/library" element={<WorkInProgressPage feature="Library" />} />
              <Route path="/ask-portal" element={<WorkInProgressPage feature="Ask Portal" />} />
              <Route path="/resume" element={<WorkInProgressPage feature="Resume" />} />
              <Route path="/notification" element={<WorkInProgressPage feature="Notifications" />} />
              <Route path="/settings" element={<WorkInProgressPage feature="Settings" />} />
              <Route path="/logout" element={<LogoutPage />} />
            </Routes>
          </main>

          <footer className="text-center text-sm text-gray-500 py-4 bg-gray-50">© Student Central</footer>
        </div>
      </div>
    </BrowserRouter>
  )
}
