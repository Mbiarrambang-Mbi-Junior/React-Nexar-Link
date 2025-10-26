import React from 'react'
import nexarlinkIcon from '/src/assets/NexarLink.png'
function NexarLink() {
  return (
   <div className="flex items-center space-x-2">
         {/* 2. Use the SVG in an <img> tag */}
         <img 
           src={nexarlinkIcon} 
           alt="Nexar|Link Icon" 
           className="w-8 h-8"
         />
       </div>
  )
}

export default NexarLink