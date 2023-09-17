import { useEffect, useState } from 'react';
import '../../App.css';
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../action/UserAction';
import { getProfile,getDetail } from '../../action/UserAction';
import { Oval } from 'react-loader-spinner'
import Cookies from 'universal-cookie';

const cookie = new Cookies()
function Leftsec({edit}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  const {loading} = useSelector((state) => state.user)
  const[toggleLogout,setLogout] = useState(false)
  
  const handleChange = () => {
    setLogout(!toggleLogout)
  }

  const logout = () => {
    dispatch(logoutUser())
    cookie.remove()
    navigate('/')
  }
 
  const profileData = useSelector((state) => state.profile.user)

  useEffect(() => {
    // dispatch(getDetail(userData.profileDetails))
    // console.log(userData.profileDetails)
  },[dispatch])
  // let getEmail;
  // const userEmail = async () => {
  //   getEmail = await user.email.split('@')[0]
  //   console.log(getEmail)
  // }
  // userEmail()
  
  return (
    <>
      <div className={`${edit ? 'left opacity-50': 'left'}`}>
        <div className="left-element">
          <div>
            <Link to="/home" style={{ textDecoration: "none" }}>
              <div className="twitter-img">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g>
                </svg>
              </div>
            </Link>
            <div className="navigation">
              <Link to='/home' style={{ textDecoration: "none" }}>
                <div className="nav-links">
                  <div className="nav-svg">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-vlxjld r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"><g><path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"></path></g></svg>
                  </div>
                  <a href="/">Home</a>
                </div>
              </Link>
              <Link to='/explore' style={{ textDecoration: "none" }}>
                <div className="nav-links" >
                  <div className="nav-svg">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-vlxjld r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"><g><path d="M10.09 3.098L9.72 7h5.99l.39-4.089 1.99.187L17.72 7h3.78v2h-3.97l-.56 6h3.53v2h-3.72l-.38 4.089-1.99-.187.36-3.902H8.78l-.38 4.089-1.99-.187L6.77 17H2.5v-2h4.46l.56-6H3.5V7h4.21l.39-4.089 1.99.187zM14.96 15l.56-6H9.53l-.56 6h5.99z"></path></g></svg>
                  </div>
                  <a href=''>Explore</a>
                </div>
              </Link>
              <Link to="/communities" style={{ textDecoration: "none" }}>
                <div className="nav-links" style={{ width: "204px" }}>
                  <div className="nav-svg">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-vlxjld r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"><g><path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path></g></svg>
                  </div>
                  <a href="">Communities</a>
                </div>
              </Link>
              <Link to="/notification" style={{ textDecoration: "none" }}>
                <div className="nav-links" style={{ width: "204px" }}>
                  <div className="nav-svg">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-vlxjld r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"><g><path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path></g></svg>
                  </div>
                  <a href="">Notifications</a>
                </div>
              </Link>
              <Link to="/message" style={{ textDecoration: "none" }}>
                <div className="nav-links">
                  <div className="nav-svg">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-vlxjld r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></g></svg>
                  </div>
                  <a href="">Messages</a>
                </div>
              </Link>
              <Link to='/bookmark' style={{ textDecoration: "none" }}>
                <div className="nav-links">
                  <div className="nav-svg">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-vlxjld r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>
                  </div>
                  <a href="">Bookmarks</a>
                </div>
              </Link>
              {user &&  (
              <Link to={`/profile/${user._id}`} style={{ textDecoration: "none" }}>
                <div className="nav-links">
                  <div className="nav-svg">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-vlxjld r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"><g><path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path></g></svg>
                  </div>
                  <a href="">Profile</a>
                </div>
              </Link>)}
              <div className="nav-links">
                <div className="nav-svg">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="r-vlxjld r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"><g><path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></g></svg>
                </div>
                <a href="">More</a>
              </div>
              <div className="left-tweet">
                <button className="left-tweet-btn">Tweet</button>
              </div>
            </div>
          </div>
          {toggleLogout && <div className='logout-area' onClick={logout}>logout</div>}
          <div className="profile" style={{maxWidth:"100%",width:"220px",height:"58px"}} onClick={handleChange}>
            {loading ? (
               <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
                <Oval
                    height={30}
                    width='100%'
                    color="rgb(120, 86, 255)"
                    secondaryColor="rgb(120, 86, 255)"
                    strokeWidth={3}
                />
              </div>
            ):(
              <>
            <div className="pro-img">
              {profileData && (<img
                src={`${(profileData.details) ? profileData.details.Avatar.url : "https://ionicframework.com/docs/img/demos/avatar.svg"}`}
              />)}
            </div>
            <div className="pro-name">
              {profileData && (<p className="username">{`${(profileData.details) ? profileData.details.userName : "unknown"}`}</p>)}
              {profileData && (
                <>
                  {(()  => {
                    const getEmail = user.email?.split('@')[0];
                    return <p className="id">{`@${getEmail}`}</p>;
                  })()}
                </>
              )}
            </div>
            <div className="pro-dot">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{width: '13px'}}
              >
                <g>
                  <path
                    d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                  ></path>
                </g>
              </svg>
            </div>
            </>
            )}
          </div>
        </div>
      </div>
      {/* <Routes>
        <Route path='/' element={<><Midsec /> <Rightsec /></>} />
        <Route path='/explore' element={<><Explore /> <ExploreRight /></>} />
        <Route path='/communities' element={<><Communities /> <Rightsec /></>} />
        <Route path='/notification' element={<><Notification /> <Rightsec /></>} />
        <Route path='/message' element={<><Message /> <MessageDetails /></>} />
        <Route path='/bookmark' element={<><Bookmark /> <Rightsec /></>} />
        <Route path='/profile' element={<><Profile /><Leftprofile /></>} />
      </Routes> */}
    </>
  );
}
export default Leftsec;