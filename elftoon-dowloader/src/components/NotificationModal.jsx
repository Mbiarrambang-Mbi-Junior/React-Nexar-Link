import React from 'react';

const NotificationModal = ({ isVisible, title, message, onClose }) => {
    if (!isVisible) return null;

    return (
        // Added onClick={onClose} to the backdrop to close the modal when clicking outside
        <div 
            className="fixed inset-0 bg-slate-900 bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            {/* Added onClick={(e) => e.stopPropagation()} to prevent the backdrop click 
                handler from firing when the user clicks inside the modal content */}
            <div 
                className="bg-slate-800 p-6 rounded-xl shadow-2xl w-full max-w-md border border-indigo-600"
                onClick={(e) => e.stopPropagation()} 
            >
                <h3 className="text-xl font-bold mb-3 text-indigo-400">{title}</h3>
                <p className="text-slate-300 mb-4">{message}</p>
                <button 
                    onClick={onClose} 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition duration-200"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default NotificationModal;