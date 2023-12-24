import { useEffect, useState } from "react"
import { useCourseContext } from "../Hooks/useCourseContext"
import { useHodAuthContext } from "../Hooks/useHodAuthContext";
const CreateCourse = () => {
  const { dispatch } = useCourseContext()
  const [CourseName, setCourseName] = useState('')
  const [Coordinator, setCoordinator] = useState('')
  const [ProvidedBy, setProvidedBy] = useState('')
  const [Seats,setSeats] = useState('')
  const [error, setError] = useState(null)
  const [stafs,setStafs] = useState([])
  const {HOD} = useHodAuthContext()
  const handleSubmit = async (e) => {
    const course = {CourseName,Coordinator,ProvidedBy,Seats}

    const response = await fetch('http://localhost:4000/cbcs/hod/create', {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${HOD.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setCourseName('')
      setCoordinator('')
      setProvidedBy('')
      setError(null)
      setSeats('')
      console.log('NEW COURSE', json)
      dispatch({type: 'CREATE_COURSE', payload: json})
    }
  }

  useEffect(() =>{
    const fetchStafs = async() =>{
    const StafInfo = await fetch('http://localhost:4000/cbcs/hod/Stafs',{
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${HOD.token}`
      }})
    const json = await StafInfo.json()
    if(StafInfo.ok)
    {
      setStafs(json)
    }
    }
    fetchStafs()
  },[])
  

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>NEW COURSE</h3>

      <label>Course Name:</label>
      <input
        id="ip" 
        type="text"
        onChange={(e) => setCourseName(e.target.value)}
        value={CourseName}
      />

      <label>Faculty</label>
      <select
      id='Coordinator'
      value={Coordinator}
      onChange={(e)=>setCoordinator(e.target.value)}
      > 
         <option value = {null} >select</option>
        {stafs.map((v)=>(
          !v.CourseHandel && <option value={v._id}>{v.Name}</option>
        ))}

      </select>
      <label>PROVIDED BY</label>
            <select
            id="Dept"
            value={ProvidedBy}
            onChange={(e)=>setProvidedBy(e.target.value)}>
               <option value = {null} >select</option>
            <option value="Department of Computer Science and Engineering">Department of Computer Science and Engineering</option>
            <option value="Department of Information Technology">Department of Information Technology</option>
            <option value="Department of Electronics and Communication Engineering">Department of Electronics and Communication Engineering</option>
            <option value="Department of Electrical and Electronics Engineering">Department of Electrical and Electronics Engineering</option>
            <option value="Department of Mechanical Engineering">Department of Mechanical Engineering</option>
            <option value="Department of BioTechnology">Department of BioTechnology</option>
            </select>
      <label>Available SEATS</label>
      <input
        id="ip" 
        type="number"
        onChange={(e) => setSeats(e.target.value)}
        value={Seats}
      />
      <button id="add">Add Course</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default CreateCourse