import React from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from './hooks/LoginLogic.jsx'
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

export default function LoginPage() {
  const { login, isError, error } = useLogin()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login({
        data: values,
      })
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

        <StyledButton type="submit">Submit</StyledButton>
        {isError && (
          <p className="text-red-500">
            Error: {error?.response?.data?.message || 'Login failed'}
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
