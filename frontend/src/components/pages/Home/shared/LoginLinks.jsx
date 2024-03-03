import React from 'react'
import { Link } from 'react-router-dom'

const AccountsLinks = () => {
  const pages = [
    { title: 'Login', path: '/login' },
    { title: 'Sign up', path: '/signup' },
  ]
  return (
    <ul className="flex flex-col gap-4">
      {pages.map((page) => (
        <li
          className="w-[150px] h-[40px] bg-zinc-500 hover:bg-zinc-600 active:bg-zinc-300"
          key={page.path}
        >
          <Link
            className="h-[100%] w-[100%] text-white flex flex-col text-center items-center justify-center"
            to={page.path}
          >
            {page.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default AccountsLinks
