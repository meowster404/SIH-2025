import PageContainer from '../components/PageContainer';
import StatCard from '../components/dashboard/StatCard';
import { useData } from '../context/DataContext';

export default function DashboardPage() {
  const { activeStudent, students = [], assignments = [], projects = [] } = useData()

  const totalStudents = students.length
  const pendingAssignments = assignments.filter((a) => !a.submitted).length
  const studentProjects = activeStudent?.portfolio?.projects?.length || 0
  const attendance = activeStudent?.stats?.attendance || '--'

  return (
    <PageContainer title="Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <StatCard title="Active Student" value={activeStudent?.name || '—'} />
        <StatCard title="Students" value={totalStudents} />
        <StatCard title="Pending Assignments" value={pendingAssignments} />
        <StatCard title="Your Projects" value={studentProjects} note={`Attendance: ${attendance}%`} />
      </div>
    </PageContainer>
  )
}
