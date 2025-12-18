import React, { useState } from 'react';
import { BsMoonFill, BsSunFill, BsPersonFill, BsShieldLockFill, BsBellFill, BsCpuFill } from 'react-icons/bs';

function Setting({ isDarkMode, handleThemeToggle }) {
  const [saveStatus, setSaveStatus] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    setSaveStatus("Settings updated successfully!");
    setTimeout(() => setSaveStatus(""), 3000);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 uppercase">System Settings</h1>
        <p className="text-gray-500">Manage your profile and application preferences</p>
      </div>

      <div className="max-w-4xl space-y-6">
        {/* 1. Appearance Section (Integrated with App.jsx State) */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4 border-b pb-2">
            <BsCpuFill className="text-blue-600" />
            <h2 className="font-bold text-gray-700">Appearance</h2>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-gray-800">Dark Mode</p>
              <p className="text-sm text-gray-500">Adjust the interface for low-light environments</p>
            </div>
            <button 
              onClick={handleThemeToggle}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isDarkMode ? 'bg-green-500' : 'bg-gray-300'}`}
            >
              <span className={`${isDarkMode ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
              {isDarkMode ? <BsMoonFill className="absolute left-1 text-[10px] text-white" /> : <BsSunFill className="absolute right-1 text-[10px] text-gray-600" />}
            </button>
          </div>
        </section>

        {/* 2. Admin Profile Section */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4 border-b pb-2">
            <BsPersonFill className="text-blue-600" />
            <h2 className="font-bold text-gray-700">Admin Profile</h2>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSave}>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
              <input type="text" defaultValue="Admin User" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
              <input type="email" defaultValue="admin@nexarlink.com" className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <button type="submit" className="md:col-span-2 w-max bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
              Update Profile
            </button>
          </form>
        </section>

        {/* 3. Attendance Logic Settings */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4 border-b pb-2">
            <BsBellFill className="text-blue-600" />
            <h2 className="font-bold text-gray-700">Attendance Configuration</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-700">Late Arrival Threshold (minutes)</label>
              <input type="number" defaultValue="15" className="w-20 p-1 border rounded text-center" />
            </div>
            <div className="flex justify-between items-center">
              <label className="text-gray-700">Automatic Absence Marking</label>
              <input type="checkbox" defaultChecked className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </section>

        {/* 4. Security Section */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4 border-b pb-2">
            <BsShieldLockFill className="text-blue-600" />
            <h2 className="font-bold text-gray-700">Security</h2>
          </div>
          <button className="text-red-600 font-medium hover:underline">Change Password</button>
        </section>

        {saveStatus && (
          <div className="fixed bottom-10 right-10 bg-green-600 text-white px-6 py-3 rounded-xl shadow-2xl animate-bounce">
            {saveStatus}
          </div>
        )}
      </div>
    </div>
  );
}

export default Setting;