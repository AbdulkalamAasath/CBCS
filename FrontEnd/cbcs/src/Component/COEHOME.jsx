import React from 'react'
import { useEffect, useState } from "react"
import './CreateCoursePage.css'
import CoeTable from './CoeTable'
import { useCoeLogout} from '../Hooks/useCoeLogout'
export default function COEHOME() {
  const [Dept, setDept] = useState('')
  
  
    
  
  return (
    <div>
    {!Dept &&<div className="body-C">
    <main className="main-C">
     <form className="form-C">
      <br></br>
      <label htmlFor="Dept">Select Department</label>
            <select
            id="Dept"
            value={Dept}
            onChange={(e)=>setDept(e.target.value)}>
               <option value = {null} >select</option>
            <option value="Department of Computer Science and Engineering">Department of Computer Science and Engineering</option>
            <option value="Department of Information Technology">Department of Information Technology</option>
            <option value="Department of Electronics and Communication Engineering">Department of Electronics and Communication Engineering</option>
            <option value="Department of Electrical and Electronics Engineering">Department of Electrical and Electronics Engineering</option>
            <option value="Department of Mechanical Engineering">Department of Mechanical Engineering</option>
            <option value="Department of BioTechnology">Department of BioTechnology</option>
            </select>
      <br></br>      
      <button >Show Info</button>
    </form>
    </main>
  </div>}
      {Dept && <div>
         <CoeTable Dept = {Dept} />
      </div>}
  </div>
  )
}
