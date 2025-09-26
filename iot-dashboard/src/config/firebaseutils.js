// src/config/firebaseutils.js (Example)

import { doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase'; // Ensure this path is correct

/**
 * Updates ONLY the 'status' field in the 'togglelight' collection.
 * * @param {string} deviceId - The ID of the device document (e.g., 'parlor-light').
 * @param {boolean} newStatus - The new boolean status.
 */
export const updateDeviceStatusInFirebase = async (deviceId, newStatus) => {
    try {
        // --- FIX: Targeting the 'togglelight' collection ---
        const deviceRef = doc(db, 'togglelight', deviceId); 
        
        // Use updateDoc to send ONLY the status field, which is a boolean
        await updateDoc(deviceRef, {
            status: newStatus 
        });
        
        console.log(`Firebase (togglelight): Device ${deviceId} status updated to ${newStatus}.`);
    } catch (error) {
        console.error("Error updating device status in Firebase:", error);
        throw error; 
    }
};