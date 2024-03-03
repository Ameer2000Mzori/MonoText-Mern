import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function LoginPage() {
  const queryClient = useQueryClient()

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const { mutate: login, isLoading } = useMutation({
    mutationFn: (userEmail, userPassword) =>
      axios.post('http://localhost:4000/user', {
        password: userPassword,
        email: userEmail,
      }),
    onSuccess: () => {
      toast.success('logged in successfully')
      setUserEmail('')
      setUserPassword('')
    },
    onError: (error) => {
      toast.error(error.response.data.msg)
    },
  })

  const loginComfirm = () => {
    login(userEmail, userPassword)
  }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center text-center items-center bg-zinc-600">
      <div className="grid grid-row-6 gap-2 sm:w-[500px] w-[360px]  h-[300px] bg-zinc-500 p-4 text-start rounded-md text-white">
        <div>email</div>
        <input
          className="h-[30px] text-black pl-2"
          type="text"
          placeholder="email"
          value={userName}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <div>passowrd</div>
        <input
          className="h-[30px] text-black pl-2"
          type="text"
          placeholder="password"
          value={userEmail}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button
          className="bg-sky-900 hover:bg-sky-800 active:bg-sky-700"
          type="button"
          onClick={loginComfirm}
        >
          submit
        </button>
        <p className="text-[0.9rem]">
          <b> New here? </b>
          <Link className=" underline text-sky-500" to="/signup">
            {' '}
            Sign up now to{' '}
          </Link>
          get started!
        </p>
      </div>
    </div>
  )
}
