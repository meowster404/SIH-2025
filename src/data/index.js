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
  // current semester course list with notes
  courses: [
    { code: 'CS401', name: 'Algorithms', instructor: 'Dr. Nitin Gupta', notes: 'Week 1: Greedy algorithms\nWeek 2: Divide and Conquer\nImportant: Practice MST and shortest paths.' },
    { code: 'CS402', name: 'Database Systems', instructor: 'Dr. Meera Joshi', notes: 'Normalization, ER modelling, SQL queries. Read chapters 3-6 for next lab.' },
    { code: 'CS403', name: 'Operating Systems', instructor: 'Dr. R. Sharma', notes: 'Process scheduling, threads, synchronization. Focus on semaphores and deadlocks.' },
    { code: 'CS404', name: 'Computer Networks', instructor: 'Dr. A. Verma', notes: 'TCP vs UDP, routing basics. Lab: packet capture exercises.' },
    { code: 'CS405', name: 'Software Engineering', instructor: 'Dr. K. Rao', notes: 'Agile methodologies, requirement gathering. Project proposals due next month.' },
    { code: 'CS406', name: 'Machine Intelligence', instructor: 'Dr. S. Kapoor', notes: 'Intro to ML: linear regression, logistic regression, evaluation metrics. Homework: implement linear regression from scratch.' },
  ],
  // per-subject attendance breakdown (percentages)
  attendanceByCourse: [
    { code: 'CS401', name: 'Algorithms', overall: 78, breakdown: { lectures: 80, practicals: 70, extracurricular: 90 } },
    { code: 'CS402', name: 'Database Systems', overall: 85, breakdown: { lectures: 88, practicals: 80, extracurricular: 70 } },
    { code: 'CS403', name: 'Operating Systems', overall: 72, breakdown: { lectures: 70, practicals: 75, extracurricular: 60 } },
    { code: 'CS404', name: 'Computer Networks', overall: 69, breakdown: { lectures: 65, practicals: 72, extracurricular: 70 } },
    { code: 'CS405', name: 'Software Engineering', overall: 90, breakdown: { lectures: 92, practicals: 88, extracurricular: 85 } },
    { code: 'CS406', name: 'Machine Intelligence', overall: 74, breakdown: { lectures: 76, practicals: 70, extracurricular: 80 } },
  ],
  portfolio: {
    projects: [
      { title: 'Campus Connect', startDate: '2024-08-01', endDate: '2024-12-01', description: 'A community platform for students to share events and resources.', repoUrl: 'https://github.com/meowster404/campus-connect', demoUrl: 'https://campus-connect.example.com' },
      { title: 'ML Playground', startDate: '2025-01-10', endDate: '', description: 'Small projects demonstrating ML models.', repoUrl: 'https://github.com/meowster404/ml-playground' },
    ],
  },
  certificates: [
    { id: 's1-1', title: 'Data Structures - Certificate', date: '2024-05-20', category: 'course', fileName: 'ds_cert.pdf' },
  ],
  },
]

// additional sample datasets used by pages
export const certificates = [
  { id: 1, title: 'Data Structures - Certificate', date: '2024-05-20', category: 'course', fileName: 'ds_cert.pdf' },
  { id: 2, title: 'Web Development Bootcamp', date: '2025-02-15', category: 'course', fileName: 'web_bootcamp.pdf' },
  { id: 3, title: 'Hackathon Winner', date: '2025-06-20', category: 'competition', fileName: 'hackathon_award.pdf' },
]

export const assignments = [
  { id: 1, course: 'Algorithms', title: 'MST Implementation', due: '2025-10-05', submitted: false, type: 'assignment' },
  { id: 2, course: 'Database Systems', title: 'ER Diagram', due: '2025-10-12', submitted: true, type: 'assignment', submission: { fileName: 'er_diagram.pdf', submittedAt: '2025-09-20' } },
  { id: 3, course: 'Operating Systems', title: 'Lab 3 - Process Sync', due: '2025-10-08', submitted: false, type: 'practical' },
]

// Add some sample projects at top level for pages that might read them
export const projects = [
  { id: 1, title: 'Campus Connect', repoUrl: 'https://github.com/meowster404/campus-connect', demoUrl: 'https://campus-connect.example.com', description: 'Community platform for students' },
  { id: 2, title: 'ML Playground', repoUrl: 'https://github.com/meowster404/ml-playground', description: 'ML demos and experiments' },
]

export const fees = { total: 50000, paid: 30000, due: 20000 }

export const library = [
  { id: 1, title: 'Introduction to Algorithms', author: 'Cormen', available: true },
  { id: 2, title: 'Database System Concepts', author: 'Korth', available: false },
]

export const certificatesByCategory = {
  course: ['Data Structures - Certificate', 'Web Development Bootcamp'],
  extracurricular: [],
  competition: ['Hackathon Winner'],
}

export const classSchedule = [
  { day: 'Mon', time: '09:00 - 10:30', course: 'CS401' },
  { day: 'Tue', time: '11:00 - 12:30', course: 'CS402' },
]

export const examSchedule = [
  { course: 'Algorithms', date: '2025-11-10', venue: 'Hall A' },
  { course: 'Database Systems', date: '2025-11-15', venue: 'Lab 2' },
]

export const grades = [
  { course: 'CS301', grade: 'A' },
  { course: 'CS302', grade: 'B+' },
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

export const courses = [
  { code: 'CS401', title: 'Algorithms', credits: 4, semester: 4, type: 'theory', instructor: 'Dr. Nitin Gupta', description: 'Greedy, Divide & Conquer, Graph algorithms, MST, Shortest paths.' },
  { code: 'CS402', title: 'Database Systems', credits: 4, semester: 4, type: 'theory', instructor: 'Dr. Meera Joshi', description: 'ER modelling, normalization, SQL, transactions and indexing.' },
  { code: 'CS403', title: 'Operating Systems', credits: 4, semester: 4, type: 'theory', instructor: 'Dr. R. Sharma', description: 'Processes, scheduling, synchronization, memory management.' },
  { code: 'CS404', title: 'Computer Networks', credits: 3, semester: 4, type: 'theory', instructor: 'Dr. A. Verma', description: 'Network layers, TCP/UDP, routing basics, sockets.' },
  { code: 'CS405', title: 'Software Engineering', credits: 3, semester: 4, type: 'theory', instructor: 'Dr. K. Rao', description: 'Software lifecycle, Agile methods, requirements, testing.' },
  { code: 'CS406', title: 'Machine Intelligence', credits: 3, semester: 4, type: 'theory', instructor: 'Dr. S. Kapoor', description: 'Intro to ML, regression, classification, evaluation.' },
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
  certificates,
  assignments,
  fees,
  library,
  classSchedule,
  examSchedule,
  grades,
  institutes,
  courses,
  site,
  activeStudentId,
  announcements,
  facultyOnLeave,
  projects
}