import React, { useState } from 'react'

export default function GoalsCard({ goals = [], onChange }) {
  const [items, setItems] = useState(goals)
  const completed = items.filter((g) => g.done).length

  function toggle(i) {
    const next = items.map((g, idx) => (idx === i ? { ...g, done: !g.done } : g))
    setItems(next)
    onChange?.(next)
  }

  function remove(i) {
    const next = items.filter((_, idx) => idx !== i)
    setItems(next)
    onChange?.(next)
  }

  function add(title) {
    if (!title) return
    const next = [...items, { title, done: false }]
    setItems(next)
    onChange?.(next)
  }

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm w-full">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">Month Goal's</div>
        <div className="text-sm text-gray-400">{completed}/{items.length}</div>
      </div>

      <div className="mt-4 space-y-3">
        {items.map((g, i) => (
          <div key={i} className="flex items-center gap-3 justify-between">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={g.done} onChange={() => toggle(i)} />
              <div className="text-sm text-gray-700">{g.title}</div>
            </div>
            <button className="text-xs text-red-500" onClick={() => remove(i)}>Remove</button>
          </div>
        ))}
      </div>

      <div className="mt-3 flex gap-2">
        <input id="new-goal" className="flex-1 border rounded px-2 py-1 text-sm" placeholder="Add goal" />
        <button
          className="bg-indigo-600 text-white px-3 py-1 rounded"
          onClick={() => {
            const el = document.getElementById('new-goal')
            if (el) {
              add(el.value.trim())
              el.value = ''
            }
          }}
        >Add
        </button>
      </div>
    </div>
  )
}
