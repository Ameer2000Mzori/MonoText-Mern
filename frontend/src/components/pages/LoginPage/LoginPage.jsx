import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function LoginPage() {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  // Define the mutation
  const { mutate: login } = useMutation({
    mutationFn: ({ email, password }) =>
      axios.post('/login', { email, password }),
    onSuccess: () => {
      toast.success('Logged in successfully')
      // Here you might also want to redirect the user or set authentication state
    },
    onError: (error) => {
      // It's good to check if error.response exists
      toast.error(
        error.response ? error.response.data.msg : 'An error occurred'
      )
    },
  })

  const loginConfirm = () => {
    login({ email: userEmail, password: userPassword })
  }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center text-center items-center bg-zinc-600">
      <div className="grid grid-row-6 gap-2 sm:w-[500px] w-[360px] h-[300px] bg-zinc-500 p-4 text-start rounded-md text-white">
        <div>Email</div>
        <input
          className="h-[30px] text-black pl-2"
          type="email" // Change type to email for appropriate keyboard and validation
          placeholder="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <div>Password</div>
        <input
          className="h-[30px] text-black pl-2"
          type="password" // Change type to password to hide input
          placeholder="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button
          className="bg-sky-900 hover:bg-sky-800 active:bg-sky-700"
          type="button"
          onClick={loginConfirm}
        >
          Submit
        </button>
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
