import React from 'react'
import { useData } from '../context/DataContext'
import PageContainer from '../components/PageContainer'

export default function FeePaymentPage() {
  const { fees } = useData()

  return (
    <PageContainer title="Fee Payment">
      <div className="max-w-md">
        <div className="bg-white rounded p-4 shadow-sm">
          <div className="flex justify-between">
            <div>Total</div>
            <div className="font-medium">₹{fees.total}</div>
          </div>
          <div className="flex justify-between mt-2">
            <div>Paid</div>
            <div className="text-green-600">₹{fees.paid}</div>
          </div>
          <div className="flex justify-between mt-2">
            <div>Due</div>
            <div className="text-red-600">₹{fees.due}</div>
          </div>

          <div className="mt-4 text-right">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded">Pay Now</button>
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
