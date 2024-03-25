import React from 'react'
import { Link } from 'react-router-dom'
const Marks = () => {
  return (
    <div>   
    <nav>
        <div >
        <Link to ='/staf/Home/Marks/CAE-1'>CAE-1</Link>
        </div>
        <div>
        <Link to ='/staf/Home/Marks/CAE-2'>CAE-2</Link>
        </div>
        <div >
        <Link to ='/staf/Home/Marks/SEM'>SEM</Link>
        </div>
        </nav>    
    </div>
  )
}

export default Marks
