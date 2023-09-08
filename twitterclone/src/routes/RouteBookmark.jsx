import React from 'react'
import Leftsec from '../layout/main/Leftsec'
import Bookmark from '../layout/bookmark/Bookmark'
import Rightsec from '../layout/main/Rightsec'
const RouteBookmark = () => {
  return (
    <div>
        <div className='sub-container'>
            <Leftsec/><Bookmark/><Rightsec/>
        </div>
    </div>
  )
}

export default RouteBookmark
