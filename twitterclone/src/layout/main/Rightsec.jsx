import Trends from "../Trends";
import { useState,useEffect } from "react";
import TrendsData from "../../data/TrendsData.json";
import { Oval } from 'react-loader-spinner'

function Rightsec() {
  const[condition,setCondition] = useState(true)
    const setTime = () => {
        setTimeout(() => {
            setCondition(false)
        },2000)
    }
    useEffect(() => {
        setTime()
    },[])
  return (
    <div className="right">
      <div className="right-container">
        <div className="search">
          <div className="search-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="r-115tad6 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
          </div>
          <input type="text" id="search-twitter" placeholder="Search Twitter" />
        </div>
        
        <div className="trending-area">
          {condition ? (
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
              <Oval
                  height={30}
                  width='100%'
                  color="rgb(120, 86, 255)"
                  secondaryColor="rgb(120, 86, 255)"
                  strokeWidth={3}
              />
            </div>
          ):(
          <>
            <div className="trending">
              <h2>Trends for you</h2>
            </div>
            <div className="all-trends">
              {TrendsData.map((data,index) => {
                return (<Trends key={index} mainTrend={data.mainTrend} twt={data.Twtcount} />
                )
              })}
            </div>
          </>
          )} 
        </div>
        
      </div>
    </div>
  );
}
export default Rightsec;