import React, { useState } from 'react'
import Leftsec from '../layout/main/Leftsec'
import Leftprofile from '../layout/profile/Leftprofile'
import Comments from '../layout/Comments/Comment'

const RouteComment = () => {

  return (
    <div>
        <div className='sub-container relative z-0'>
            <Leftsec/>
            <Comments/>
            <Leftprofile/>
        </div>
    </div>
  )
}

export default RouteComment



