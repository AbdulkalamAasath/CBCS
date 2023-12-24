import React from 'react'
import HodLogin from '../Login/HodLogin'
import { Link } from 'react-router-dom'

const Hod = () => {
    return (
      <div>
        <header>
          <Link to = '/'>HOME</Link>
        </header>
        <HodLogin />
      </div>
    )
}

 
export default Hod;
