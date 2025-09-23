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

  // Function to get classes for alert types
  const getAlertClasses = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-700 border-green-400 dark:bg-green-900 dark:text-green-300 dark:border-green-700';
      case 'warning':
        return 'bg-yellow-100 text-yellow-700 border-yellow-400 dark:bg-yellow-900 dark:text-yellow-300 dark:border-yellow-700';
      case 'error':
        return 'bg-red-100 text-red-700 border-red-400 dark:bg-red-900 dark:text-red-300 dark:border-red-700';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-400 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const alertToAdd = {
      id: Date.now(),
      message: newAlert.message,
      type: newAlert.type,
    };
    setAlerts([alertToAdd, ...alerts]);
    setNewAlert({ message: '', type: 'error' });
  };

  return (
    <div className="p-4 rounded-lg shadow-md min-h-screen">
      <h1 className="flex items-center gap-2 text-2xl font-bold mb-6">
        <BsBellFill size={28} className='text-[var(--text-accent-color)]' /> Alerts
      </h1>

      <div className="alert-form-container p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4 text-[var(--text-primary-color)]">Create New Alert</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2 text-[var(--text-primary-color)]">
              Alert Message
            </label>
            <input
              type="text"
              value={newAlert.message}
              onChange={(e) => setNewAlert({ ...newAlert, message: e.target.value })}
              placeholder="Enter alert message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--text-accent-color)] dark:border-zinc-600"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 text-[var(--text-primary-color)]">
              Alert Type
            </label>
            <select
              value={newAlert.type}
              onChange={(e) => setNewAlert({ ...newAlert, type: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--text-accent-color)] dark:border-zinc-600"
            >
              <option value="error">Error</option>
              <option value="warning">Warning</option>
              <option value="success">Success</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--text-accent-color)] hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            <FaPlusCircle className="inline-block mr-2" /> Add Alert
          </button>
        </form>
      </div>

      <div className="alert-list space-y-4">
        {alerts.length === 0 ? (
          <p className="text-center">No active alerts.</p>
        ) : (
          alerts.map(alert => (
            <div
              key={alert.id}
              className={`p-4 rounded-lg shadow-md flex items-center justify-between border-l-4 ${getAlertClasses(alert.type)}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{getAlertIcon(alert.type)}</span>
                <p className="font-medium text-[var(--text-primary-color)]">{alert.message}</p>
              </div>
              <button onClick={() => dismissAlert(alert.id)} className="text-gray-500 hover:text-gray-700 transition-colors">
                <BsXCircleFill />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Alerts;