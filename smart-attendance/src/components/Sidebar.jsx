import React from "react";
import { NavLink } from "react-router-dom"; // Changed Link to NavLink
import { BsGrid, BsPerson, BsPeopleFill, BsGearFill, BsMotherboardFill } from "react-icons/bs";

function Sidebar() {
  // Define a helper function to keep the JSX clean
  const navStyles = ({ isActive }) => 
    `flex gap-3 items-center p-2 rounded-lg transition-colors ${
      isActive ? "bg-green-500 text-white" : "hover:bg-gray-600 text-gray-300"
    }`;

  return (
    <aside className="side-bar bg-gray-700 text-white p-4 h-screen w-64">
      <div className="logo bg-green-400 rounded-lg mb-6 flex p-4 items-center gap-2">
        <BsMotherboardFill />
        <span className="font-bold text-xl">Nexar</span>
      </div>
      
      <nav>
        <ul className="flex flex-col gap-2 list-none p-0">
          <li>
            <NavLink to="/" className={navStyles}>
              <BsGrid /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/attendance" className={navStyles}>
              <BsPerson /> Attendance
            </NavLink>
          </li>
          <li>
            <NavLink to="/students" className={navStyles}>
              <BsPeopleFill /> Students
            </NavLink>
          </li>
          <li>
            <NavLink to="/teachers" className={navStyles}>
              <BsPeopleFill /> Teachers
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={navStyles}>
              <BsGearFill /> Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;