import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const AuthOperations = () => {
  const { mutate, isPending, isSuccess, isError, data } = useMutation({
    mutationFn: ([{ url, ...arg }]) => {
      console.log(' info we got ', url, arg)
      return axios
        .post(`/${url}`, { ...arg })
        .then((result) => result.data)
        .catch((error) => {
          console.log(' error we got ', error)
          throw error
        })
    },
  })

  return { mutate, isPending, isSuccess, isError, data }
}

export default AuthOperations
