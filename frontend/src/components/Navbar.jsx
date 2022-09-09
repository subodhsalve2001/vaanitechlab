import React from 'react'
import { Link } from 'react-router-dom'
import {index} from '../index.css'
export default function Navbar() {
  return (
    <><div className="containere">
        
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src="https://vaanitechlabs.com/public/frontend/assets/webp_images/Resize_Image/site-logo.webp" alt="" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link className="nav-link active" to="/">Home</Link>
            
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
            <Link className="nav-link" to="/contactus">ContactUs</Link>
            <Link className="nav-link" to="/service">Services</Link>
            <Link className="nav-link" to="/crud/addemployee">Add Employee</Link>
            <Link className="nav-link" to="/crud/employeedetails">Employee Details</Link>
          </div>
        </div>
      </div>
    </nav>
    </div>
    </>
  )
}
