import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../shared/Card'
import TextInput from '../shared/TextInput'
import { EMAILPATTERN, PASSWORDPATTERN, USERNAMEPATTERN } from '../shared/enum'

export default function Signup() {
  const [form, setForm] = useState({
    username: {
      val: '',
      pattern: USERNAMEPATTERN,
      title: 'Username',
      errMsg: 'username is required min=3chars max=30chars',
    },
    email: {
      val: '',
      pattern: EMAILPATTERN,
      title: 'Email',
      errMsg: 'Email is required',
    },
    password: {
      val: '',
      pattern: PASSWORDPATTERN,
      title: 'Password',
      errMsg: 'Password is required',
    },
  })
  return (
    <div className="min-h-[100vh] flex justify-center items-center text-primary_c bg-zinc-600">
      <Card title="Sign Up" className="max-w-[500px] w-full bg-zinc-500">
        <TextInput
          title={form.username.title}
          errMsg={form.username.errMsg}
          input={form.username.val}
          updateInput={(input) => {
            setForm((prv) => ({
              ...prv,
              username: { ...prv.username, val: input },
            }))
          }}
          pattern={form.username.pattern}
        />
        <TextInput
          title={form.email.title}
          errMsg={form.email.errMsg}
          input={form.email.val}
          updateInput={(input) => {
            setForm((prv) => ({
              ...prv,
              email: { ...prv.email, val: input },
            }))
          }}
          pattern={form.email.pattern}
        />
        <TextInput
          title={form.password.title}
          errMsg={form.password.errMsg}
          input={form.password.val}
          updateInput={(input) => {
            setForm((prv) => ({
              ...prv,
              password: { ...prv.password, val: input },
            }))
          }}
          pattern={form.password.pattern}
        />
        <button
          type="button"
          className="text-center bg-blue-600 text-white w-full rounded p-2"
        >
          Submit
        </button>
        <hr className="my-4" />
        <div className="text-md py-2">
          <span>
            Already have an account?{' '}
            <Link to="/signin" className="text-blue-900">
              Sign In
            </Link>
          </span>
        </div>
      </Card>
    </div>
  )
}
