import React from 'react'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-content-between align-items-center bg-black-alpha-90'>
        <Link to='/' style={{textDecoration:'none'}}>
           <h1 className='font-bold text-white m-2'>Portfolio</h1>
        </Link>
        <ul className='flex mr-5'>
            <li className='p-3' style={{listStyle: 'none'}}>
                <Link to='/' style={{textDecoration:'none'}}><span className='font-bold text-white'>Home</span></Link>
            </li>
            <li className='p-3' style={{listStyle: 'none'}}>
                <Link to='/projects' style={{textDecoration:'none'}}><span className='font-bold text-white'>Project</span></Link>
            </li>
            <li className='p-3' style={{listStyle: 'none'}}>
                <Link to='/about' style={{textDecoration:'none'}}><span className='font-bold text-white'>About</span></Link>
            </li>
            <li className='p-3' style={{listStyle: 'none'}}>
                <Link to='/contact' style={{textDecoration:'none'}}><span className='font-bold text-white'>Contact</span></Link>
            </li>
            
        </ul>
    </div>
  )
}

export default Navbar
