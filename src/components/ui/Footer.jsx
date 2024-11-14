
import { NavLink } from "react-router-dom"
export const Footer =()=>{
    return <>
     <footer className="bg-gray-800 text-white p-4 mt-auto">
         <div className="text-center">
         <p className="mt-4">Copyright @ Abc India 2024</p>
         <nav className="flex justify-center space-x-6">
        <NavLink to="/" className="hover:text-gray-300">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:text-gray-300">
          About Us
        </NavLink>
        
        <NavLink to="/contact" className="hover:text-gray-300">
          Contact Us
        </NavLink>
        <NavLink to="/login" className="hover:text-gray-300">
          Login
        </NavLink>
      </nav>
        
        <p>Practical Test Case | ADTUPTC14112024 | Your Name | Your Mobile</p>
      </div>
    </footer>
    </>
       
    
}