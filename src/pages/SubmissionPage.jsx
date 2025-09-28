import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import { useData } from '../context/DataContext';

export default function SubmissionPage() {
  const { activeStudent, submitAssignment } = useData();
  const [file, setFile] = useState(null);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  // Add this check to handle the loading state
  if (!activeStudent || !activeStudent.assignments) {
    return (
      <PageContainer title="Submissions">
        <p>Loading submissions...</p>
      </PageContainer>
    );
  }

  const pendingAssignments = activeStudent.assignments.filter(a => !a.submitted);
  const completedAssignments = activeStudent.assignments.filter(a => a.submitted);

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file && selectedAssignment) {
      const submissionUrl = `https://example.com/submissions/${file.name}`;
      submitAssignment(selectedAssignment, submissionUrl);
      setFile(null);
      setSelectedAssignment(null);
    }
  };

  return (
    <PageContainer title="Submissions">
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Pending Assignments</h3>
          <div className="bg-white p-4 rounded shadow-sm">
            <ul className="divide-y divide-gray-200">
              {pendingAssignments.map(assignment => (
                <li key={assignment.id} className="py-4 flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold">{assignment.title}</p>
                    <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
                  </div>
                  <button
                    onClick={() => setSelectedAssignment(assignment.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Upload
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {selectedAssignment && (
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="text-lg font-semibold mb-2">
              Upload for: {activeStudent.assignments.find(a => a.id === selectedAssignment)?.title}
            </h4>
            <input type="file" onChange={handleFileChange} className="mb-2" />
            <button
              onClick={handleUpload}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        )}

        <div>
          <h3 className="text-xl font-semibold mb-4">Completed Assignments</h3>
          <div className="bg-white p-4 rounded shadow-sm">
            <ul className="divide-y divide-gray-200">
              {completedAssignments.map(assignment => (
                <li key={assignment.id} className="py-4 flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold">{assignment.title}</p>
                    <a
                      href={assignment.submission}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      View Submission
                    </a>
                  </div>
                  <p className="text-lg font-bold text-green-500">{assignment.grade}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}