import React from 'react'
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'

export default function StatCard({ title, value, note, delta }) {
  const hasDelta = typeof delta === 'number'
  const isUp = hasDelta && delta > 0

  return (
  <div className="bg-white/80 rounded-2xl p-3 shadow-md min-w-[8rem] h-28 flex flex-col justify-between">
      <div>
        <div className="text-sm text-gray-500">{title}</div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-2xl font-extrabold">{value}</div>

        {hasDelta && (
          <div className={`flex items-center text-sm font-medium ${isUp ? 'text-green-600' : 'text-red-600'}`}>
            <span className="mr-2">{Math.abs(delta).toFixed(2)}%</span>
            {isUp ? <FiArrowUpRight /> : <FiArrowDownRight />}
          </div>
        )}
      </div>

      {note && <div className="text-xs text-gray-400">{note}</div>}
    </div>
  )
}
