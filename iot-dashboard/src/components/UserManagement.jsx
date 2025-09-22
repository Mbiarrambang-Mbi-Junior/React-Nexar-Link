import React, { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { BsPencilFill, BsTrash, BsPersonPlusFill } from 'react-icons/bs';

// Mock data for demonstration
const mockUsers = [
  { id: 1, name: 'Alice Smith', role: 'Admin' },
  { id: 2, name: 'Bob Johnson', role: 'Editor' },
  { id: 3, name: 'Charlie Brown', role: 'Viewer' },
];

function UserManagement() {
  const [users, setUsers] = useState(mockUsers);
  const [currentUser, setCurrentUser] = useState({ id: 1, name: 'Alice Smith', role: 'Admin' });
  const [newUser, setNewUser] = useState({ name: '', role: 'Viewer' });

  // Function to handle editing a user (placeholder)
  const handleEdit = (userId) => {
    // In a real app, this would open a modal or navigate to an edit page
    console.log(`Editing user with ID: ${userId}`);
  };

  // Function to handle deleting a user
  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  // Function to add a new user
  const handleAddUser = (e) => {
    e.preventDefault();
    if (newUser.name) {
      const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
      setUsers([...users, { id: newId, ...newUser }]);
      setNewUser({ name: '', role: 'Viewer' });
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <BsPersonCircle /> User Management
      </h1>

      {/* Current User Info for demonstration */}
      <div className="bg-gray-200 p-4 rounded-lg mb-6 shadow-sm">
        <p className="font-semibold text-gray-700">Logged in as: <span className="text-blue-600">{currentUser.name}</span></p>
        <p className="text-sm text-gray-500">Your role: <span className="font-medium">{currentUser.role}</span></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Add New User Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <BsPersonPlusFill /> Add New User
          </h2>
          <form onSubmit={handleAddUser} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                User Name
              </label>
              <input
                type="text"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                placeholder="Enter user name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Role
              </label>
              <select
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Viewer">Viewer</option>
                <option value="Editor">Editor</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Add User
            </button>
          </form>
        </div>

        {/* User List Table */}
        <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto md:col-span-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">User List</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-2">
                    {currentUser.role === 'Admin' && (
                      <>
                        <button
                          onClick={() => handleEdit(user.id)}
                          className="text-blue-600 hover:text-blue-900 transition-colors"
                        >
                          <BsPencilFill />
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="text-red-600 hover:text-red-900 transition-colors"
                        >
                          <BsTrash />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;