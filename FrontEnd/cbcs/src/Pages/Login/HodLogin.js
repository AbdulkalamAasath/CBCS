import React, { useState } from 'react'
import { useHodLogin } from '../../Hooks/useHodLogin'
import logo from './back.jpg'
import head from '../../css/head.jpg'
import { Link } from 'react-router-dom'
const StudentLogin = () => {
    const [Email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {login,error,isLoading} = useHodLogin('')
    const handelsubmit = async(e) =>
  {
    e.preventDefault()
    await login(Email,password)
  }
  return (
  <div>
    <header><Link to = '/'>HOME</Link></header>
 <div className="container">
     <div className="left-side">
         <img src={head} style={{width: 'auto', height: 'auto'}} />
     </div>
    <div className="right-side">
         <div className="form-group-6gd">
           <img src={logo} style={{width:'auto', height: 'auto'}} />
           <p className="text-2ii">
           <b>Enter your Details.</b>
            </p>
          </div>
         <div className="form-group-6gd">
            <form id="form" on onSubmit={handelsubmit}>
                <div className="form-group-6gd">
                    <label id="row1" htmlFor="Email">Email</label>
                    <input id="ip1"
                    type="text"
                    placeholder="Email" 
                    className="form-control-6at"
                    value={Email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required />
                    <div className="error" />
                    </div>
                <div className="form-group-6gd">
                    <label>Password</label>
                    <input id="Password" 
                    type="password" 
                    placeholder="Password" 
                    className="form-control-6at" 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required />
                    <div className="error" />
                </div>
             <button type="submit"
             className="btn-6pp btn-aci block-kf4"
             disabled={isLoading}>Log In</button>
            </form>
            {error && <div>{error}</div>}
      </div>
    </div>
  </div>
  </div>
  )
}

export default StudentLogin
