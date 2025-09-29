export const students = [
  { id: 1, name: 'Aisha Khan', email: 'aisha@example.com', instituteId: 1, gpa: 8.6, status: 'active' },
  { id: 2, name: 'Rahul Sharma', email: 'rahul@example.com', instituteId: 2, gpa: 7.9, status: 'active' },
  { id: 3, name: 'Meera Patel', email: 'meera@example.com', instituteId: 1, gpa: 9.1, status: 'inactive' },
  { id: 4, name: 'Sandeep Rao', email: 'sandeep@example.com', instituteId: 3, gpa: 6.8, status: 'active' },
  { id: 5, name: 'Jaya Verma', email: 'jaya@example.com', instituteId: 2, gpa: 8.2, status: 'active' },
  { id: 6, name: 'Karan Singh', email: 'karan@example.com', instituteId: 3, gpa: 7.5, status: 'inactive' }
]

export const faculties = [
  { id: 1, name: 'Dr. Nitin Gupta', email: 'ngupta@example.edu', instituteId: 1, department: 'Computer Science' },
  { id: 2, name: 'Prof. Lata Iyer', email: 'liyer@example.edu', instituteId: 2, department: 'Mathematics' },
  { id: 3, name: 'Dr. Omar Khan', email: 'okhan@example.edu', instituteId: 3, department: 'Physics' },
  { id: 4, name: 'Dr. Priya Das', email: 'pdas@example.edu', instituteId: 1, department: 'Chemistry' }
]

export const institutes = [
  { id: 1, name: 'Central Institute of Technology', city: 'Delhi' },
  { id: 2, name: 'National College of Engineering', city: 'Mumbai' },
  { id: 3, name: 'State University', city: 'Bengaluru' }
]

export const courses = [
  { code: 'CS101', name: 'Introduction to Computer Science', instructor: 'Dr. Nitin Gupta', description: 'Fundamentals of programming and computer science.', semester: 1 },
  { code: 'MA101', name: 'Calculus', instructor: 'Prof. Lata Iyer', description: 'Limits, derivatives, and integrals.', semester: 1 },
  { code: 'PY101', name: 'Physics for Engineers', instructor: 'Dr. Omar Khan', description: 'Mechanics, electricity, and magnetism.', semester: 2 },
  { code: 'CH101', name: 'Chemistry for Engineers', instructor: 'Dr. Priya Das', description: 'Basic concepts of chemistry.', semester: 2 },
  { code: 'CS201', name: 'Data Structures and Algorithms', instructor: 'Dr. Nitin Gupta', description: 'Arrays, linked lists, trees, graphs, and algorithms.', semester: 3 },
  { code: 'CS202', name: 'Object Oriented Programming', instructor: 'Dr. Nitin Gupta', description: 'Classes, objects, inheritance, and polymorphism.', semester: 3 },
  { code: 'CS301', name: 'Database Management Systems', instructor: 'Dr. Nitin Gupta', description: 'SQL, relational algebra, and database design.', semester: 4 },
  { code: 'CS302', name: 'Operating Systems', instructor: 'Dr. Nitin Gupta', description: 'Processes, threads, memory management, and file systems.', semester: 4 },
]

export const assignments = [
  { id: 1, title: 'Assignment 1', course: 'CS101', due: '2025-10-15', submitted: true, type: 'assignment' },
  { id: 2, title: 'Practical 1', course: 'CS101', due: '2025-10-20', submitted: false, type: 'practical' },
  { id: 3, title: 'Assignment 2', course: 'MA101', due: '2025-10-25', submitted: false, type: 'assignment' },
  { id: 4, title: 'Practical 2', course: 'MA101', due: '2025-10-30', submitted: true, type: 'practical' },
]

export const projects = [
  { title: 'Student Portal', startDate: '2025-09-01', endDate: '2025-12-31', description: 'A web application for students to manage their academic information.', repoUrl: 'https://github.com/user/student-portal' },
  { title: 'E-commerce Website', startDate: '2025-01-01', endDate: '2025-04-30', description: 'An online store for selling products.', repoUrl: 'https://github.com/user/ecommerce-website' },
]

export const certificates = [
  { id: 1, title: 'React for Beginners', date: '2025-06-30', category: 'course', fileName: 'react-for-beginners.pdf' },
  { id: 2, title: 'Hackathon Winner', date: '2025-08-15', category: 'competition', fileName: 'hackathon-winner.pdf' },
]

export const grades = [
  { course: 'CS101', grade: 'A' },
  { course: 'MA101', grade: 'B' },
]

export const classSchedule = [
  { day: 'Monday', time: '10:00 AM - 11:00 AM', course: 'CS101' },
  { day: 'Tuesday', time: '11:00 AM - 12:00 PM', course: 'MA101' },
  { day: 'Wednesday', time: '10:00 AM - 11:00 AM', course: 'CS101' },
  { day: 'Thursday', time: '11:00 AM - 12:00 PM', course: 'MA101' },
  { day: 'Friday', time: '10:00 AM - 11:00 AM', course: 'CS101' },
]

export const examSchedule = [
  { course: 'CS101', date: '2025-12-15', venue: 'Room 101' },
  { course: 'MA101', date: '2025-12-20', venue: 'Room 102' },
]

export const announcements = [
  { id: 1, title: 'Mid-term exams', course: 'General', date: '2025-10-01', description: 'The mid-term exams will be held from 15th to 20th of October.' },
  { id: 2, title: 'Guest lecture', course: 'CS101', date: '2025-10-05', description: 'A guest lecture on AI will be held on 10th of October.' },
]

export const facultyOnLeave = [
  { name: 'Dr. Priya Das', department: 'Chemistry' },
]