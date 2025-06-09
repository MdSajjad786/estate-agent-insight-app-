import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      // Simulated property data for report body
      const reportData = {
        recipient: 'shezaadhusain@gmail.com',
        subject: 'UK Property Market Report',
        report: {
          interestRates: {
            current: '5-year fixed: 4.2%',
            trend: 'Rates down 0.25% this month',
            implication: 'Likely to encourage buyers'
          },
          housingStock: {
            london: {
              listings: 12000,
              averagePrice: '£550,000',
              change: 'Stock up 5% this quarter'
            },
            manchester: {
              listings: 8000,
              averagePrice: '£280,000',
              change: 'Stock up 3% this quarter'
            }
          },
          newDevelopments: [
            {
              location: 'Liverpool City Centre',
              units: 150,
              completion: 'Q4 2026',
              impact: 'Likely to increase affordable housing options'
            },
            {
              location: 'Birmingham Eastside',
              units: 320,
              completion: 'Q2 2025',
              impact: 'May drive prices down slightly in the area'
            }
          ]
        }
      };

      const response = await axios.post('https://hooks.zapier.com/hooks/catch/1234567/abcde', reportData);
      console.log('Server response:', response.data);
      setStatus('Report sent successfully!');
    } catch (error) {
      console.error('Error sending report:', error);
      setStatus('Failed to send report.');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">📩 Get UK Property Market Report</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Send Report
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}

export default App;
