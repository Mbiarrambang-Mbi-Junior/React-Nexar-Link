import React from 'react'
import 
{BsGrid1X2Fill, BsFillArchiveFill, BsGraphUp, BsPeopleFill, 
  BsBellFill, BsMenuButtonWideFill, BsFillGearFill,
  BsCpuFill}
 from 'react-icons/bs'
import {Link as RouterLink} from 'react-router-dom'


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
   <aside id="sidebar" className={`shadow-xl ${openSidebarToggle ? "sidebar-responsive": ""}`}>
        <div className='sidebar-title'>
            <div className='sidebar-brand flex gap-2'>
                <BsCpuFill  className='icon_header'/>Nexar|Link
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <RouterLink to="/" className='flex gap-2'>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </RouterLink>
            </li>
            <li className='sidebar-list-item'>
                <RouterLink to={"/device-management"} className='flex gap-2'>
                    <BsFillArchiveFill className='icon'/> Device Management
                </RouterLink>
            </li>
            <li className='sidebar-list-item'>
                <RouterLink to={"/data-analytics"} className='flex gap-2'>
                    <BsGraphUp className='icon'/> Data & Analytics
                </RouterLink>
            </li>
            <li className='sidebar-list-item'>
                <RouterLink to={"/attendance"} className='flex gap-2'>
                    <BsPeopleFill className='icon'/> Attendance
                </RouterLink>
            </li>
            <li className='sidebar-list-item'>
                <RouterLink to={"/user-management"} className='flex gap-2'>
                    <BsPeopleFill className='icon'/> User Management
                </RouterLink>
            </li>
            <li className='sidebar-list-item'>
                <RouterLink to={"/alerts"} className='flex gap-2'>
                    <BsBellFill className='icon'/> Alerts
                </RouterLink>
            </li>
            <li className='sidebar-list-item'>
                <RouterLink to={"/reports"} className='flex gap-2'>
                    <BsMenuButtonWideFill className='icon'/> Reports
                </RouterLink>
            </li>
            <li className='sidebar-list-item'>
                <RouterLink to={"/settings"} className='flex gap-2'>
                    <BsFillGearFill className='icon'/> Setting
                </RouterLink>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar