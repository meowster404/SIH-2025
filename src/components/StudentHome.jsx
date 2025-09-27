import React from 'react'
import { useData } from '../context/DataContext'
import StatCard from './dashboard/StatCard'
import ChartCard from './dashboard/ChartCard'
import DeadlineCard from './dashboard/DeadlineCard'
import AnnouncementList from './dashboard/AnnouncementList'
import GoalsCard from './dashboard/GoalsCard'
import FacultyLeaveCard from './dashboard/FacultyLeaveCard'

export default function StudentHome() {
  const data = useData()
  const student = data?.activeStudent

  const stats = student?.stats || { cgpa: 0, sgpa: 0, credits: 0, attendance: 0, perSemester: [] }
  const announcements = data?.announcements || []

  // compute simple percent delta from the last two semesters (if available)
  const sem = stats.perSemester || []
  const last = sem.length ? sem[sem.length - 1] : null
  const prev = sem.length > 1 ? sem[sem.length - 2] : null
  const computeDelta = (current, previous) => {
    if (current == null || previous == null || previous === 0) return null
    return ((current - previous) / Math.abs(previous)) * 100
  }
  const cgpaDelta = computeDelta(stats.cgpa || last, prev)
  const sgpaDelta = computeDelta(stats.sgpa || last, prev)
  // attendance delta: prefer an explicit history array, otherwise try using last two perSemester values as a poor fallback
  const ah = stats.attendanceHistory || []
  const attLast = ah.length ? ah[ah.length - 1] : null
  const attPrev = ah.length > 1 ? ah[ah.length - 2] : prev
  const attendanceDelta = computeDelta(stats.attendance || attLast, attPrev)

  return (
    <div className="p-8">
      <h1 className="text-4xl font-extrabold">Welcome back, {student ? student.name : '{Name}'}!</h1>
      <p className="mt-2 text-gray-600 font-medium">Current Semester: {student ? student.semester : 'xth'} Semester</p>


      {/* Top stats: stretch from start to end using responsive grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="CGPA" value={stats.cgpa} delta={cgpaDelta} />
        <StatCard title="SGPA" value={stats.sgpa} delta={sgpaDelta} />
        <StatCard title="Credits" value={stats.credits} note={`${stats.credits}/150 this semester`} />
        <StatCard title="Attendance" value={`${stats.attendance}%`} delta={attendanceDelta} />
      </div>

      {/* Main area: chart on left (2/3), right column for deadline + faculty leave */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <ChartCard data={stats.perSemester} />
        </div>
        <div className="flex flex-col gap-4">
          <DeadlineCard tasks={[{ title: 'Assignment 1', course: 'Machine Intelligence', due: 'today' }, { title: 'Practical 13', course: 'IVP', due: '22nd Sept' }]} />
          <FacultyLeaveCard items={data?.facultyOnLeave || []} />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <AnnouncementList items={announcements} />
        </div>
        <div>
          <GoalsCard goals={[{ title: '1h Meditation', done: true }, { title: '10m Running', done: false }, { title: '30m Workout', done: false }]} />
        </div>
      </div>
    </div>
  )
}
