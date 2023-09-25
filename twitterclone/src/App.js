import './App.css';
import Leftsec from './layout/main/Leftsec';
import {useEffect } from 'react';
import Midsec from './layout/main/Midsec';
import Rightsec from './layout/main/Rightsec';

import { useDispatch,useSelector } from 'react-redux';
import { getProfile,getDetail,getAllProfile,getAllUser} from './action/UserAction';
function App() {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user.user)
  useEffect(() => {
        dispatch(getProfile())
        dispatch(getAllProfile())
        dispatch(getAllUser())
        if(userData.profileDetails){
          dispatch(getDetail(`${userData._id}`))
        }
  },[dispatch,userData.profileDetails])

      return (
    // container mx-auto
    <div className="">
      <div className='sub-container'>
        <Leftsec/><Midsec/><Rightsec/>
      </div>
    </div>
  );
}

export default App;
