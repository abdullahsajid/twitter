import React, { useState } from 'react'
import LoginMain from '../login/LoginMain'
import Signup from '../signup/Signup';
const Home = () => {
  const[showLogin,setShowLogin] = useState(false);
  const[showSignUp,setShowSignUp] = useState(false);
  const showHandle = () => {
    setShowLogin(!showLogin)
  }
  const showSign = () => {
    setShowSignUp(!showSignUp)
  }
  return (
    <div className='relative z-0'>
      {showLogin && <LoginMain show={showHandle}/>}
      {showSignUp && <Signup show={showSign}/>}
      <div className={`${showLogin || showSignUp ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 opacity-50":"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 "}`}>
          <div className='h-screen col-span-1'>
              <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" className='h-screen object-cover' alt="twitter-banner" />
          </div>
          <div className='h-screen col-span-1'>
            <div className='p-4 h-screen'>
              <div className='flex flex-col p-5'>
                <div style={{width:"3rem",stroke:"#fff"}}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
                  </svg>
                </div>
                <div className='my-12 text-6xl'>
                  <span style={{wordWrap:"break-word"}} className='font-bold'>Happening now</span>
                </div>
                <div className='mb-8'>
                  <span className='text-3xl font-bold tracking-wide'>Join Twitter Today</span>
                </div>
                <div onClick={showSign} className='flex justify-center items-center rounded-full cursor-pointer' style={{width:"300px",maxWidth:"300px",minWidth:"36px",height:"40px",backgroundColor: "rgb(29, 155, 240)"}}>
                  <div>
                    <span>Create account</span>
                  </div>
                </div>
                <div className='mt-10'>
                  <div className='mt-10 mb-5' style={{width:"300px",maxWidth:"300px",minWidth:"36px",wordWrap:"break-word"}}>
                    <span className='font-bold tracking-wide'>Already have an account?</span>
                  </div>
                  <div onClick={showHandle} className='flex justify-center items-center rounded-full cursor-pointer' style={{width:"300px",maxWidth:"300px",minWidth:"36px",height:"40px",borderColor: "rgb(83, 100, 113)",border: ".5px solid"}}>
                    <span>Sign in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home
