import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
        {/* Navbar */}
      <div className="navbar">
       <div className="logo"> <img src="/logo.png" alt="Logo" /></div>

       <div className="links">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>MEMBER</li>
        <li>EVENTS</li>
        <li>TESTIMONAL</li>
        <li>CONTACT</li>
       </div>
       </div>
    </div>
  )
}

export default Navbar
