import React, { useState } from 'react';
import { BsMoonFill, BsSunFill, BsPersonFill, BsShieldLockFill, BsBellFill, BsCpuFill, BsChevronDown, BsPeopleFill, BsX } from 'react-icons/bs';

function Setting({ isDarkMode, handleThemeToggle }) {
  const [saveStatus, setSaveStatus] = useState("");
  // 1. Modal Visibility State
  const [showAllModal, setShowAllModal] = useState(false);
  
  const [userList, setUserList] = useState([
    { id: 1, name: "Admin User", email: "admin@nexarlink.com", role: "Admin" },
    { id: 2, name: "Editor User", email: "editor@nexarlink.com", role: "Editor" },
    { id: 3, name: "Viewer User", email: "viewer@nexarlink.com", role: "Viewer" },
    { id: 4, name: "Support User", email: "support@nexarlink.com", role: "Viewer" },
    { id: 5, name: "John Doe", email: "john@nexarlink.com", role: "Editor" },
    { id: 6, name: "Jane Smith", email: "jane@nexarlink.com", role: "Viewer" },
  ]);

  const roles = ["Admin", "Editor", "Viewer"];

  const handleRoleChange = (id, newRole) => {
    const updatedUsers = userList.map(user => 
      user.id === id ? { ...user, role: newRole } : user
    );
    setUserList(updatedUsers);
    setSaveStatus(`Role updated to ${newRole}`);
    setTimeout(() => setSaveStatus(""), 2000);
  };

  // Helper component for the Table to avoid repeating code
  const UserTable = ({ users, isModal = false }) => (
    <table className="w-full text-left">
      <thead>
        <tr className="text-sm font-semibold text-gray-500 border-b">
          <th className="py-3 px-2">Full Name</th>
          <th className="py-3 px-2">Email</th>
          {!isModal && <th className="py-3 px-2">Current Role</th>}
          <th className="py-3 px-2 text-right">Role</th>
        </tr>
      </thead>
      <tbody className="text-sm text-gray-700">
        {users.map((user) => (
          <tr key={user.id} className="border-b last:border-0 hover:bg-gray-50">
            <td className="py-4 px-2 font-medium">{user.name}</td>
            <td className="py-4 px-2 text-gray-500">{user.email}</td>
            {!isModal && (
              <td className="py-4 px-2">
                <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-[10px] font-bold">{user.role}</span>
              </td>
            )}
            <td className="py-4 px-2 text-right">
              <select 
                value={user.role}
                onChange={(e) => handleRoleChange(user.id, e.target.value)}
                className="bg-gray-100 border border-gray-300 py-1 px-2 rounded-lg text-xs outline-none"
              >
                {roles.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen relative">
      <div className="max-w-4xl space-y-6">
        
        {/* Appearance Section */}
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
              className={`inline-flex h-6 w-11 items-center rounded-full transition-colors relative ${isDarkMode ? 'bg-green-500' : 'bg-gray-300'}`}
            >
              <span className={`${isDarkMode ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
            </button>
          </div>
        </section>

        {/* User Control Section */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="flex items-center gap-3 mb-4 border-b pb-2">
            <BsPeopleFill className="text-blue-600" />
            <h2 className="font-bold text-gray-700">User Access Control</h2>
          </div>
          
          <div className="overflow-x-auto">
            {/* 2. ONLY SHOW FIRST 4 USERS IN MAIN VIEW */}
            <UserTable users={userList.slice(0, 4)} />
          </div>

          <div className="mt-4 pt-2 border-t">
            <button 
              onClick={() => setShowAllModal(true)}
              className="text-blue-600 font-medium hover:underline text-sm"
            >
              View All {userList.length} Users
            </button>
          </div>
        </section>



        {/* Security Section */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4 border-b pb-2">
            <BsShieldLockFill className="text-blue-600" />
            <h2 className="font-bold text-gray-700">Security</h2>
          </div>
          <button className="text-red-600 font-medium hover:underline">Change Password</button>
        </section>

        {/* 3. POPUP OVERLAY (MODAL) */}
        {showAllModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
              onClick={() => setShowAllModal(false)}
            ></div>
            
            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-3xl max-h-[80vh] overflow-hidden rounded-2xl shadow-2xl flex flex-col">
              <div className="p-4 border-b flex justify-between items-center bg-gray-50">
                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                  <BsPeopleFill className="text-blue-600" /> All System Users
                </h3>
                <button 
                  onClick={() => setShowAllModal(false)}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <BsX size={24} />
                </button>
              </div>
              
              <div className="p-4 overflow-y-auto">
                <UserTable users={userList} isModal={true} />
              </div>

              <div className="p-4 border-t bg-gray-50 text-right">
                <button 
                  onClick={() => setShowAllModal(false)}
                  className="px-6 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {saveStatus && (
          <div className="fixed bottom-10 right-10 bg-green-600 text-white px-6 py-3 rounded-xl shadow-2xl z-[60] text-sm font-bold">
            {saveStatus}
          </div>
        )}
      </div>
    </div>
  );
}

export default Setting;