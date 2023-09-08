import Tweets from '../Tweets';
import tweetsDetails from '../Tweetsdetail';
function Bookmark() {
    return (
        <div className="Mid">
            <div className="navbar" style={{ height: "52px" }}>
                <nav className="nav">
                    <div>
                        <p style={{ fontSize: "16px", paddingTop: "0", paddingBottom: "0" }}>Bookmarks</p>
                        <p style={{ fontSize: "11px", paddingTop: "0", paddingBottom: "0", color: "#8B98A5" }}>@aabdullahsajid</p>
                    </div>
                    <div>
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{ color: "rgb(239, 243, 244)" }}>
                            <g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
                    </div>
                </nav>
            </div>
            {tweetsDetails.map((data) => {
                return <Tweets img={data.img} name={data.name} mention={data.mention} blog={data.blog} />
            })}
        </div>
    );
}
export default Bookmark;