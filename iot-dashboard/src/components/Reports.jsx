import React, { useState } from 'react';
import { FaDownload, FaFileExport } from 'react-icons/fa';

// Mock data for demonstration purposes
const mockSensorData = [
  { id: 1, deviceId: 'DEV-001', sensorType: 'Temperature', value: 25.5, unit: '°C', timestamp: '2023-10-27T10:00:00Z' },
  { id: 2, deviceId: 'DEV-002', sensorType: 'Humidity', value: 45, unit: '%', timestamp: '2023-10-27T10:05:00Z' },
  { id: 3, deviceId: 'DEV-003', sensorType: 'Pressure', value: 1012, unit: 'hPa', timestamp: '2023-10-27T10:10:00Z' },
  { id: 4, deviceId: 'DEV-001', sensorType: 'Temperature', value: 26.1, unit: '°C', timestamp: '2023-10-27T10:15:00Z' },
  { id: 5, deviceId: 'DEV-002', sensorType: 'Humidity', value: 47, unit: '%', timestamp: '2023-10-27T10:20:00Z' },
];

function Reports() {
  const [data, setData] = useState(mockSensorData);

  // Function to handle data export to CSV
  const handleExport = () => {
    const headers = ["ID", "Device ID", "Sensor Type", "Value", "Unit", "Timestamp"];
    const rows = data.map(row => 
      `${row.id},${row.deviceId},${row.sensorType},${row.value},${row.unit},${row.timestamp}`
    );
    
    const csvContent = [
      headers.join(','),
      rows.join('\n')
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "sensor_data_report.csv");
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <FaFileExport /> Reports
        </h1>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          <FaDownload />
          Export Data
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sensor and Device Data</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Device ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sensor Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.deviceId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.sensorType}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.value}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.unit}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reports;