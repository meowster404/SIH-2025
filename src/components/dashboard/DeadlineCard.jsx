import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

export default function DeadlineCard() {
  const { activeStudent } = useData();

  // Add a check to handle the loading state
  if (!activeStudent || !activeStudent.assignments) {
    return (
      <div className="bg-white p-4 rounded shadow-sm">
        <h3 className="text-lg font-semibold mb-2">Upcoming Deadlines</h3>
        <p>Loading deadlines...</p>
      </div>
    );
  }

  const upcomingAssignments = activeStudent.assignments
    .filter(a => !a.submitted)
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 3);

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <h3 className="text-lg font-semibold mb-2">Upcoming Deadlines</h3>
      <ul className="divide-y divide-gray-200">
        {upcomingAssignments.map(assignment => (
          <li key={assignment.id} className="py-2">
            <div className="flex justify-between">
              <p className="font-semibold">{assignment.title}</p>
              <p className="text-sm text-gray-600">{assignment.dueDate}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right">
        <Link to="/submission" className="text-blue-500 hover:underline">
          View All
        </Link>
      </div>
    </div>
  );
}