import React from 'react'
// import { Link } from 'react-router-dom'
import AccountsLinks from './shared/LoginLinks'
import { useSelector } from 'react-redux'
export default function Home() {
  const user = useSelector((state) => state.user)

  return (
    <div className="h-[100vh] w-[100vw] flex flex-row text-center items-center justify-center gap-4">
      {/* this is left side  */}
      <div className="w-[15%] h-[80%] lg:flex hidden flex-col text-center items-center justify-center border-solid border-2">
        {user.token ? <>{user.username}</> : <AccountsLinks />}
      </div>
      {/*  this is the mid and its for scroll */}
      <div className="n w-[80%] h-[80%] lg:w-[50%] flex flex-col text-center items-center justify-center bg-sky-300 border-solid border-2 border-sky-500 ">
        <h1>this is mid </h1>
        <h1>50% / 80%</h1>
      </div>
      {/* this is right side and mosly will be used for sugustions accounts */}
      <div className="w-[15%] h-[80%] lg:flex hidden flex-col text-center items-center justify-center bg-sky-300 border-solid border-2 border-sky-500 ">
        <h1>this is Right side</h1>
        <h1>10% / 80%</h1>
      </div>
    </div>
  )
}
