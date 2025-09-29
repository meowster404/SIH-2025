import React, { useMemo } from 'react';
import { useData } from '../context/DataContext';
import PageContainer from '../components/PageContainer';
import StatCard from '../components/dashboard/StatCard';
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const PaymentHistory = ({ payments }) => {
    // Sort payments by date, assuming date is in a sortable format
    const sortedPayments = [...payments].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
      <div className="bg-white/90 rounded-2xl p-6 shadow-md h-full">
        <h3 className="text-lg font-semibold mb-4">Payment History</h3>
        <ul className="space-y-4">
          {sortedPayments.map((payment) => (
            <li key={payment.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800">{payment.description}</p>
                <p className="text-sm text-gray-500">{new Date(payment.date).toLocaleDateString()}</p>
              </div>
              <p className="font-semibold text-gray-800">₹{payment.amount.toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
    );
};

const PayNow = ({ onPay }) => {
    const [amount, setAmount] = React.useState('');

    const handlePay = () => {
        if (amount && !isNaN(amount) && parseFloat(amount) > 0) {
            onPay(parseFloat(amount));
            setAmount('');
        }
    };

    return (
        <div className="bg-white/90 rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-4">Pay Your Fees</h3>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <input 
                    type="number" 
                    placeholder="Enter amount to pay" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" 
                />
                <button 
                    onClick={handlePay}
                    className="px-8 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition w-full sm:w-auto"
                >
                    Pay Now
                </button>
            </div>
        </div>
    )
}


export default function FeePaymentPage() {
  const { fees, activeStudent } = useData();

  // Dummy handler for payment
  const handlePayment = (amount) => {
    console.log(`Payment of ₹${amount} initiated.`);
    // Here you would typically call an API to process the payment
  };

  const paymentHistory = useMemo(() => activeStudent?.fees?.history || [], [activeStudent]);

  const chartData = useMemo(() => {
    return {
      labels: ['Fees Paid', 'Balance Due'],
      datasets: [
        {
          label: 'Fee Status',
          data: [fees.paid || 0, fees.due || 0],
          backgroundColor: [
            'rgba(79, 70, 229, 0.8)', // Indigo for paid
            'rgba(239, 68, 68, 0.8)', // Red for due
          ],
          borderColor: [
            'rgba(79, 70, 229, 1)',
            'rgba(239, 68, 68, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  }, [fees]);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Fee Payment Status',
      },
      tooltip: {
        callbacks: {
            label: function(context) {
                let label = context.label || '';
                if (label) {
                    label += ': ';
                }
                if (context.parsed !== null) {
                    label += new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(context.parsed);
                }
                return label;
            }
        }
      }
    },
  };

  return (
    <PageContainer title="Fee Payment">
      <div className="space-y-8">
        {/* Top section with StatCards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard title="Total Fees" value={`₹${fees.total?.toLocaleString() || 'N/A'}`} />
          <StatCard title="Fees Paid" value={`₹${fees.paid?.toLocaleString() || 'N/A'}`} />
          <StatCard title="Balance Due" value={`₹${fees.due?.toLocaleString() || 'N/A'}`} note="Due by next semester" />
        </div>

        {/* Middle section with Graph and Payment History */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 bg-white/90 rounded-2xl p-6 shadow-md flex justify-center items-center">
            <div className="w-full max-w-md">
                <Pie options={chartOptions} data={chartData} />
            </div>
          </div>
          <div className="lg:col-span-2">
            <PaymentHistory payments={paymentHistory} />
          </div>
        </div>

        {/* Bottom section with Pay Now feature */}
        <PayNow onPay={handlePayment} />
      </div>
    </PageContainer>
  );
}