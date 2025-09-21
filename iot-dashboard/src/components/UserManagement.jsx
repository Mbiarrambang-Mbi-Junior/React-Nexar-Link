import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'

function UserManagement() {
  return (
    <div>UserManagement
      <div className="userprofile bg-red-500 m-5 p-4 rounded-lg shadow-lg w-[400px] h-[200px] flex gap-4 items-center justify-center">
        <img src="" alt="" />
        <BsPersonCircle className='icon' />
        <p>User Name</p>
      </div>
    </div>
  )
}

export default UserManagement