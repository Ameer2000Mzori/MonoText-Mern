import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const AuthOperations = () => {
  const { mutate, isPending, isSuccess, isError, data } = useMutation({
    mutationFn: ([{ token, method, url, ...arg }]) => {
      console.log(' info we got ', method, url, arg)
      return axios
        .request({
          url: `/${url}`,
          method: `${method}`,
          data: {
            ...arg,
          },
          headers: {
            headers: { token: `Bearer  ${token}` },
          },
        })
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
