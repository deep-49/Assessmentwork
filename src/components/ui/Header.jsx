import { NavLink } from "react-router-dom"

export const Header=()=>{
    return(
        <header className=" bg-gray-800 text-white p-4 flex justify-between  ">
            <nav className="flex space-x-6 items-center">
                <NavLink to="/"className="hover:text-grey-300" >Home</NavLink>
                <NavLink to="/about"className="hover:text-grey-300">About Us</NavLink>
                <NavLink to ="/contact"className="hover:text-grey-300">Contact US</NavLink>
                <NavLink to ="/login"className="hover:text-grey-300">Login</NavLink>
            </nav>
        </header>
    )
}