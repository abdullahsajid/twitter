import Tweets from '../Tweets';
import {getDetail,gettingTweets,getProfile} from '../../action/UserAction'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate, useParams} from 'react-router-dom'

function Profile({setEdit,edit}) {
    const navigation = useNavigate()
    const userData = useSelector((state) => state.user.user)
    const user = useSelector((state) => state.profile.user)
    const tweets = useSelector((state) => state.getTweet.user)
    const param = useParams()
    const dispatch = useDispatch()
   
    const editProfile = () => {
        setEdit(!edit)
    }
    
    const handleBack = () => {
        navigation(-1)
    }

    useEffect(() => {
        dispatch(getProfile())
        dispatch(getDetail(param.id))
        dispatch(gettingTweets())
    },[dispatch])

    if(!userData.email){
        return null
    }
    const getEmail = userData.email.split('@')[0]
    return (
        <div className={`${edit ? 'Mid opacity-50':'Mid'}`}>
            <div className="explore" style={{ height: "100%", borderBottom: "1px solid #15202B" }}>
                <div className="navbar">
                    <nav className="nav" style={{ justifyContent: "flex-start",height:'100%'}}>
                        <div onClick={handleBack}>
                            <svg viewBox="0 0 24 24" className='back-btn' aria-hidden="true" style={{ color: "rgb(239, 243, 244)",width:"40px",height: "40px" }}>
                                <g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg>
                        </div>
                        <div style={{ margin: "0", padding: "0", marginLeft: "20px" }}>
                            {user && (<p style={{ margin: "0", padding: "0", fontSize: "17px" }}>{(user.details) ? user.details.userName : "unknown"}</p>)}
                            {tweets ? (<p style={{ margin: "0", padding: "0", fontSize: "12px", color: "#8B98A5" }}>{`${tweets.posted?.length} Tweets`}</p>):(<p style={{ margin: "0", padding: "0", fontSize: "12px", color: "#8B98A5" }}>0 Tweets</p>)}
                        </div>
                    </nav>
                </div>
                <div>
                    <div>
                        {user && (<img src={`${(user.details) ? user.details.bannerImg.url : "https://img.freepik.com/free-vector/abstract-business-professional-background-banner-design-multipurpose_1340-16856.jpg"}`} style={{ height: "199px", width: "548px",objectFit: "cover"}} />)}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ position: "relative",width:"150px"}}>
                            {user && (<img src={`${(user.details) ? user.details.Avatar.url : "https://ionicframework.com/docs/img/demos/avatar.svg"}`} className="profileimg" />)}
                        </div>
                        <div className='edit-btn' style={{ border: "1px solid #8B89A5", marginTop: ".5em", borderRadius: "1em", padding: ".3em 1em", marginRight: ".5em" }} onClick={editProfile}>
                            <a href="#" style={{ textDecoration: "none" }}>Edit profile</a>
                        </div>
                    </div>
                    <div style={{ marginTop: "3em", marginLeft: "1.5em", display: "flex", flexDirection: "column" }}>
                        {user && (<span style={{ fontSize: "20px", fontWeight: "700" }}>{(user.details) ? user.details.userName : "unknown"}</span>)}
                        {userData ? ( <span style={{ fontSize: "15px", color: "#8B98A5", marginTop: "-5px" }}>{`@${getEmail}`}</span>):(<span style={{ fontSize: "15px", color: "#8B98A5", marginTop: "-5px" }}>@gmail.com</span>)}
                    </div>
                    <div style={{ marginLeft: "1.5em", marginTop: ".7em" }}>
                        {user && (<span style={{ fontWeight: "400" }}>{(user.details) ? user.details.bio : ""}</span>)}
                    </div>
                    <div style={{ marginTop: ".5em", marginLeft: "1.5em" }}>
                        <p style={{ color: "#8B98A5" }}>Joined May 2021</p>
                    </div>
                    <div style={{ display: "flex", marginTop: ".5em", marginLeft: "1.5em" }}>
                        <div style={{ marginRight: "1.5em" }}>
                            <span style={{ marginRight: ".3em", fontSize: "14px", fontWeight: "700" }}>160</span>
                            <span style={{ color: "#8B98A5", fontSize: "15px" }}>Following</span>
                        </div>
                        <div>
                            <span style={{ marginRight: ".3em", fontSize: "14px", fontWeight: "700" }}>19</span>
                            <span style={{ color: "#8B98A5", fontSize: "15px" }}>Followers</span>
                        </div>
                    </div>
                    <div style={{ marginTop: "2em", borderBottom: "1px solid #38444D" }}>
                        <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "1.5em" }}>
                            <p style={{ fontSize: "14px", fontWeight: "700" }}>Tweets</p>
                            <p style={{ fontSize: "14px" }}>Tweets & replies</p>
                            <p style={{ fontSize: "14px" }}>Media</p>
                            <p style={{ fontSize: "14px" }}>Likes</p>
                        </div>
                    </div>
                </div>
                {tweets?.posted.map((data,index) => {
                    return <Tweets key={index} 
                                img={user.details?.Avatar.url}
                                name={user.details?.userName}
                                mention={getEmail}
                                blog={data.caption}
                                _id={data._id} 
                                userLike={data.likes.length}
                                userLikes={data.likes}
                                userComment={data.comments}
                            />
                })}
            </div>
        </div>
    );
}
export default Profile;
