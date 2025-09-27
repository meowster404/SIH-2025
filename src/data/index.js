export const students = [
  {
    id: 1,
    name: 'Pratham Chinte',
    admission: 'AC2025-001',
    email: 'pratham@example.com',
    instituteId: 1,
    semester: '4th',
    gpa: 8.6,
    status: 'active',
  stats: { cgpa: 7.2, sgpa: 7.2, credits: 120, attendance: 72, perSemester: [6, 7, 6, 5, 9, 10, 4, 6], attendanceHistory: [68, 72] },
  },
]

export const faculties = [
  { id: 1, name: 'Dr. Nitin Gupta', email: 'ngupta@example.edu', instituteId: 1, department: 'Computer Science' },
]

export const facultyOnLeave = [
  { id: 1, name: 'Dr. Meera Joshi', department: 'Mathematics', reason: 'Medical leave until 30 Sep' },
]

export const institutes = [
  { id: 1, name: 'Central Institute of Technology', city: 'Delhi' },
]

export const site = {
  name: 'Central Institute of Technology',
  subtitle: 'Student Portal',
}

export const activeStudentId = 1

// announcements: optional date (ISO string). If date is null/undefined, UI shows "Coming soon"
export const announcements = [
  { id: 1, title: 'Alegría', date: '2025-09-27', course: 'Cultural Fest', description: 'Celebration in the main auditorium at 4pm.' },
  { id: 2, title: 'Exam', date: null, course: 'Algorithms', description: 'Mid-term exam schedule will be announced soon.' },
  { id: 3, title: 'Library Renovation', date: '2025-10-05', course: null, description: 'Sections A & B will be closed for repair.' },
  { id: 4, title: 'Guest Lecture', date: '2025-10-12', course: 'Machine Intelligence', description: 'Prof. Sharma on "AI in Practice".' },
]

export default {
  students,
  faculties,
  institutes,
  site,
  activeStudentId,
  announcements,
}
