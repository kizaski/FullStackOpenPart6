import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  notification: '',
  duration: 5
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialState,
  reducers: {
    notificationChange(state, action) {
      const { notification, duration } = action.payload
      state.notification = notification
      state.duration = duration
      return state
    },
  },
})

export const { notificationChange } = notificationSlice.actions

export const setNotification = (notification, duration) => {
  duration = duration * 1000
  return notificationChange({ notification, duration })
}

export default notificationSlice.reducer