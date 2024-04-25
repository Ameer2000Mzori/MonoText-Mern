// import { useDispatch } from 'react-redux'
// import { signIn } from '../../../../features/user/userSlice'
// import { useNavigate } from 'react-router-dom'
// import useFetch from '../../../../api/main'

// export const useLogin = () => {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const onSuccess = (data) => {
//     dispatch(signIn({ ...data.data.data, token: data.data.token }))
//     setTimeout(() => navigate('/'), 500)
//   }
//   const onError = (error) => {
//     console.error('There was an error:', error)
//   }

//   const { res, isLoading, error } = useFetch({
//     onSuccess,
//     onError,
//     options: { url: '/login', method: 'POST' },
//   })

//   return { login: res, isLoading, error }
// }
