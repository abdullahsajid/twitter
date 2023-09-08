import React, { useEffect } from 'react'

const CommentOnTweet = ({ comment, name, avatar, email }) => {

  return (
    <div className="tweet-feed">
      <div className="tweet-feed-img">
        <img src={`${avatar}`} alt="" />
      </div>
      <div className="feed-details">
        <div className="profile-details">
          <p className="name">{name}</p>
          <p className="mention">{`@${email}`}</p>
        </div>
        <div className="tweet-blog">
          <p>
            {comment}
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
    </div>
  )
}

export default CommentOnTweet
