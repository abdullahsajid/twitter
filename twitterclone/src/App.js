import './App.css';
import Leftsec from './layout/main/Leftsec';
import { useState,useEffect } from 'react';
import Midsec from './layout/main/Midsec';
import Rightsec from './layout/main/Rightsec';

import { useDispatch,useSelector } from 'react-redux';
import { getProfile,getDetail} from './action/UserAction';
function App() {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.user.user)
  // const token = cookies.get('token')
  // useEffect(() => {
  //   axios.get("http://localhost:4000/auth",{
  //     headers:{
  //       Authorization: `Bearer ${token}`
  //     }
  //   }).then((result) => {
  //     console.log(result.data.message)
  //   }).catch((err) => {
  //     // console.log(err)
  //   })
  // })

  useEffect(() => {
        dispatch(getProfile())
        if(userData.profileDetails){
          dispatch(getDetail(`${userData._id}`))
        }
        // console.log(userData.profileDetails)
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
