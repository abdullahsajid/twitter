import tweetsDetails from "../Tweetsdetail";

function Communities() {
    let Comcard = [
        {
            img: "https://pbs.twimg.com/community_banner_img/1528297199863574528/6XHoyLgT?format=jpg&name=240x240",
            name: "Web Developer",
            color: "rgb(15, 20, 25)"
        },
        {
            img: "https://pbs.twimg.com/community_banner_img/1509778990327685122/r0S9Tjh8?format=jpg&name=240x240",
            name: "Remote Jobs",
            color: "rgb(0, 126, 80)"
        },
        {
            img: "https://pbs.twimg.com/community_banner_img/1498429418209005570/rC1J_sj5?format=jpg&name=240x240",
            name: "Open Source",
            color: "rgb(174, 20, 37)"
        },
    ]
    return (
        <div className="Mid">
            <div className="explore">
                <div className="navbar">
                    <div className="nav">
                        <div>
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="back-btn" style={{ color: "rgb(239, 243, 244)",width:"40px",height: "40px" }}>
                                <g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path></g></svg>
                        </div>
                        <p>Communities</p>
                        <div>
                            <svg viewBox="0 0 24 24" aria-label="Search Communities" role="img" class="r-vlxjld r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03">
                                <g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>

                            <svg viewBox="0 0 24 24" aria-label="Create a new Community" role="img" class="r-vlxjld r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-17hmhgr r-lrvibr r-19wmn03">
                                <g><path d="M12 3.75c-4.56 0-8.25 3.69-8.25 8.25s3.69 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zm8.84 0l-2.3-2.29 1.42-1.42 2.29 2.3 2.29-2.3 1.42 1.42-2.3 2.29 2.3 2.29-1.42 1.42-2.29-2.3-2.29 2.3-1.42-1.42 2.3-2.29z"></path></g></svg>
                        </div>
                    </div>
                </div>
                <div className="com-card">
                    {
                        Comcard.map((data) => {
                            return (
                                <>
                                    <div className="cardimg">
                                        <img src={data.img} alt={data.name} />
                                        <div className="cardbottom" style={{ backgroundColor: `${data.color}` }}>
                                            <p>{data.name}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                {tweetsDetails.map((data) => {
                    return (
                        <div className="tweet-feed ">
                            <div className="tweet-feed-img">
                                <img src={data.img} alt={data.name} />
                            </div>
                            <div className="feed-details">
                                <div className="profile-details">
                                    <p className="name">{data.name}</p>
                                    <p className="mention">@{data.mention}</p>
                                </div>
                                <div className="tweet-blog">
                                    <p>
                                        {data.blog}
                                    </p>
                                </div>
                            </div>
                            <div className="pro-dot dot-dot">
                                <svg
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    className="r-vlxjld r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
                                >
                                    <g>
                                        <path
                                            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                                        ></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="feed-links">
                                <div className="reply">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
                                    <p>60</p>
                                </div>
                                <div className="retweet">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>
                                    <p>7</p>
                                </div>
                                <div className="like">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>
                                    <p>175</p>
                                </div>
                                <div className="other">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
}

export default Communities;