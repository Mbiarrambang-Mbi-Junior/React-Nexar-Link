import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import DataAnalytics from './components/DataAnalytics'
import UserManagement from './components/UserManagement'
import Alerts from './components/Alerts'
import Reports from './components/Reports'
import Settings from './components/Settings'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Attendance from './components/Attendance'


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }


  return (
    <Router>
        <div className='grid-container grid-template-col-[260px 1fr 500px 1fr]'>
            <Header OpenSidebar={OpenSidebar}/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/data-analytics" element={<DataAnalytics />} />
                <Route path="/user-management" element={<UserManagement />} />
                <Route path="/alerts" element={<Alerts />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        </div>
    </Router>
  )
}

export default App