import notify from "../../data/notify.json";
function Notification() {

    return (
        <div className="Mid">
            <div className="navbar" style={{ height: "100px " }}>
                <nav className="navnoti">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <p>Notifications</p>
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{ color: "rgb(239, 243, 244)" }}>
                            <g><path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path></g></svg>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <p style={{ fontSize: "15px" }}>All</p>
                        <p style={{ fontSize: "15px" }}>Verified</p>
                        <p style={{ fontSize: "15px" }}>Mentions</p>
                    </div>
                </nav>
            </div>

            {notify.map((data,index) => {
                return (
                    <div key={index} style={{ padding: "1.5em", border: "1px solid #38444D" }}>
                        <div className="notify" style={{ display: "flex" }}>
                            {data.id === 1 ? <svg viewBox="0 0 24 24" aria-hidden="true" className="blue r-1cvl2hr r-4qtqp9 r-yyyyoo r-yucp9h r-dnmrzs r-bnwqim r-1plcrui r-lrvibr">
                                <g><path d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"></path></g></svg>
                                : <svg viewBox="0 0 24 24" aria-hidden="true" className="likee r-vkub15 r-4qtqp9 r-yyyyoo r-yucp9h r-dnmrzs r-bnwqim r-1plcrui r-lrvibr">
                                    <g>
                                        <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z">
                                        </path>
                                    </g>
                                </svg>
                            }
                            <img src={data.userimg} style={{ width: "32px", borderRadius: "1.2em", marginLeft: "1em" }} />
                        </div>
                        <div>
                            <p style={{ fontSize: "15px", color: "#F7F9F9", padding: "1em 0", paddingLeft: "2.5em" }}>{data.notifyvalue}</p>
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
}
export default Notification;