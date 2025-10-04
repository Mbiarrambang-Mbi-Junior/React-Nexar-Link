import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsDisplay } from 'react-icons/bs';
import { FaGlobeAmericas } from 'react-icons/fa';
// Ensure all necessary Firestore functions are imported, adding setDoc
import { auth, db } from '../config/firebase';
import { setDoc, collection, doc, serverTimestamp } from 'firebase/firestore'; 

// Data structure for the world regions
const WORLD_REGIONS = [
    { name: 'Africa  (Cameroon)', value: 'Africa' },
    { name: 'Asia', value: 'Asia' },
    { name: 'Europe', value: 'Europe' },
    { name: 'North America', value: 'North_America' },
    { name: 'South America', value: 'South_America' },
    { name: 'Oceania (Australia/Pacific)', value: 'Oceania' },
    { name: 'Antarctica (Research Bases)', value: 'Antarctica' },
];

function DashboardName({ isDarkMode, setDashboardName: setParentDashboardName }) {
    const [dashboardName, setDashboardName] = useState('');
    const [selectedRegion, setSelectedRegion] = useState(''); 
    const navigate = useNavigate();

    const inputClasses = (isDarkMode) =>
        `w-full py-3 pl-12 pr-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400'
            : 'bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-500'
        }`;

    const handleDashboardNameSubmit = async (e) => {
        e.preventDefault();

        if (!dashboardName || !selectedRegion) {
            alert("Please provide both a Dashboard Name and select a Region.");
            return;
        }

        const user = auth.currentUser;

        if (user) {
            try {
                const dashboardDocRef = doc(db, "Dashboards", user.uid);

                // FIX: Use setDoc instead of updateDoc to ensure the document is created if it doesn't exist.
                await setDoc(dashboardDocRef, {
                    dashboardName: dashboardName,
                    region: selectedRegion,
                    ownerId: user.uid, 
                    createdAt: serverTimestamp(),
                    dashboardNameSet: true
                }, { merge: true }); // Use merge: true to avoid overwriting existing data

                // 2. Update the parent's state
                setParentDashboardName(dashboardName);

                console.log('Dashboard Setup Complete. Name:', dashboardName, 'Region:', selectedRegion);
                alert(`Dashboard "${dashboardName}" for Region "${selectedRegion}" submitted and saved successfully!`);

                // 3. Navigate to the main dashboard route
                navigate('/', { replace: true });

            } catch (error) {
                console.error("Error setting dashboard details in Firestore:", error);
                // The error may still be a permissions error in your Firebase Rules.
                alert(`Failed to complete setup. Please try again. Error: ${error.message}`); 
            }
        } else {
            alert("Session expired. Please log in again.");
            navigate('/signin');
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className={`w-full max-w-md p-8 rounded-xl shadow-2xl transition-all duration-300 ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'}`}>

                {/* Header */}
                <div className="text-center mb-8">
                    <BsDisplay className={`mx-auto text-5xl mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    <h1 className="text-3xl font-extrabold">Set Dashboard Details</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Choose a name and specify your main operational region</p>
                </div>

                {/* Form */}
                <form onSubmit={handleDashboardNameSubmit} className="space-y-6">

                    {/* Dashboard Name Input */}
                    <div className="relative">
                        <BsDisplay className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Dashboard Name"
                            value={dashboardName}
                            onChange={(e) => setDashboardName(e.target.value)}
                            required
                            className={inputClasses(isDarkMode)}
                        />
                    </div>

                    {/* Region Select Input */}
                    <div className="relative">
                        <FaGlobeAmericas className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <select
                            value={selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.value)}
                            required
                            className={inputClasses(isDarkMode)}
                        >
                            <option value="" disabled>Select Operational Region</option>
                            {WORLD_REGIONS.map((region) => (
                                <option key={region.value} value={region.value}>
                                    {region.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type='submit'
                        className={`w-full py-3 rounded-lg font-bold text-lg hover:cursor-pointer shadow-md transition-colors duration-200 ${isDarkMode
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                        Complete Setup
                    </button>
                </form>
            </div>
        </div>
    );
}

export default DashboardName;