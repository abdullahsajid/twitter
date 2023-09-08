import SuggestionFolks from "../SuggestionFolks";
import folksdata from "../../data/folksdata.json"
function ExploreRight() {
    return (
        <div className="right">
            <div className="rightArea">
                <div style={{ backgroundColor: "#1E2732", padding: "1em", borderRadius: "1.2em", margin: ".5em 0" }}>
                    <div>
                        <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: ".5em" }}>Who to follow</p>
                    </div>
                    <div className="folksmain">
                        {folksdata.map((data) => {
                            return <SuggestionFolks img={data.img} name={data.name} tag={data.tag} />
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