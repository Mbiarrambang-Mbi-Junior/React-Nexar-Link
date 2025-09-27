import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { FaBolt, FaBatteryFull, FaMoneyBillWave, FaCreditCard, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const Power = ({ isDarkMode }) => {
    // State variables
    const [totalPowerUsed, setTotalPowerUsed] = useState(0);
    const [meterBalance, setMeterBalance] = useState(250);
    const [powerRate, setPowerRate] = useState(0.5);
    const [rechargeAmount, setRechargeAmount] = useState('');
    const [isRecharging, setIsRecharging] = useState(false);
    const [rechargeSuccess, setRechargeSuccess] = useState(false);

    // Form data for the recharge card
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        expiry: '',
        cvv: '',
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTotalPowerUsed(prevUsed => prevUsed + powerRate);
            setMeterBalance(prevBalance => Math.max(0, prevBalance - powerRate));
        }, 1000);

        return () => clearInterval(interval);
    }, [powerRate]);

    const handleRecharge = () => {
        const amount = parseFloat(rechargeAmount);
        if (amount > 0) {
            setMeterBalance(prevBalance => prevBalance + amount);
            setRechargeSuccess(true);
            setRechargeAmount('');
            setTimeout(() => {
                setRechargeSuccess(false);
            }, 3000);
        }
    };

    const handleCardPayment = (e) => {
        e.preventDefault();
        const amount = parseFloat(rechargeAmount);
        if (amount > 0 && cardDetails.cardNumber && cardDetails.expiry && cardDetails.cvv) {
            setIsRecharging(true);
            setTimeout(() => {
                setMeterBalance(prevBalance => prevBalance + amount);
                setIsRecharging(false);
                setRechargeSuccess(true);
                setRechargeAmount('');
                setCardDetails({ cardNumber: '', expiry: '', cvv: '' });
                setTimeout(() => {
                    setRechargeSuccess(false);
                }, 3000);
            }, 2000); // Simulate network delay
        }
    };

    const totalCapacity = 250;
    const percentageUsed = Math.min(100, (totalPowerUsed / totalCapacity) * 100);

    const chartData = [
        {
            name: 'Power Used',
            uv: percentageUsed,
            fill: '#8884d8',
        },
    ];

    const data = [
        { name: 'Jan', uv: 4000, pv: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398 },
        { name: 'Mar', uv: 2000, pv: 9800 },
        { name: 'Apr', uv: 2780, pv: 3908 },
        { name: 'May', uv: 1890, pv: 4800 },
        { name: 'Jun', uv: 2390, pv: 3800 },
        { name: 'Jul', uv: 3490, pv: 4300 },
        { name: 'Aug', uv: 3490, pv: 4300 },
        { name: 'Sep', uv: 3490, pv: 4300 },
        { name: 'Oct', uv: 3490, pv: 4300 },
        { name: 'Nov', uv: 3490, pv: 4300 },
        { name: 'Dec', uv: 3490, pv: 4300 },
    ];

    return (
        <div className={`container mx-auto p-4 sm:p-6 ${isDarkMode ? 'dark:bg-gray-900 dark:text-gray-100' : ''}`}>
            {/* ✅ Applied dark mode background and shadow */}
            <div className={`flex flex-col md:flex-row items-center justify-around p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl dark:shadow-2xl mb-8`}>
                {/* Chart Section */}
                <div className="relative w-full md:w-1/2 flex items-center justify-center p-4 bg-white">
                    <ResponsiveContainer width="100%" height={200}>
                        <RadialBarChart
                            innerRadius="60%"
                            outerRadius="90%"
                            data={chartData}
                            startAngle={90}
                            endAngle={450}
                        >
                            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                            <RadialBar
                                minAngle={15}
                                label={{ position: 'insideStart', fill: '#fff' }}
                                background
                                clockWise
                                dataKey='uv'
                                cornerRadius={10}
                            />
                            <text
                                x="50%" y="45%"
                                textAnchor="middle" dominantBaseline="middle"
                                // ✅ Applied dark mode text color
                                className="text-4xl font-bold text-gray-800 dark:fill-gray-100"
                            >
                                {`${Math.round(percentageUsed)}%`}
                            </text>
                            <text
                                x="50%" y="65%"
                                textAnchor="middle" dominantBaseline="middle"
                                className="text-lg text-gray-500 dark:fill-gray-400"
                            >
                                Power Used
                            </text>
                        </RadialBarChart>
                    </ResponsiveContainer>
                </div>
                {/* Calculation and Information Section */}
                <div className="w-full md:w-1/2 p-4">
                    {/* ✅ Applied dark mode text color */}
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Meter Summary</h2>
                    <div className="space-y-4">
                        {/* ✅ Applied dark mode background and text color */}
                        <div className="flex items-center p-4 bg-blue-50 dark:bg-gray-700 rounded-lg shadow-sm bg-white">
                            <FaBolt className="text-3xl text-blue-500 mr-4" />
                            <div>
                                <p className="text-gray-600 dark:text-gray-300 font-medium">Total Power Consumed</p>
                                <p className="text-xl font-semibold text-blue-700">{totalPowerUsed.toFixed(2)} kWh</p>
                            </div>
                        </div>
                        {/* ✅ Applied dark mode background and text color */}
                        <div className="flex items-center p-4 bg-green-50 dark:bg-gray-700 rounded-lg shadow-sm">
                            <FaBatteryFull className="text-3xl text-green-500 mr-4" />
                            <div>
                                <p className="text-gray-600 dark:text-gray-300 font-medium">Remaining Balance</p>
                                <p className="text-xl font-semibold text-green-700">{meterBalance.toFixed(2)} kWh</p>
                            </div>
                        </div>
                        {/* ✅ Applied dark mode background and text color */}
                        <div className="flex items-center p-4 bg-yellow-50 dark:bg-gray-700 rounded-lg shadow-sm">
                            <FaMoneyBillWave className="text-3xl text-yellow-500 mr-4" />
                            <div>
                                <p className="text-gray-600 dark:text-gray-300 font-medium">Current Power Rate</p>
                                <p className="text-xl font-semibold text-yellow-700">{powerRate} kWh/s (simulated)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Power Rate Charts Section */}
            <div className='power-rate-chart charts grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>
                {/* Chart 1: BarChart */}
                {/* ✅ Applied dark mode background and shadow */}
                <div className="rounded-lg shadow-md dark:shadow-xl p-4 bg-white dark:bg-gray-800 h-96">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Monthly Consumption</h3>
                    <ResponsiveContainer width="100%" height="85%">
                        <BarChart data={data}>
                            {/* ✅ Applied conditional stroke color */}
                            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#4b5563' : '#e5e7eb'} />
                            {/* ✅ Applied conditional tick and axis colors */}
                            <XAxis dataKey="name" tick={{ fill: isDarkMode ? '#f3f4f6' : '#6b7280' }} axisLine={{ stroke: isDarkMode ? '#4b5563' : '#e5e7eb' }} />
                            <YAxis tick={{ fill: isDarkMode ? '#f3f4f6' : '#6b7280' }} axisLine={{ stroke: isDarkMode ? '#4b5563' : '#e5e7eb' }} />
                            {/* ✅ Applied conditional tooltip styling */}
                            <Tooltip contentStyle={{ background: isDarkMode ? '#374151' : '#ffffff', border: isDarkMode ? '1px solid #4b5563' : '1px solid #e5e7eb', color: isDarkMode ? '#f3f4f6' : '#1f2937' }}/>
                            {/* ✅ Applied conditional legend styling */}
                            <Legend wrapperStyle={{ color: isDarkMode ? '#f3f4f6' : '#374151' }}/>
                            <Bar dataKey="pv" fill="#8884d8" name="Consumed" />
                            <Bar dataKey="uv" fill="#82ca9d" name="Generated" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                {/* Chart 2: LineChart */}
                {/* ✅ Applied dark mode background and shadow */}
                <div className="rounded-lg shadow-md dark:shadow-xl p-4 bg-white dark:bg-gray-800 h-96">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Power Price Trend</h3>
                    <ResponsiveContainer width="100%" height="85%">
                        <LineChart data={data}>
                            {/* ✅ Applied conditional stroke color */}
                            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#4b5563' : '#e5e7eb'} />
                            {/* ✅ Applied conditional tick and axis colors */}
                            <XAxis dataKey="name" tick={{ fill: isDarkMode ? '#f3f4f6' : '#6b7280' }} axisLine={{ stroke: isDarkMode ? '#4b5563' : '#e5e7eb' }} />
                            <YAxis tick={{ fill: isDarkMode ? '#f3f4f6' : '#6b7280' }} axisLine={{ stroke: isDarkMode ? '#4b5563' : '#e5e7eb' }} />
                            {/* ✅ Applied conditional tooltip styling */}
                            <Tooltip contentStyle={{ background: isDarkMode ? '#374151' : '#ffffff', border: isDarkMode ? '1px solid #4b5563' : '1px solid #e5e7eb', color: isDarkMode ? '#f3f4f6' : '#1f2937' }}/>
                            {/* ✅ Applied conditional legend styling */}
                            <Legend wrapperStyle={{ color: isDarkMode ? '#f3f4f6' : '#374151' }}/>
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} name="Avg Price" />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" name="Peak Price" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            
            {/* Subscription and Payment Section */}
            <div className='subscribtion charts grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8'>
                {/* Recharge Card 1 */}
                {/* ✅ Applied dark mode background and shadow */}
                <div className='p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-xl'>
                    {/* ✅ Applied dark mode text color */}
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                        <FaCreditCard className="mr-2 text-blue-600" />
                        Recharge Your Meter
                    </h2>
                    {/* ✅ Applied dark mode text color */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Enter the amount of power (in kWh) you want to add to your meter.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <input
                            type="number"
                            value={rechargeAmount}
                            onChange={(e) => setRechargeAmount(e.target.value)}
                            placeholder="Enter amount in kWh"
                            // ✅ Applied dark mode input styling
                            className="flex-grow p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
                        />
                        <button
                            onClick={handleRecharge}
                            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                        >
                            Recharge Now
                        </button>
                    </div>
                    {rechargeSuccess && (
                        <p className="mt-4 text-green-600 font-semibold flex items-center animate-fade-in-up">
                            <FaCheckCircle className="mr-2" />
                            Meter successfully recharged!
                        </p>
                    )}
                </div>

                {/* Recharge Card 2 */}
                {/* ✅ Applied dark mode background and shadow */}
                <div className='p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-xl'>
                    {/* ✅ Applied dark mode text color */}
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                        <FaCreditCard className="mr-2 text-purple-600" />
                        Online Power Recharge
                    </h2>
                    {/* ✅ Applied dark mode text color */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Enter your payment details to top up your meter.
                    </p>
                    <form onSubmit={handleCardPayment} className="space-y-4">
                        <div>
                            {/* ✅ Applied dark mode label text color */}
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                                Recharge Amount (kWh)
                            </label>
                            <input
                                type="number"
                                value={rechargeAmount}
                                onChange={(e) => setRechargeAmount(e.target.value)}
                                placeholder="e.g., above >= 1000"
                                // ✅ Applied dark mode input styling
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-100"
                                required
                            />
                        </div>
                        <div>
                            {/* ✅ Applied dark mode label text color */}
                            <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                                Number
                            </label>
                            <input
                                type="text"
                                value={cardDetails.cardNumber}
                                onChange={(e) => setCardDetails({...cardDetails, cardNumber: e.target.value})}
                                placeholder="+237 679724759"
                                // ✅ Applied dark mode input styling
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-100"
                                required
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="w-full sm:w-1/2">
                                {/* ✅ Applied dark mode label text color */}
                                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={cardDetails.expiry}
                                    onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                                    placeholder="Password"
                                    // ✅ Applied dark mode input styling
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-100"
                                    required
                                />
                            </div>
                            <div className="w-full sm:w-1/2">
                                {/* ✅ Applied dark mode label text color */}
                                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                                    Meter number
                                </label>
                                <input
                                    type="number"
                                    value={cardDetails.cvv}
                                    onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                                    placeholder="Enter meter number"
                                    // ✅ Applied dark mode input styling
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-gray-100"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                            disabled={isRecharging}
                        >
                            {isRecharging ? (
                                <FaSpinner className="animate-spin inline-block mr-2" />
                            ) : (
                                <FaCreditCard className="inline-block mr-2" />
                            )}
                            {isRecharging ? 'Processing...' : 'Pay Now'}
                        </button>
                    </form>
                    {rechargeSuccess && (
                        <p className="mt-4 text-green-600 font-semibold flex items-center">
                            <FaCheckCircle className="mr-2" />
                            Payment successful! Meter recharged.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Power;