/* eslint-disable react/prop-types */
import { useContext } from 'react'
import NotificationContext from "../NotificationContext"

const Notification = () => {
  const [notif, dispatch] = useContext(NotificationContext)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (!notif) return null

  return (
    <div style={style}>
      { notif }
    </div>
  )
}

export default Notification
