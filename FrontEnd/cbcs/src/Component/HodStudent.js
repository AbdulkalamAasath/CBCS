import React, { useEffect, useState } from 'react'
import { useHodAuthContext } from '../Hooks/useHodAuthContext'
const HodStudent = () => {
    const {HOD} = useHodAuthContext() 
    const [Data,setData] = useState([])
    useEffect(()=>{
      const fetchdata = async() => {
        const reqbody = {"Dept":HOD.Dept}
        const responce = await fetch('http://localhost:4000/cbcs/hod/studinfo',
        {
          method:'POST',
          body:JSON.stringify(reqbody),
          headers:{'Content-Type':'application/json',
            'Authorization':`Bearer ${HOD.token}`}
        })
        const json = await responce.json()
        if(responce.ok)
        {
           setData(json)
        }

      }
      fetchdata()
    },[])
  return (
    <div>
       <table id='Hod'>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>RegNo</th>
                  <th>Section</th>
                  <th>Regestered course</th>
              </tr>
          </thead>
          <tbody>
              {Data.map((value)=>(
                  <tr>
                      <td>{value.Name}</td>
                      <td>{value.RegNo}</td>
                      <td>A1</td>
                      <td>{value.CourseInfo ? value.CourseInfo.CourseName : 'N/A'}</td>
                  </tr>
                  ))}
          </tbody>
          </table>
    </div>
  )
              }

export default HodStudent
