import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../action/UserAction'
const Signup = ({show}) => {
  const dispatch = useDispatch()
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[confirmPass,setConfirmPass] = useState('')
  const[register,setRegister] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(password === confirmPass){
      setRegister(true)
     
      if(register){
        dispatch(registerUser(email,password))
        .then(() => {
          setEmail('')
          setPassword('')
          setConfirmPass('')
          alert('successfully signUp')
        }).catch((err) => {
          alert("something went wrong!",err)
        })       
      }
    }else{
      console.log('wrong password!')
    }
  }
  return (
    <div className='fixed top-0 z-10'>
      <div className='flex justify-center items-center w-screen h-screen'>
        <div style={{minHeight: "400px",maxWidth: "80vw",maxHeight: "90vh",height: "650px",minWidth: "600px",backgroundColor: "#15202B",borderRadius:"16px",overflow:"hidden",flexShrink:"1",border:"1px solid #fff"}}>
          <div className='flex px-4' style={{maxWidth:"600px",height:"53px",width:"100%"}}>
            <div onClick={show} className='flex basis-1/2 self-stretch items-start items-center shrink cursor-pointer' style={{minWidth:"56px",minHeight:"32px"}}>
                <svg viewBox="0 0 24 24" aria-hidden="true" style={{stroke:"rgb(239, 243, 244)",width:"20px",height:"20px"}}><g><path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g></svg>
            </div>
            <div className='h-full flex items-center self-stretch shrink'>
              <div style={{minWidth:"32px"}}>
                <svg viewBox="0 0 24 24" aria-label="Twitter" role="img" style={{stroke:"#fff"}}><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
              </div>
            </div>
            <div className='flex basis-1/2 self-stretch items-end shrink'style={{minWidth:"56px",minHeight:"32px"}}></div>
          </div>

          <div className='shrink' style={{maxWidth:"600px",width:"100%"}}>
            <form className='px-20 pb-12 flex flex-col justify-center items-center' style={{maxWidth:"600px",minWidth:"364px",width:"100%"}}>
                <div className='my-5 flex justify-center items-center'>
                  <h1 className='text-3xl font-bold'>Create your account</h1>
                </div>
                <div className='w-full mt-5'>
                  <label htmlFor="email">Email:</label>
                  <input id='email' 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  className='border border-slate-300 rounded-md px-1 py-2 w-full shadow-sm focus:outline-none mt-2'
                  style={{background:"none"}} 
                  type="email"
                  required
                   />
                </div>
                <div className='w-full mt-5'>
                  <label htmlFor="pass">Password:</label>
                  <input id='pass'
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   className='border border-slate-300 rounded-md px-1 py-2 w-full shadow-sm focus:outline-none mt-2'
                   style={{background:"none"}} 
                   type="password"
                   required
                    />
                </div>
                <div className='w-full mt-5'>
                  <label htmlFor="pass">Confirm Password:</label>
                  <input id='pass' 
                   className='border border-slate-300 rounded-md px-1 py-2 w-full shadow-sm focus:outline-none mt-2' 
                   style={{background:"none"}} 
                   type="password"
                   value={confirmPass}
                   onChange={(e) => setConfirmPass(e.target.value)}
                   required
                  />
                </div>
        
                <button type='submit' onClick={handleSubmit} className='flex justify-center items-center rounded-full cursor-pointer mt-7 bg-white ' style={{width:"100%",maxWidth:"600px",minWidth:"36px",height:"40px",borderColor: "rgb(83, 100, 113)",border: ".5px solid"}}>
                    <button  className='text-black'>Sign up</button>
                </button>
            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup