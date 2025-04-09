import React from 'react'

const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Ezt a betűt már beírta!</p>
    </div>
  )
}

export default Notification