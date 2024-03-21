/* eslint-disable react/prop-types */
const Notification = ( { message, type } ) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (!message) return null

  return (
    <div className={ type } style={style}>
      { message }
    </div>
  )
}

export default Notification
