import React from 'react'
import { useHodAuthContext } from "../../Hooks/useHodAuthContext"
import {Link} from 'react-router-dom'
import {useHodLogout} from "../../Hooks/useHodLogout"
import { useEffect } from 'react'
import { useCourseContext } from '../../Hooks/useCourseContext'
import CreateCourse from '../../Component/CreateCourse'
import HodTable from '../../Component/HodTable'
import '../../css/HodHome.css'
const HodHome = () => {
  const {HOD} = useHodAuthContext()
  console.log(HOD)
  const {logout} = useHodLogout()
  const handelclick = async() =>
  {
    logout()
  }
  const  {course,dispatch} = useCourseContext() 
  useEffect(() =>
  {
  const fetchcourse = async() =>{
  const response = await fetch('http://localhost:4000/cbcs/hod/course',
  {headers:{'Authorization':`Bearer ${HOD.token}`}})
  const json = await response.json()
  console.log(json)
  if(response.ok){
    dispatch({type:'SET_COURSE',payload:json})
  }
  }
  if(HOD){
    fetchcourse()
  }
},[dispatch,HOD])
  return (
    <div>
      {HOD &&
        (<div>
        <button onClick={handelclick} id="Logout">LOG OUT</button>
        <p className='info'>{HOD.Email}</p>
        <p className='info'>{HOD.Name}</p>
        </div>)}
        <Link to='/hod/student_info'><div>Student Info</div></Link>
        <div>
        {course &&
        <HodTable 
        />}
        </div>
        <div>
        <CreateCourse />
        </div>
    </div>
  )
}

export default HodHome
