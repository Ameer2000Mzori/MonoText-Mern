import React from 'react'
import { Link } from 'react-router-dom'

const NavbarMenu = ({ isOpen, routes, setIsOpen }) => {
  return (
    <div
      className={`z-50 transition-all w-full lg:hidden duration-300 ${
        isOpen ? 'block h-screen' : 'hidden'
      }`}
    >
      <ul className={`bg-primary ${isOpen ? 'block' : 'hidden'}`}>
        {routes.map((route) => (
          <li key={route.path} className="p-4 hover:bg-primary text-white">
            <Link to={route.path} onClick={() => setIsOpen(false)}>
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavbarMenu
