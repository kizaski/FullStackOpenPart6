import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notificationChange(state, action) {
      const notif = action.payload
      state = notif
      return state
    },
  },
})

export const { notificationChange } = notificationSlice.actions
export default notificationSlice.reducer