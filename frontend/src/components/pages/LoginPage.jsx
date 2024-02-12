import React, { useState } from 'react'

export default function LoginPage() {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const loginComfirm = () => {
    console.log('user name', userName)
    console.log('user email', userEmail)
  }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center text-center items-center bg-zinc-600">
      <div className="grid grid-row-6 gap-2 sm:w-[500px] w-[360px]  h-[300px] bg-zinc-500 p-4 text-start rounded-md text-white">
        <div>email</div>
        <input
          className="h-[30px] text-black"
          type="text"
          placeholder="username / email"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <div>passowrd</div>
        <input
          className="h-[30px] text-black"
          type="text"
          placeholder="password"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <button
          className="bg-sky-900 hover:bg-sky-800 active:bg-sky-700"
          type="button"
          onClick={loginComfirm}
        >
          submit
        </button>
        <p className="text-[0.9rem]">
          <b className=" underline text-blue-800"> New here? </b> Sign up now to
          get started!
        </p>
      </div>
    </div>
  )
}
