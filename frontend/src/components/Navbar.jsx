import React from 'react'
import { Link } from 'react-router-dom' // Install react-router-dom for navigation

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-bold text-white">My App</h1>
        </Link>
        <ul className="hidden lg:flex space-x-4 list-none text-white">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
        <button
          type="button"
          className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-800 px-3 py-2 rounded-md lg:hidden"
        >
          Menu
        </button>
      </div>
    </nav>
  )
}

export default Navbar
