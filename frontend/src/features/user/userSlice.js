import { createSlice } from '@reduxjs/toolkit'
import NotificationCard from '../../components/shared/NotificationCard'

const initialState = () =>
  localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {
        username: null,
        email: null,
        token: null,
      }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      const user = {
        username: action.payload.username,
        email: action.payload.email,
        token: action.payload.token,
      }
      localStorage.setItem('user', JSON.stringify(user))
      return user
    },
    signOut: (state, action) => {
      localStorage.removeItem('user')
      NotificationCard({ option: 'warning', text: 'logged out successfully' })
      return {
        username: null,
        email: null,
        token: null,
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { signIn, signOut } = userSlice.actions

export default userSlice.reducer
