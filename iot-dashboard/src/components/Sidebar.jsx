import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import {BsGrid1X2Fill, BsGraphUp, BsPerson, BsPeopleFill, 
  BsBellFill, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs';
import { FaBolt } from 'react-icons/fa';

function Sidebar({ open }) {
  const location = useLocation();

  const getActiveClass = (path) => {
    return location.pathname === path 
      ? 'bg-gray-100 text-blue-500' 
      : 'text-gray-600';
  };

  return (
    <aside className="h-full overflow-y-auto transition-all duration-500 p-4">
      <ul className='p-0 list-none'>
        <li className={`sidebar-list-item p-5 text-lg hover:cursor-pointer hover:bg-gray-100 rounded-lg transition-colors ${getActiveClass('/')}`}>
          <RouterLink to="/" className='flex gap-2 items-center font-semibold'>
            <BsGrid1X2Fill className='icon'/> {open && 'Dashboard'}
          </RouterLink>
        </li>
        <li className={`sidebar-list-item p-5 text-lg hover:cursor-pointer hover:bg-gray-100 rounded-lg transition-colors ${getActiveClass('/power')}`}>
          <RouterLink to="/power" className='flex gap-2 items-center font-semibold'>
            <FaBolt className='icon'/> {open && 'Power'}
          </RouterLink>
        </li>
        <li className={`sidebar-list-item p-5 text-lg hover:cursor-pointer hover:bg-gray-100 rounded-lg transition-colors ${getActiveClass('/data-analytics')}`}>
          <RouterLink to="/data-analytics" className='flex gap-2 items-center font-semibold'>
            <BsGraphUp className='icon'/> {open && 'Data & Analytics'}
          </RouterLink>
        </li>
        <li className={`sidebar-list-item p-5 text-lg hover:cursor-pointer hover:bg-gray-100 rounded-lg transition-colors ${getActiveClass('/user-management')}`}>
          <RouterLink to="/user-management" className='flex gap-2 items-center font-semibold'>
            <BsPeopleFill className='icon'/> {open && 'User Management'}
          </RouterLink>
        </li>
        <li className={`sidebar-list-item p-5 text-lg hover:cursor-pointer hover:bg-gray-100 rounded-lg transition-colors ${getActiveClass('/attendance')}`}>
          <RouterLink to="/attendance" className='flex gap-2 items-center font-semibold'>
            <BsPerson className='icon'/> {open && 'Attendance'}
          </RouterLink>
        </li>
        <li className={`sidebar-list-item p-5 text-lg hover:cursor-pointer hover:bg-gray-100 rounded-lg transition-colors ${getActiveClass('/reports')}`}>
          <RouterLink to="/reports" className='flex gap-2 items-center font-semibold'>
            <BsMenuButtonWideFill className='icon'/> {open && 'Reports'}
          </RouterLink>
        </li>
        <li className={`sidebar-list-item p-5 text-lg hover:cursor-pointer hover:bg-gray-100 rounded-lg transition-colors ${getActiveClass('/alerts')}`}>
          <RouterLink to="/alerts" className='flex gap-2 items-center font-semibold'>
            <BsBellFill className='icon'/> {open && 'Alerts'}
          </RouterLink>
        </li>
        <li className={`sidebar-list-item relative bottom-0 p-5 text-lg hover:cursor-pointer hover:bg-gray-100 rounded-lg transition-colors ${getActiveClass('/setting')}`}>
          <RouterLink to="/setting" className='flex gap-2 items-center font-semibold'>
            <BsFillGearFill className='icon'/> {open && 'Settings'}
          </RouterLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;