function SuggestionFolks({img,name,tag}) {
    return (
        <>
        <div className="folksids">
            <div style={{display:"flex"}}>
                    <div>
                        <img src={img}/>
                    </div>
                    <div style={{marginLeft:".8em"}}>
                        <p>{name}</p>
                        <p style={{color:"#8898A5"}}>@{tag}</p>
                    </div>
            </div>
                <div className="folksbtn">
                    <button>Follow</button>
                </div>
        </div>
        </>
    );
}
export default SuggestionFolks;