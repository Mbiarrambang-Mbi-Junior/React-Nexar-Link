import React, { useState } from 'react';
import { BsBellFill, BsXCircleFill, BsCheckCircleFill, BsExclamationTriangleFill, BsExclamationCircleFill } from 'react-icons/bs';
import { FaPlusCircle } from 'react-icons/fa';

// Mock data for initial alerts
const mockAlerts = [
  { id: 1, message: 'Your payment was processed successfully.', type: 'success' },
  { id: 2, message: 'Warning: The device temperature is rising.', type: 'warning' },
  { id: 3, message: 'Error: Connection lost. Please check your network.', type: 'error' },
];

function Alerts() {
  const [alerts, setAlerts] = useState(mockAlerts);
  const [newAlert, setNewAlert] = useState({ message: '', type: 'error' });

  // Function to remove an alert
  const dismissAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  // Function to get the correct icon based on alert type
  const getAlertIcon = (type) => {
    switch (type) {
      case 'success':
        return <BsCheckCircleFill />;
      case 'warning':
        return <BsExclamationTriangleFill />;
      case 'error':
        return <BsXCircleFill />;
      default:
        return <BsExclamationCircleFill />;
    }
  };

  // Function to get classes for conditional styling
  const getAlertClasses = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-black';
      case 'error':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };
  
  // Function to add a new alert
  const handleAddAlert = (e) => {
    e.preventDefault();
    if (newAlert.message) {
      const newId = alerts.length > 0 ? Math.max(...alerts.map(a => a.id)) + 1 : 1;
      setAlerts([...alerts, { id: newId, ...newAlert }]);
      setNewAlert({ message: '', type: 'error' });
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <BsBellFill />
        Alerts
      </h1>

      {/* Alert List */}
      <div className="space-y-4 mb-8">
        {alerts.length > 0 ? (
          alerts.map(alert => (
            <div
              key={alert.id}
              className={`p-4 rounded-lg shadow-lg flex items-center justify-between transition-all duration-300 ${getAlertClasses(alert.type)}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{getAlertIcon(alert.type)}</span>
                <p className="font-semibold">{alert.message}</p>
              </div>
              <button
                onClick={() => dismissAlert(alert.id)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <BsXCircleFill size={20} />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No new alerts.</p>
        )}
      </div>

      {/* Add New Alert Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FaPlusCircle /> Add New Alert
        </h2>
        <form onSubmit={handleAddAlert} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Alert Message
            </label>
            <input
              type="text"
              value={newAlert.message}
              onChange={(e) => setNewAlert({ ...newAlert, message: e.target.value })}
              placeholder="Enter alert message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Alert Type
            </label>
            <select
              value={newAlert.type}
              onChange={(e) => setNewAlert({ ...newAlert, type: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="error">Error</option>
              <option value="warning">Warning</option>
              <option value="success">Success</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Add Alert
          </button>
        </form>
      </div>
    </div>
  );
}

export default Alerts;