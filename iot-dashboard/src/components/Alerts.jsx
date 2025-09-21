import React from 'react'
import { BsBellFill } from 'react-icons/bs'

function Alerts() {
  return (
    <div> <BsBellFill size={24} className='icon' />Alerts
      <div className="alerts bg-red-500 m-5 p-4 rounded-lg shadow-lg w-[1000px] h-[100px] flex gap-4 items-center justify-center">
       
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dicta quam voluptatem? Perspiciatis nemo rerum, ipsa exercitationem culpa, dolor repudiandae, impedit animi labore harum aliquam? Autem accusamus incidunt magni sint?</p>
      </div>
    </div>
  )
}

export default Alerts