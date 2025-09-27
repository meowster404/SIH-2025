import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LogoutPage() {
  const nav = useNavigate()
  useEffect(() => {
    // clear session here if implemented
    setTimeout(() => nav('/'), 800)
  }, [])

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Logging out...</h2>
      <p className="mt-4 text-gray-600">You will be redirected shortly.</p>
    </div>
  )
}
