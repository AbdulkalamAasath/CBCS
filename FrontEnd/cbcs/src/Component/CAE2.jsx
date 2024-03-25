import React, { useEffect, useState } from 'react'
import {useStaffAuthContext} from '../Hooks/useStaffAuthContext'
const CAE2 = () => {
  const [Data,setData] = useState([])
  const {staff} = useStaffAuthContext();
  const [loading,setLoading] = useState(true)
  const [Marks, setMarks] = useState(null);
  
  const MarkUpdate = (studentId,value) => {
    setMarks((prevMarks) => ({
        ...prevMarks,
        [studentId]: value,
      }));
  };
  useEffect(()=>
  {
    const fetchdata = async() =>
    {
      try{
      const responce = await fetch('http://localhost:4000/cbcs/staf/Attendence/'+staff.course_id,
      {headers:{'Authorization':`Bearer ${staff.token}`}})
      const json = await responce.json()
      if(responce.ok)
      {
        setData(json)
      }
    }
    catch(error){console.error();}
    finally{setLoading(false)}
  } 
    if(staff)
    {
      fetchdata()
    }
  },[setData])

  const handelsubmit = async(e) =>
  {
    e.preventDefault()
    const info = {CAE1:true,CAE2:true,SEM:false}
    const response = await fetch('http://localhost:4000/cbcs/staf/Marks/given/staffinfo/'+staff.id, {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${staff.token}`
      }  
    }
    )
    Object.entries(Marks).map(async([studentId, marks]) =>{
      const info = {Marks:marks}
      const response = await fetch('http://localhost:4000/cbcs/staf/Marks/given/'+studentId, {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${staff.token}`
      }
    })
    })
    if(response.ok)
    {window.location.reload()}
    
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  console.log(staff)
  return (
    <div>
     <h2>CAE-2</h2>
     {staff.CAE2 && <h1>MARKS ALReady GIVEN</h1>}
     {!staff.CAE2 && <form>
      <table id='Hod'>
        <thead>
          <tr>
            <th>Name</th>
            <th>REG-No</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((student) => (
            <tr key={student._id}>
              <td>{student.Name}</td>
              <td>{student.RegNo}</td>
              <td>
                <input
                  type='text'
                  onChange={(e) => MarkUpdate(student._id,e.target.value)}
                />
              </td>
            </tr>
          ))}
           <div>
           <button onClick={(e)=>handelsubmit(e)}>SUBMIT</button>
          </div>
         </tbody>
      </table>
     </form>}
    </div>
  )
}

export default CAE2;
