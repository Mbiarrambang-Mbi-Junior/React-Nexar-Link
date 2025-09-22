// src/components/DeviceDetails.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { BsArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function DeviceDetails() {
  const { id } = useParams(); // Get the device ID from the URL

  return (
    <div className="p-4">
      <Link to="/device-management" className="flex items-center text-blue-500 hover:text-blue-700 mb-6">
        <BsArrowLeftCircleFill className="mr-2" size={24} />
        Back to Device Management
      </Link>
      <h1 className="text-3xl font-bold mb-4">Device Details</h1>
      <p className="text-lg">You are viewing details for device: <span className="font-semibold text-blue-600">{id}</span></p>
      {/* You can add more details here based on the device ID */}
    </div>
  );
}

export default DeviceDetails;