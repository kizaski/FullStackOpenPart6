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

// exc 6.19

export default notificationSlice.reducer