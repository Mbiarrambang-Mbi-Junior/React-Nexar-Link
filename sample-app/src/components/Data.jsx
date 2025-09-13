import React from 'react'
import data from '../json/data.json'



function Data() {

  return (
    <div>{console.log(data)}
     <ul>
        {data.map(item =>(
        <li key={item.id}>
            {item.price},
            {item.catigory}
        </li>
     ))}
     </ul>
    </div>
  )
}

export default Data