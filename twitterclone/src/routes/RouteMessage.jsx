import React from 'react'
import Leftsec from '../layout/main/Leftsec'
import Message from '../layout/message/Message'
import MessageDetails from '../layout/message/MessageDetails'
const RouteMessage = () => {
  return (
    <div>
        <div className='sub-container'>
        <Leftsec/><Message/><MessageDetails/>
        </div>
    </div>
  )
}

export default RouteMessage
