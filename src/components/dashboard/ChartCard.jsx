import React, { useMemo } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function ChartCard({ data = [], title = 'CGPA Per Semester' }) {
  // data: array of numeric CGPA per semester
  const labels = useMemo(() => data.map((_, i) => `Sem ${i + 1}`), [data])

  // cumulative average per semester
  const avg = useMemo(() => {
    const res = []
    let sum = 0
    for (let i = 0; i < data.length; i++) {
      sum += data[i] || 0
      res.push(Number((sum / (i + 1)).toFixed(2)))
    }
    return res
  }, [data])

  const chartData = useMemo(() => ({
    labels,
    datasets: [
      {
        label: 'Current CGPA',
        data: data,
        borderColor: '#4f46e5',
        backgroundColor: 'rgba(79,70,229,0.06)',
        tension: 0.3,
        pointRadius: 4,
      },
      {
        label: 'Average CGPA',
        data: avg,
        borderColor: '#c4b5fd',
        backgroundColor: 'rgba(196,181,253,0.04)',
        tension: 0.3,
        pointRadius: 3,
      },
    ],
  }), [labels, data, avg])

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      tooltip: { mode: 'index', intersect: false },
    },
    scales: {
      y: {
        min: 0,
        max: 10,
        ticks: { stepSize: 1 },
        grid: { color: '#f3f4f6' },
      },
      x: { grid: { display: false } },
    },
  }), [])

  return (
    <div className="bg-white/90 rounded-2xl p-6 shadow-md h-full">
      <div className="text-sm text-gray-500 mb-2">Statistics</div>
      <div className="font-semibold text-lg mb-3">{title}</div>
      <div className="w-full h-64">
        <Line data={chartData} options={options} />
      </div>
    </div>
  )
}
