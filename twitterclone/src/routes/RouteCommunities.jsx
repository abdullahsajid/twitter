import React from 'react'
import Leftsec from '../layout/main/Leftsec'
import Communities from '../layout/communication/Communities'
import Rightsec from '../layout/main/Rightsec'
const RouteCommunities = () => {
  return (
    <div>
      <div className='sub-container'>
        <Leftsec/><Communities/><Rightsec/>
      </div>
    </div>
  )
}

export default RouteCommunities
