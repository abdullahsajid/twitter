import { useEffect } from 'react';
import Tweets from '../Tweets';
import tweetsDetails from '../Tweetsdetail';
import { useDispatch, useSelector } from 'react-redux';
import {getBookmark} from '../../action/UserAction'
function Bookmark() {
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.user.user)
    const getEmail = userData.email.split('@')[0]
    useEffect(()=>{
        dispatch(getBookmark())
    },[])
    const {bookmarkPosted} = useSelector((state) => state.getBookmark.getBookmark)
    
    return (
        <div className="Mid">
            <div className="navbar" style={{ height: "52px" }}>
                <nav className="nav">
                    <div>
                        <p style={{ fontSize: "16px", paddingTop: "0", paddingBottom: "0" }}>Bookmarks</p>
                        <p style={{ fontSize: "11px", paddingTop: "0", paddingBottom: "0", color: "#8B98A5" }}>{`@${getEmail}`}</p>
                    </div>
                    <div>
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{ color: "rgb(239, 243, 244)" }}>
                            <g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
                    </div>
                </nav>
            </div>
            {bookmarkPosted?.map((data) => {
                return <Tweets _id={data._id}
                                img={data.img}
                                name={data.name}
                                blog={data.caption}
                                userLike={data.likes.length}
                                userComment={data.comments} />
            })}
        </div>
    );
}
export default Bookmark;
