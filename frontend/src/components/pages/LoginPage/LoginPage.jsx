import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from './hooks/LoginLogic.jsx'

export default function LoginPage() {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  // Destructure the login function from the useLogin hook
  const { login, isError, error } = useLogin()

  // Log errors for debugging purposes
  console.log('isError', isError)
  console.log('error', error && error.message)

  // Define the submit handler
  const handleSubmit = () => {
    login({
      data: { email: userEmail, password: userPassword },
    })
  }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center text-center items-center bg-zinc-600">
      <div className="grid grid-row-6 gap-2 sm:w-[500px] w-[360px] h-[300px] bg-zinc-500 p-4 text-start rounded-md text-white">
        <div>Email</div>
        <input
          className="h-[30px] text-black pl-2"
          type="email"
          placeholder="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <div>Password</div>
        <input
          className="h-[30px] text-black pl-2"
          type="password"
          placeholder="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button
          className="bg-sky-900 hover:bg-sky-800 active:bg-sky-700"
          type="button"
          onClick={handleSubmit} // Use the handleSubmit function here
        >
          Submit
        </button>
        {isError && (
          <p className="text-red-500">
            Error: {error?.response?.data?.message || 'Login failed'}
          </p>
        )}
        <p className="text-[0.9rem]">
          <b>New here?</b>
          <Link className="underline text-sky-500" to="/signup">
            Sign up now
          </Link>
          to get started!
        </p>
      </div>
    </div>
  )
}
