function MessageDetails(){
    return(
        <div className="right" style={{position:"relative",borderRight:"1px solid #38444D"}}>
            <div className="rightMess">
                <div>
                    <p style={{fontSize:"31px"}}>Select a message</p>
                </div>
                <div>
                    <p style={{fontSize:"13px",color:"#8B98A5"}}>Choose from your existing conversations, start a new one, or just keep swimming.</p>
                </div>
                <div className="messbtn">
                    <button style={{fontSize:"15px"}}>New Message</button>
                </div>
            </div>
        </div>
    );
}
export default MessageDetails;