import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavbarMenu from './NavbarMenu'
import { signOut } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const token = useSelector((state) => state.user.token)
  const toggleMenu = () => {
    setIsOpen((prv) => !prv)
  }
  const ROUTES = [
    { title: 'Home', path: '/home' },
    { title: 'About', path: '/about' },
  ]
  return (
    <nav className="bg-primary fixed w-[100%] top-0 z-[999]">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-bold text-white">My App</h1>
        </Link>
        <ul className="hidden lg:flex items-center space-x-4 list-none text-white">
          {ROUTES.map((route) => (
            <li key={route.path}>
              <Link to={route.path}>{route.title}</Link>
            </li>
          ))}
          {token && (
            <button
              onClick={() => {
                console.log('sad')
                dispatch(signOut())
                // navigate()
              }}
              type="button"
              className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-800 px-3 py-2 rounded-md "
            >
              Sign Out
            </button>
          )}
        </ul>

        <button
          onClick={toggleMenu}
          type="button"
          className="bg-transparent border border-white text-white hover:bg-white hover:text-gray-800 px-3 py-2 rounded-md lg:hidden"
        >
          {isOpen ? 'X' : 'Menu'}
        </button>
      </div>
      <NavbarMenu isOpen={isOpen} routes={ROUTES} setIsOpen={setIsOpen} />
    </nav>
  )
}

export default Navbar
