import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import ErrorMessage from './hooks/ErrorMessage.jsx'
import { validationSchema } from '../../shared/validationSchema.js'

import {
  StyledFormWrap,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledInputsWrap,
} from './hooks/StyledComponents.jsx'
import AuthOperations from '../../../api/AuthOperations.jsx'
import { useDispatch } from 'react-redux'
import { signIn } from '../../../features/user/userSlice.js'

import NotificationCard from '../../shared/NotificationCard.jsx'

export default function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { mutate, isPending, isError } = AuthOperations({
    onSuccess: (newData) => {
      dispatch(signIn({ ...newData.data, token: newData.token }))
      setTimeout(() => navigate('/'), 500)
      NotificationCard({ arg: 'logged in successfully' })
    },
  })
  useEffect(() => {
    console.log(isPending)
  }, [isPending])
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      mutate([
        {
          method: 'POST',
          url: 'login',
          email: values.email,
          password: values.password,
        },
      ])
    },
  })

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center text-center items-center bg-zinc-600">
      <StyledFormWrap onSubmit={formik.handleSubmit}>
        <StyledInputsWrap>
          <StyledLabel>Email</StyledLabel>
          <StyledInput
            id="email"
            name="email"
            type="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
        </StyledInputsWrap>
        <StyledInputsWrap>
          <StyledLabel>Password</StyledLabel>
          <StyledInput
            id="password"
            name="password"
            type="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessage children={formik.errors.password} />
          ) : null}
        </StyledInputsWrap>

        <StyledButton type="submit">
          {isPending ? 'loading...' : 'Submit'}
        </StyledButton>
        {isError && (
          <p className="text-red-500">
            Error: {isError?.response?.data?.message || 'Login failed'}
          </p>
        )}
        <p className=" md:text-[0.9rem] md:w-[60%] w-[90%] flex flex-row text-start items-center gap-[5px]  text-[11px]">
          <b>New here?</b>
          <Link className="underline text-sky-500" to="/signup">
            Sign up now
          </Link>
          to get started!
        </p>
      </StyledFormWrap>
    </div>
  )
}
