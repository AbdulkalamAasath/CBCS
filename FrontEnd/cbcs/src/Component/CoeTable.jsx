import React, { useEffect, useState } from 'react';
import './StudentInfo.css'; // Import CSS file
import logo from './logo.jpeg'; // Import logo image
import { useCoeAuthContext } from "../Hooks/UseCoeAuthContext"


const CoeTable = ({Dept}) => {
    const {COE} = useCoeAuthContext();
    const [data, setData] = useState([]);
    const ip = {"Dept":Dept}

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:4000/cbcs/COE/getstudinfo`, {
                method: 'POST',
                body: JSON.stringify(ip),
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization':`Bearer ${COE.token}`
                            }
        });
            const json = await response.json();
            if (!response.ok) {
                console.log("Error in response");
            }
            if (response.ok) {
                setData(json);
            }
        }
        fetchData();
    }, [Dept]);
    console.log(data)
    console.log(Dept)
  return (
    <div className="student-container">
                    {data.map((value, index) => (
                        <div className="student-details" key={index}>
                            <img src={value.profilePic} alt="Student Profile" className="profile-pic" />
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Name:</td>
                                        <td>{value.Name}</td>
                                    </tr>
                                    <tr>
                                        <td>Register Number:</td>
                                        <td>{value.RegNo}</td>
                                    </tr>

                                    <tr>
                                        <td>Gender:</td>
                                        <td>{value.Gender}</td>
                                    </tr>
                                    <tr>
                                        <td>Date of Birth:</td>
                                        <td>{value.DOB}</td>
                                    </tr>
                                    <tr>
                                        <td>Department:</td>
                                        <td>{value.Dept}</td>
                                    </tr>
                                    <tr>
                                        <td>Course:</td>
                                        <td>{value.CourseInfo ?value.CourseInfo.CourseName  : "Not Registered"}</td>
                                    </tr>
                                    <tr>
                                        <td>Marks:</td>
                                        <td>{value.Marks.CAE1}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
  )
}

export default CoeTable
