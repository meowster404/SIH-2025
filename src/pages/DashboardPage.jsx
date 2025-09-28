import React from 'react';
import PageContainer from '../components/PageContainer';
import { useData } from '../context/DataContext';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function DashboardPage() {
  const { activeStudent } = useData();

  const attendanceData = {
    labels: ['Attended', 'Missed'],
    datasets: [
      {
        data: [activeStudent?.stats?.attendance || 0, 100 - (activeStudent?.stats?.attendance || 0)],
        backgroundColor: ['#4CAF50', '#F44336'],
      },
    ],
  };

  const courseProgressData = {
    labels: activeStudent?.courses.map(c => c.name),
    datasets: [
      {
        label: 'Course Progress',
        data: activeStudent?.courses.map(c => c.progress),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <PageContainer title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="text-sm text-gray-500">Active Student</div>
          <div className="text-xl font-semibold">{activeStudent?.name || '—'}</div>
        </div>
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="text-sm text-gray-500">Pending Assignments</div>
          <div className="text-xl font-semibold">{activeStudent?.stats?.pendingAssignments}</div>
        </div>
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="text-sm text-gray-500">Projects</div>
          <div className="text-xl font-semibold">{activeStudent?.stats?.projects}</div>
        </div>
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="text-sm text-gray-500">Attendance</div>
          <div className="text-xl font-semibold">{activeStudent?.stats?.attendance}%</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Attendance</h3>
          <Doughnut data={attendanceData} />
        </div>
        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="text-lg font-semibold mb-2">Course Progress</h3>
          <Bar data={courseProgressData} />
        </div>
      </div>
    </PageContainer>
  );
}