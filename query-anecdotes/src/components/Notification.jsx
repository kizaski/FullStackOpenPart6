/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react'
import NotificationContext from "../NotificationContext"

const Notification = () => {
  const [notif, dispatch] = useContext(NotificationContext)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  useEffect(() => {
    if (notif) {
      setTimeout(() => {
        dispatch('')
      }, 3000)
    }
  }, [notif, dispatch])
  
  if (!notif) { return null }

  return (
    <div style={style}>
      { notif }
    </div>
  )
}

export default Notification
