import SuggestionFolks from "../SuggestionFolks";
import folksdata from "../../data/folksdata.json"
import { useSelector } from "react-redux";
function ExploreRight() {
    const {alluser} = useSelector((state) => state.allUser.allUser)
    const {allProfile} = useSelector((state) => state.allUserProfile.allUserProfile)
    let copyAllUser = alluser && [...alluser]
    let copyUser = []
    let allUserlength = alluser?.length
    for(let i=0; i<3; i++){
        let userIndex =  Math.floor(Math.random() * allUserlength)
        copyUser.push(copyAllUser[userIndex]) 
        // console.log(userIndex)
    }
    return (
        <div className="right">
            <div className="rightArea">
                <div style={{ backgroundColor: "#1E2732", padding: "1em", borderRadius: "1.2em", margin: ".5em 0" }}>
                    <div>
                        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: ".5em" }}>Who to follow</p>
                    </div>
                    <div className="folksmain">
                        {copyUser.map((data) => {
                            let profileId = allProfile?.find((item) => item._id == data.profileDetails)
                            return <SuggestionFolks _id={data._id} img={profileId?.Avatar.url} name={profileId?.userName} tag={data.email} />
                        })}
                    </div>
                </div>
                <div style={{ marginTop: "1.3em", paddingLeft: ".5em" }}>
                    <div className="footerPolicy">
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>
                    <div className="footerPolicy">
                        <p>Accessibility</p>
                        <p>Ads info</p>
                        <p>More...</p>
                    </div>
                    <div className="footerPolicy">
                        <p>2023 Twitter, Inc</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ExploreRight;