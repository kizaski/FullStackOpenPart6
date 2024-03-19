import { useSelector, useDispatch } from 'react-redux'
import { notificationChange } from '../reducers/notificationReducer'
import { useEffect } from 'react'


const Notification = () => {
  const dispatch = useDispatch()

  const notification = useSelector(state => state.notification.notification)
  const duration = useSelector(state => state.notification.duration)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(notificationChange({notification: ''}))
    }, duration)

    return () => clearTimeout(timeoutId)
  }, [notification, duration, dispatch])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <>
    {notification !== '' ?
      <div style={style}>
        {notification}
      </div>
      : 
      <div></div>}
    </>
  )
}

export default Notification