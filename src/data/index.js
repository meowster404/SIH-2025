export const initialData = {
  activeStudentId: 1,
  students: [
    {
      id: 1,
      name: 'Aisha Khan',
      email: 'aisha@example.com',
      instituteId: 1,
      gpa: 8.6,
      status: 'active',
      stats: {
        attendance: 92,
        pendingAssignments: 2,
        projects: 5,
      },
      courses: [
        { id: 1, name: 'Introduction to Programming', progress: 75 },
        { id: 2, name: 'Data Structures and Algorithms', progress: 60 },
        { id: 3, name: 'Database Management Systems', progress: 85 },
      ],
      assignments: [
        {
          id: 1,
          title: 'Algorithm Design',
          submitted: true,
          submission: 'https://example.com/submission1',
          grade: 'A',
          dueDate: '2025-10-15',
        },
        { id: 2, title: 'Database Normalization', submitted: false, dueDate: '2025-10-20', grade: null },
        { id: 3, title: 'React Hooks', submitted: false, dueDate: '2025-10-25', grade: null },
        {
          id: 4,
          title: 'Redux State Management',
          submitted: true,
          submission: 'https://example.com/submission2',
          grade: 'B+',
          dueDate: '2025-09-28',
        },
      ],
      projects: [
        { id: 1, title: 'E-commerce Website', description: 'A full-stack e-commerce website using the MERN stack.' },
        { id: 2, title: 'Task Management App', description: 'A simple task management app with React and Firebase.' },
      ],
      certificates: [
        { id: 1, name: 'React for Beginners', issuer: 'Coursera', date: '2023-05-15' },
        { id: 2, name: 'Node.js Essentials', issuer: 'Udemy', date: '2023-08-22' },
      ],
    },
  ],
  faculties: [
    { id: 1, name: 'Dr. Nitin Gupta', email: 'ngupta@example.edu', instituteId: 1, department: 'Computer Science' },
    { id: 2, name: 'Prof. Lata Iyer', email: 'liyer@example.edu', instituteId: 2, department: 'Mathematics' },
  ],
  institutes: [
    { id: 1, name: 'Central Institute of Technology', city: 'Delhi' },
    { id: 2, name: 'National College of Engineering', city: 'Mumbai' },
  ],
  library: [
    { id: 1, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', available: true },
    { id: 2, title: 'Clean Code', author: 'Robert C. Martin', available: false },
  ],
};

export default initialData;