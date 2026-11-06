import React from "react";
import logo from "../../assets/digital.png"
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <header>
        <nav className='navbar'>
          <div className='logo'>
            <img src={logo} alt="" height={50} width={50} />
            <div >
              <div className="colour">IGITAL</div>
              <div className="colour">MPACTS</div>
            </div>
          </div>
          <ul className='listitems'>
            <li><Link to="/" className='yellow' >Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
             <li><Link to="/portfolio">Portfolio</Link></li> 
          </ul>
          <a href="#contact" className='uff'>Contact Us
          </a>
        </nav>
      </header>

    </>
  )
}
export default Navbar












