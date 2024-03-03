import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export const useLogin = () => {
  const {
    mutate: login,
    isError,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) =>
      axios.post('/login', { email, password }),
    onSuccess: (data) => {
      console.log('Logged in successfully')
      const token = data.data.token
      console.log('This is the token:', token)
      localStorage.setItem('token', token)
    },
    onError: (error) => {
      console.error('There was an error:', error)
    },
  })

  return { login, isError, error }
}
