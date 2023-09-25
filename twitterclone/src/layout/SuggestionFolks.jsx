import { useDispatch } from "react-redux";
import { followUser,followOtherUser} from "../action/UserAction";

function SuggestionFolks({_id,img,name,tag}) {
    const dispatch = useDispatch()
    const mention = tag.split('@')[0]
    const followUnfollow = () => {
        dispatch(followUser({_id}))
        dispatch(followOtherUser({_id}))
        // alert(_id)  
    }
    return (
        <>
        <div className="folksids">
            <div style={{display:"flex"}}>
                    <div>
                        <img src={img ? img : 'https://ionicframework.com/docs/img/demos/avatar.svg'}/>
                    </div>
                    <div style={{marginLeft:".8em"}}>
                        <p>{name ? name : 'Unknown'}</p>
                        <p style={{color:"#8898A5"}}>@{mention}</p>
                    </div>
            </div>
                <div className="folksbtn" onClick={followUnfollow}>
                    <button className="left-tweet-btn" style={{color:'#000'}}>Follow</button>
                </div>
        </div>
        </>
    );
}
export default SuggestionFolks;