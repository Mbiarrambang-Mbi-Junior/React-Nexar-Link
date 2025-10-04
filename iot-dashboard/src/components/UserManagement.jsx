import React, { useState, useEffect } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { BsPencilFill, BsTrash, BsPersonPlusFill } from 'react-icons/bs';

// Mock data for demonstration
const mockUsers = [
    { id: 1, name: 'Alice Smith', role: 'Admin', email: 'alice@example.com', status: 'Active' },
    { id: 2, name: 'Bob Johnson', role: 'Editor', email: 'bob@example.com', status: 'Active' },
    { id: 3, name: 'Charlie Brown', role: 'Viewer', email: 'charlie@example.com', status: 'Inactive' },
];

// --------------------------------------------------------
// MODAL COMPONENT (Unchanged)
// --------------------------------------------------------
const EditUserModal = ({ isDarkMode, onClose, userId }) => {
    const user = mockUsers.find(u => u.id === userId);
    const userName = user ? user.name : 'Unknown User';

    const cardClass = isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-900';

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
            <div className={`p-8 rounded-xl shadow-2xl max-w-lg w-full m-4 ${cardClass}`}>
                <h3 className="text-2xl font-bold mb-4 text-center text-blue-600 dark:text-blue-400">Edit User</h3>
                <div className="p-8 text-center text-gray-500 dark:text-gray-400 border border-dashed border-gray-500 rounded-lg mb-6">
                    <p className='text-lg font-medium mb-2'>
                        Edit functionality for user: <span className='font-bold text-blue-500 dark:text-blue-300'>{userName} (ID: {userId})</span> is not implemented yet.
                    </p>
                    <p className='text-sm mt-1'>
                        This is where a full user editing form would appear.
                    </p>
                </div>
                <button
                    onClick={onClose}
                    className="w-full py-3 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

// --------------------------------------------------------
// STATUS BADGE UTILITY (Unchanged)
// --------------------------------------------------------
const StatusBadge = ({ status }) => {
    let classes = '';
    if (status === 'Active') {
        classes = 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    } else if (status === 'Inactive') {
        classes = 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    } else {
        classes = 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    }

    return (
        <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${classes}`}>
            {status}
        </span>
    );
};


function UserManagement({ isDarkMode, userData }) {
    const [users, setUsers] = useState(mockUsers);
    const [currentUser, setCurrentUser] = useState(null);
    // Refactored state to hold email instead of name for new user input
    const [newUser, setNewUser] = useState({ email: '', role: 'Viewer' });

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingUserId, setEditingUserId] = useState(null);

    const userPhotoUrl = userData?.photoURL;
    const userName = userData?.name || userData?.email?.split('@')[0] || 'User';

    // useEffect hook logic remains the same (for the currently logged-in user)
    useEffect(() => {
        if (userData) {
            const name = userData.name || (userData.email ? userData.email.split('@')[0] : 'User');
            const user_role = userData.role || 'Admin';

            setCurrentUser({
                id: userData.uid || 0,
                name: name,
                photoURL: userData.photoURL,
                email: userData.email,
                role: user_role,
            });
        }
    }, [userData]);

    if (!currentUser) {
        return <div className="p-8 text-center text-gray-500 dark:text-gray-400">Loading user data...</div>;
    }

    const handleEdit = (userId) => {
        console.log(`Editing user with ID: ${userId}`);
        setEditingUserId(userId);
        setIsEditModalOpen(true);
    };

    const closeModal = () => {
        setIsEditModalOpen(false);
        setEditingUserId(null);
    };

    const handleDelete = (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            setUsers(users.filter(user => user.id !== userId));
        }
    };

    // EDITED: Function to handle adding a new user with email
    const handleAddUser = (e) => {
        e.preventDefault();
        // Check for email instead of name
        if (newUser.email) {
            const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;

            // Logic to mock user name from email for display:
            // 1. Take the part before '@'
            // 2. Replace dots/underscores with spaces
            // 3. Capitalize the first letter of each word
            const emailPrefix = newUser.email.split('@')[0];
            const nameParts = emailPrefix.replace(/[._]/g, ' ').split(' '); // e.g., "john.doe" -> ["john", "doe"]
            const mockName = nameParts
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            // Create the new user object
            const userToAdd = {
                id: newId,
                name: mockName, // This is the calculated name for table display
                email: newUser.email, // The actual email stored in the object
                role: newUser.role,
                // Default status is 'Active' for a newly created user
                status: 'Active'
            };

            setUsers([...users, userToAdd]);
            setNewUser({ email: '', role: 'Viewer' }); // Reset form
        }
    };

    return (
        <div className={`p-4 sm:p-6 lg:p-8 ${isDarkMode ? 'dark:bg-gray-900 dark:text-gray-100' : ''}`}>

            {/* Title and User Info Card remain unchanged */}
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
                {userPhotoUrl ? (
                    <img
                        src={userPhotoUrl}
                        alt={userName}
                        className="w-10 h-10 rounded-full object-cover border-2 border-blue-600 dark:border-blue-400"
                    />
                ) : (
                    <BsPersonCircle className="text-blue-600 dark:text-blue-400 text-[36px]" />
                )}
                User Management
            </h1>

            <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg mb-6 shadow-sm">
                <p className="font-semibold text-gray-700 dark:text-gray-300">
                    Logge in as: <span className="text-blue-600 dark:text-blue-400">{currentUser.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">({currentUser.email})</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Your role: <span className="font-medium">{currentUser.role}</span></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Add New User Section (Updated to use Email) */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                        <BsPersonPlusFill /> Add New User
                    </h2>
                    <form onSubmit={handleAddUser} className="space-y-4">
                        <div>
                            {/* Changed label to User Email */}
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                                User Email
                            </label>
                            {/* Changed state binding and input type */}
                            <input
                                type="email"
                                value={newUser.email}
                                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                placeholder="Enter user email (e.g., jane.doe@company.com)"
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                                Role
                            </label>
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

                {/* User List Table (Unchanged) */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md overflow-x-auto md:col-span-1">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">User List</h2>
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                {/* Displaying Name (derived from email) */}
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {users.map((user) => (
                                <tr key={user.id}>
                                    {/* Displaying the user's name */}
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">{user.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100">{user.role}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <StatusBadge status={user.status} />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-2">
                                        {currentUser.role === 'Admin' && (
                                            <>
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

            {/* CONDITIONAL MODAL RENDERING */}
            {isEditModalOpen && (
                <EditUserModal
                    isDarkMode={isDarkMode}
                    onClose={closeModal}
                    userId={editingUserId}
                />
            )}
        </div>
    );
}

export default UserManagement;