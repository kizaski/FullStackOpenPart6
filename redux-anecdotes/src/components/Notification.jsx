import { useSelector, useDispatch } from 'react-redux'
import { notificationChange } from '../reducers/notificationReducer'
import { useEffect } from 'react'


const Notification = () => {
  const dispatch = useDispatch()

  const notification = useSelector(state => state.notification)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(notificationChange(''))
    }, 5000)

    return () => clearTimeout(timeoutId)
  }, [notification, dispatch])

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