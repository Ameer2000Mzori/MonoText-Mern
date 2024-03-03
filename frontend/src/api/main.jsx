import axios from 'axios'
import { useSelector } from 'react-redux'
import { useMutation } from '@tanstack/react-query'

const useFetch = ({ onSuccess, onError, options }) => {
  const token = useSelector((state) => state.user.token)
  const {
    mutate: res,
    isError,
    error,
  } = useMutation({
    mutationFn: (dataWithParams) =>
      axios.request({
        ...options,
        ...dataWithParams,
        headers: { token: `Bearer  ${token}` },
      }),
    onSuccess,
    onError:
      onError ??
      ((error) => {
        console.error('There was an error:', error)
      }),
  })

  return { res, isError, error }
}

export default useFetch
