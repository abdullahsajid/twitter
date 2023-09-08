import React from 'react'
import Leftsec from '../layout/main/Leftsec'
import Notification from '../layout/notification/Notification'
import Rightsec from '../layout/main/Rightsec'
const RouteNotification = () => {
  return (
    <div>
        <div className='sub-container'>
        <Leftsec/><Notification/><Rightsec/>
        </div>
    </div>
  )
}

export default RouteNotification
