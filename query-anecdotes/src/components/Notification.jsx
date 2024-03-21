/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react'
import NotificationContext from "../NotificationContext"

const Notification = () => {
  const [notif, dispatch] = useContext(NotificationContext)
  const [visible, setVisible] = useState(true)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (!notif) { return null }
  // useEffect(() => {
  //   if (notif) {
  //     setTimeout(() => {
  //       setVisible(false)
  //       dispatch('')
  //     }, 3000)
  //   }
  // }, [notif, dispatch])

  // if (!visible) { return null }

  return (
    <div style={style}>
      { notif }
    </div>
  )
}

export default Notification
