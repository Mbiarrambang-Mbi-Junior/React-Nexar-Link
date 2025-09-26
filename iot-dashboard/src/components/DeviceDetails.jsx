import React from 'react';
import { useParams } from 'react-router-dom';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function DeviceDetails({isDarkMode}) {
  const { id } = useParams();

  return (
    <div className={`p-4 rounded-lg shadow-md min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Link to="/device-management" className="flex items-center text-[var(--text-accent-color)] hover:text-[var(--text-highlight-color)] mb-6">
        <BsArrowLeftCircleFill className="mr-2" size={24} />
        Back to Device Management
      </Link>
      <h1 className="text-3xl font-bold mb-4 text-[var(--text-primary-color)]">Device Details</h1>
      <p className="text-lg text-[var(--text-primary-color)]">You are viewing details for device: <span className="font-semibold text-[var(--text-accent-color)]">{id}</span></p>
    </div>
  );
}

export default DeviceDetails;