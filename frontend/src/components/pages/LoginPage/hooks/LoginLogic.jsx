import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const navigate = useNavigate()
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
      setTimeout(() => navigate('/'), 500)
    },
    onError: (error) => {
      console.error('There was an error:', error)
    },
  })

  return { login, isError, error }
}
