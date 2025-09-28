import React from 'react';
import PageContainer from '../components/PageContainer';
import { useData } from '../context/DataContext';

export default function MyCoursePage() {
  const { activeStudent } = useData();

  // Add this check to handle the loading state
  if (!activeStudent || !activeStudent.courses) {
    return (
      <PageContainer title="My Courses">
        <p>Loading courses...</p>
      </PageContainer>
    );
  }

  return (
    <PageContainer title="My Courses">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activeStudent.courses.map(course => (
          <div key={course.id} className="bg-white p-4 rounded shadow-sm">
            <h3 className="text-lg font-semibold">{course.name}</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
            </div>
            <p className="text-right text-sm text-gray-500 mt-1">{course.progress}% Complete</p>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}