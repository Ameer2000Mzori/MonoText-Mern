import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../shared/Card'
import TextInput from '../../shared/TextInput'
import { Formik } from 'formik'
import { signupValidation } from '../../shared/validationSchema'
import { useSignUp } from './hooks/SignupLogic'

export default function Signup() {
  const initialSignUp = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  const { signUp, isLoading, error } = useSignUp()

  return (
    <div className="min-h-[100vh] flex justify-center items-center text-primary_c bg-zinc-600">
      <Card title="Sign Up" className="max-w-[500px] w-full bg-zinc-500">
        <Formik
          initialValues={initialSignUp}
          validationSchema={signupValidation}
          onSubmit={(data) => {
            console.log(data)
            signUp({ data })
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <TextInput
                title={'Username'}
                errMsg={
                  errors.username && touched.username ? errors.username : ''
                }
                name="username"
                input={values.username}
                onBlur={handleBlur}
                updateInput={handleChange}
              />
              <TextInput
                title={'Email'}
                name="email"
                errMsg={errors.email && touched.email ? errors.email : ''}
                input={values.email}
                onBlur={handleBlur}
                updateInput={handleChange}
              />
              <TextInput
                title={'Password'}
                name="password"
                errMsg={
                  errors.password && touched.password ? errors.password : ''
                }
                type="password"
                input={values.password}
                onBlur={handleBlur}
                updateInput={handleChange}
              />
              <TextInput
                title={'Confirm Password'}
                name="confirmPassword"
                errMsg={
                  errors.confirmPassword && touched.confirmPassword
                    ? errors.confirmPassword
                    : ''
                }
                type="password"
                input={values.confirmPassword}
                onBlur={handleBlur}
                updateInput={handleChange}
              />
              <button
                disabled={isLoading}
                type="submit"
                className="text-center bg-blue-600 text-white w-full rounded p-2"
              >
                {isLoading ? 'Loading...' : 'Submit'}
              </button>
              {error && (
                <small className="text-lg text-red-300">{error.message}</small>
              )}
            </form>
          )}
        </Formik>
        <hr className="my-4" />
        <div className="text-md py-2">
          <span>
            Already have an account?{' '}
            <Link to="/login" className="text-blue-900">
              Sign In
            </Link>
          </span>
        </div>
      </Card>
    </div>
  )
}
