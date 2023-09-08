import Trends from "../Trends";
import TrendsData from "../../data/TrendsData.json";
import SuggestionFolks from "../SuggestionFolks"
import folksdata from "../../data/folksdata.json"
function Leftprofile({edit}) {
    return (
        <div className={`${edit ? 'right opacity-50' : 'right'}`}>
            <div className="search">
                <div className="search-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-115tad6 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
                </div>
                <input type="text" id="search-twitter" placeholder="Search Twitter" />
            </div>
            <div className="profilegrid">
                <div className="one">
                    <img src="https://pbs.twimg.com/media/FoM9qrnakAETaa3?format=jpg&name=240x240" className="progrid" style={{ borderTopLeftRadius: "1.5em" }} />
                    <img src="https://pbs.twimg.com/ext_tw_video_thumb/1606638723755548673/pu/img/PjGBPISdYUwKJ3NV?format=jpg&name=240x240" className="progrid" style={{ borderBottomLeftRadius: "1.5em" }} />
                </div>
                <div className="two">
                    <img src="https://pbs.twimg.com/media/Fiq6yluXEAExVnT?format=png&name=240x240" className="progrid" style={{ borderTopRightRadius: "1.5em" }} />
                    <img src="https://pbs.twimg.com/ext_tw_video_thumb/1405048977985245184/pu/img/tLl7X7NGB_S7wAUI?format=jpg&name=360x360" className="progrid" style={{ borderBottomRightRadius: "1.5em" }} />
                </div>
            </div>
            <div style={{ backgroundColor: "#1E2732", padding: "1em", borderRadius: "1.2em", margin: ".5em 0" }}>
                <div>
                    <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: ".5em" }}>You might like</p>
                </div>
                <div className="folksmain">
                    {folksdata.map((data) => {
                        return <SuggestionFolks img={data.img} name={data.name} tag={data.tag} />
                    })}
                </div>
            </div>
            <div className="trending-area">
                <div className="trending">
                    <h2>Trends for you</h2>
                </div>
                <div className="all-trends">
                    {TrendsData.map((data) => {
                        return (<Trends mainTrend={data.mainTrend} twt={data.Twtcount} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default Leftprofile;