import React from 'react'
import '../assets/navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>Hotel Booking</span>
            <div className='navItems'>
                <button className='navBtn'>Register</button>
                <button className='navBtn'>Log in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
