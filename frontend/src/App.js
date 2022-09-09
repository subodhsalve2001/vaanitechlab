import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ContactUs from './pages/ContactUs'
import AddEmployee from './pages/crud/AddEmployee'
import EmployeeDetails from './pages/crud/EmployeeDetails'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Service from './pages/Service'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/crud/addemployee" element={<AddEmployee />} />
      <Route path="/crud/employeedetails" element={<EmployeeDetails />} />

    </Routes>
    </BrowserRouter>
  )
}
