import React from 'react'
import { Link } from 'react-router-dom'
import './Marks.css'

const Marks = () => {
  return (
    <div>
      {/* Top navbar */}
      <nav className="top-nav">
        <div className="nav-links">
          <Link to="/staf/Home">Home</Link>
          <Link to="/staf/Home" onClick={() => alert('Logout functionality here')}>Log Out</Link>
        </div>
      </nav>

      {/* Content area */}
      <div className="content">
        <div className="marks-container">
        <nav className="marks-nav">
          <Link to='/staf/Home/Marks/CAE-1'>CAE-1</Link>
          <Link to='/staf/Home/Marks/CAE-2'>CAE-2</Link>
          <Link to='/staf/Home/Marks/SEM'>SEM</Link>
        </nav>
        </div>
      </div>

      {/* Bottom navbar */}
      <nav className="bottom-nav">
        <div className="nav-links">
          
          <span>© 2024 Sathyabama Institute of Science & Technology</span>
        </div>
      </nav>
    </div>
  )
}

export default Marks