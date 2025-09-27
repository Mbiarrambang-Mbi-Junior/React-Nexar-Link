import React, { useState, useEffect } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { BsPencilFill, BsTrash, BsPersonPlusFill } from 'react-icons/bs';

// Mock data for demonstration
const mockUsers = [
    { id: 1, name: 'Alice Smith', role: 'Admin', email: 'alice@example.com' },
    { id: 2, name: 'Bob Johnson', role: 'Editor', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', role: 'Viewer', email: 'charlie@example.com' },
];

function UserManagement({ isDarkMode, userData }) {
    const [users, setUsers] = useState(mockUsers);
    const [currentUser, setCurrentUser] = useState(null); 
    const [newUser, setNewUser] = useState({ name: '', role: 'Viewer' });

    // Extract photo URL and name variables from userData, mirroring Header.jsx
    const userPhotoUrl = userData?.photoURL;
    const userName = userData?.name || userData?.email?.split('@')[0] || 'User';
   /* useEffect(() => {
        if (userData) {
            const usernameFromEmail = userData.email ? userData.email.split('@')[0] : 'User';
            
            // NOTE: Assuming the logged-in user has an 'Admin' role for this management page.
            const user_role = userData.role || 'Admin'; 
            setCurrentUser({
                id: userData.uid || 0,
                name: userData.name,
                photoURL: userData.photoURL,
                email: userData.email,
                role: user_role,
            });
        }
    }, [userData]); */

    // Render a loading state while user data is being processed 
    if (!currentUser) {
        return <div className="p-8 text-center text-gray-500 dark:text-gray-400">Loading user data...</div>;
        console.log('Loading user data...');
    }

    // Function to handle editing a user (placeholder)
    const handleEdit = (userId) => {
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
            setUsers([...users, { id: newId, ...newUser, email: `${newUser.name.toLowerCase().replace(/\s/g, '.')}@new.user` }]);
            setNewUser({ name: '', role: 'Viewer' });
        }
    };

    return (
        // Main container dark mode bg/text already set
        <div className={`p-4 sm:p-6 lg:p-8 ${isDarkMode ? 'dark:bg-gray-900 dark:text-gray-100' : ''}`}>
            
            {/* Title text color - FIX 3: Conditional Rendering for Image/Icon */}
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
                {userPhotoUrl ? (
                    <img
                        src={userPhotoUrl}
                        alt={userName}
                        // Styling adjusted for page title prominence and theme color
                        className="w-10 h-10 rounded-full object-cover border-2 border-blue-600 dark:border-blue-400"
                    />
                ) : (
                    // Fallback icon
                    <BsPersonCircle className="text-blue-600 dark:text-blue-400 text-[36px]" />
                )}
                User Management
            </h1>

            {/* Current User Info Card - NOW USES LOGGED-IN USER DATA */}
            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg mb-6 shadow-sm">
                <p className="font-semibold text-gray-700 dark:text-gray-300">
                    Logged in as: <span className="text-blue-600 dark:text-blue-400">{currentUser.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">({currentUser.email})</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Your role: <span className="font-medium">{currentUser.role}</span></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Add New User Section */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                        <BsPersonPlusFill /> Add New User
                    </h2>
                    <form onSubmit={handleAddUser} className="space-y-4">
                        <div>
                            {/* Label text color */}
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                                User Name
                            </label>
                            {/* Input styling for dark mode */}
                            <input
                                type="text"
                                value={newUser.name}
                                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                placeholder="Enter user name"
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
                                required
                            />
                        </div>
                        <div>
                            {/* Label text color */}
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                                Role
                            </label>
                            {/* Select styling for dark mode */}
                            <select
                                value={newUser.role}
                                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                            >
                                <option value="Viewer">Viewer</option>
                                <option value="Editor">Editor</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                        >
                            Add User
                        </button>
                    </form>
                </div>

                {/* User List Table */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md overflow-x-auto md:col-span-1">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">User List</h2>
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        {/* Table Header */}
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {users.map((user) => (
                                <tr key={user.id}>
                                    {/* Table row text color is inherited from the table's container. */}
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">{user.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">{user.role}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-2">
                                        {currentUser.role === 'Admin' && (
                                            <>
                                                {/* Action Button colors for dark mode */}
                                                <button
                                                    onClick={() => handleEdit(user.id)}
                                                    className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                                >
                                                    <BsPencilFill />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(user.id)}
                                                    className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 transition-colors"
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