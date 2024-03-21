/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext  } from 'react'

const notificationReducer = (state, action) => {
    return action.msg
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
  const [Notification, NotificationDispatch] = useReducer(notificationReducer, 0)

  return (
    <NotificationContext.Provider value={[Notification, NotificationDispatch] }>
      {props.children}
    </NotificationContext.Provider>
  )
}

export const useNotificationValue = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[0]
}

export const useNotificationDispatch = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[1]
}

export default NotificationContext