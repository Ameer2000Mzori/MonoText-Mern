import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../shared/Card'
import TextInput from '../../shared/TextInput'
import { Formik } from 'formik'
import { signupValidation } from '../../shared/validationSchema'
import AuthOperations from '../../../api/AuthOperations'
import { useDispatch } from 'react-redux'
import { signIn } from '../../../features/user/userSlice'

export default function Signup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initialSignUp = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const { mutate, isPending, isError } = AuthOperations({
    onSuccess: (newData) => {
      dispatch(signIn({ ...newData.data, token: newData.token }))
      setTimeout(() => navigate('/'), 500)
    },
  })

  return (
    <div className="min-h-[100vh] flex justify-center items-center text-primary_c bg-zinc-600">
      <Card title="Sign Up" className="max-w-[500px] w-full bg-zinc-500">
        <Formik
          initialValues={initialSignUp}
          validationSchema={signupValidation}
          onSubmit={(userData) => {
            console.log('this is userData', userData)
            mutate([
              {
                method: 'POST',
                url: 'user',
                username: userData.username,
                email: userData.email,
                password: userData.password,
              },
            ])
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
                disabled={isPending}
                type="submit"
                className="text-center bg-blue-600 text-white w-full rounded p-2"
              >
                {isPending ? 'Loading...' : 'Submit'}
              </button>
              {isError && (
                <small className="text-lg text-red-300">
                  {isError.message}
                </small>
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
