import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { postLike,gettingTweets,postComment,bookmarkPost } from '../../action/UserAction'
import { useDispatch,useSelector } from 'react-redux'
import CommentOnTweet from './CommentOnTweet'

function Comment(){
    const[addComment,setAddComment] = useState('')
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const location = useLocation()
    const {allpost} = useSelector((state) => state.allPost.allPost)
    const {alluser} = useSelector((state) => state.allUser.allUser)

    const handleBack = () => {
        navigation(-1)
    }
    function likesCount(e){
        e.preventDefault()
        dispatch(postLike(location.state._id))    
        dispatch(gettingTweets())
    }
    const handleComment = (e) => {
        e.preventDefault()
        try{
            const _id = location.state._id
            const comment = addComment
            dispatch(postComment({_id,comment}))
            setAddComment('')
            alert("Comment Added!")
        }catch(error){
            console.log(error)
        }
    }
    
    const handlerBookmark = (e) => {
        e.preventDefault()
        try{
            const _id = location.state._id
            dispatch(bookmarkPost({_id}))
        }catch(error){
            console.log(error)
        }
    }


    
  return (
    <div className='Mid'>
        <div className="navbar">
            <nav className="nav" style={{ justifyContent: "flex-start",height:'100%'}}>
                <div onClick={handleBack}>
                    <svg viewBox="0 0 24 24" className='back-btn' aria-hidden="true" style={{ color: "rgb(239, 243, 244)",width:"40px",height: "40px" }}>
                        <g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg>
                </div>
                <div style={{ margin: "0", padding: "0", marginLeft: "20px" }}>
                    <h2>Post</h2>
                </div>
            </nav>
        </div>

        <div className='flex flex-col'>
            <div className='relative' style={{minHeight: "1109.4px"}}>
                <div className=' w-full'>
                    <div style={{borderBottomWidth: "1px",borderBottomColor: "rgb(56, 68, 77)"}}>
                        <div className='flex flex-col'>
                            <div className='px-4 pt-4'>
                                <div className='flex'>
                                    <div className='flex flex-col items-center w-full'>
                                        <div className='flex flex-row w-full mb-1'>
                                            <div className='me-3 flex items-center' style={{flexBasis:"40px"}}>
                                                <img src={`${location.state.img}`} className='rounded-full' style={{width:"48px",height:"40px"}} />
                                            </div>
                                            <div className='flex flex-col grow'>
                                                <div>
                                                    <span className='font-semibold' style={{fontSize:'15px',color:'#F7F9F9'}}>{location.state.name}</span>
                                                </div>
                                                <div>
                                                    <span style={{fontSize:'15px',color:'#8B98A5'}}>@{location.state.mention}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='flex flex-col w-full'>
                                            <div className='mt-3'>
                                                <span style={{fontSize:'17px',fontWeight:'400'}}>{location.state.blog}</span>
                                            </div>
                                            <div className='my-3'>
                                                <div className='flex flex-wrap'>
                                                    <div style={{borderTop:'1px solid rgb(56, 68, 77)',height:'1px',width:'100%'}}></div>
                                                    <span className='py-3' style={{fontSize:'15px'}}>{`${location.state.userLike} Likes`}</span>
                                                </div>
                                            </div>
                                            <div style={{height:'48px',minHeight:'1.875rem',borderTop:'1px solid rgb(56, 68, 77)',borderBottom:'1px solid rgb(56, 68, 77)',width:'100%',paddingTop:'0'}} className='flex justify-around items-center feed-links'>
                                                <div className='flex'>
                                                    <div className='retweet cursor-pointer' style={{minHeight:'20px'}}>
                                                    <svg viewBox="0 0 24 24" aria-hidden="true" style={{width:"33px",height: "33px"}} className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>
                                                    </div>
                                                </div>

                                                <div className='flex' onClick={likesCount}>
                                                    <div className='like cursor-pointer' style={{minHeight:'20px'}} >
                                                        <svg viewBox="0 0 24 24" aria-hidden="true" style={{width:"33px",height: "33px"}} className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>
                                                    </div>
                                                </div>

                                                <div className='flex' onClick={handlerBookmark}>
                                                    <div className='other cursor-pointer' style={{minHeight:'20px'}}>
                                                        <svg viewBox="0 0 24 24" aria-hidden="true" style={{width:"33px",height: "33px"}}><g>
                                                            <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='px-4 pt-4 pb-4'>
                                <div className='flex items-center'>
                                    <div className='me-3 flex items-center' style={{flexBasis:"40px"}}>
                                        <img src={`${location.state.img}`} className='rounded-full' style={{width:"48px",height:"40px"}}/>
                                    </div>
                                    <div className='flex justify-between items-center grow'>
                                        <div className='shrink grow w-full'>
                                            <input type="text" placeholder='Reply here!' value={addComment} onChange={(e) => setAddComment(e.target.value)} className='w-full border-none border-none outline-none' style={{backgroundColor:"#15202B",borderColor:"rgb(139, 152, 165)"}}/>
                                        </div>
                                        <div className='tweet'>
                                            <button onClick={handleComment}>Reply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {location.state.userComment?.map((item) => {
                    const data  = allpost?.find((val) => val.Owner == item.user)
                    const getMail = alluser?.find((val) => val._id == item.user)
                    const email = getMail?.email.split('@')[0]
                    return (
                    <CommentOnTweet
                        comment={item.comment}
                        name={data?.userName}
                        avatar={data?.Avatar.url}
                        email={email}
                    />
                )})}    
            </div>
        </div>
    </div>
  )
}

export default Comment

