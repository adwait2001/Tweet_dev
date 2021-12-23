import React, { useState } from 'react'
import { ActionBtn } from './buttons';
import { UserDisplay, UserImage, UserLink } from '../profiles'
import '../profiles/profile.css'
import './tweet.css'
import DevIcon from "devicon-react-svg";


export function ParentTweet(props) {
  const { tweet } = props;
  return tweet.parent ? <Tweet isRetweet retweeter={props.retweeter} HideActions className={' '} tweet={tweet.parent} /> : null
}
export function Tweet(props) {
  const { tweet, didRetweet, HideActions, isRetweet, retweeter } = props
  const [actionTweet, setactionTweet] = useState(props.tweet ? props.tweet : null);
  let className = props.className ? props.className : 'col-10 col-md-6'
  className = isRetweet === true ? `${className} p-2 border rounded` : className

  let className2 = 'tweet sidebar'
  className2 = isRetweet === true ? `${className2} sidebar2` : className2

  let className3 = 'margin'
  className3 = isRetweet === true ? `` : className3

  const path = window.location.pathname
  const match = path.match(/(?<tweetid>\d+)/)
  const urlTweetId = match ? match.groups.tweetid : -1
  const isDetail = `${tweet.id}` === `${urlTweetId}`

  const handleLink = (event) => {
    event.preventDefault()
    window.location.href = `/${tweet.id}`
  }

  const handlePerformAction = (newActionTweet, status) => {
    if (status == 200) {
      setactionTweet(newActionTweet)
    }
    else if (status == 201) {
      if (didRetweet) {
        didRetweet(newActionTweet)
      }
    }
  }

  //   return <div className='sidebar'>
  //    <div className={className}>
  //     {
  //       isRetweet === true && <div className='mb-2'>
  //         <span className='small text-muted'>Retweet via <UserDisplay user={retweeter} /></span>
  //       </div>
  //     }
  //     <div className='d-flex '>

  //       <div className=''>
  //         <UserImage user={tweet.user} />
  //       </div>
  //       <div className='col-11'>
  //         <div>
  //           <p>
  //             <UserDisplay includeFullname user={tweet.user} />
  //           </p>
  //           <p>{tweet.content}</p>

  //           <ParentTweet tweet={tweet} retweeter={tweet.user} />
  //         </div>

  //         <div className='btn btn-group px-0'>
  //           {(actionTweet && HideActions !== true) && <React.Fragment>
  //             <ActionBtn tweet={actionTweet} didperformAction={handlePerformAction} action={{ type: "like", display: "Likes" }} />
  //             <ActionBtn tweet={actionTweet} didperformAction={handlePerformAction} action={{ type: "unlike", display: "Unlike" }} />
  //             <ActionBtn tweet={actionTweet} didperformAction={handlePerformAction} action={{ type: "retweet", display: "Retweet" }} />
  //           </React.Fragment>}
  //           {isDetail === true ? null : <button className='btn btn-outline-primary btn-sm' onClick={handleLink}>View</button>}
  //         </div>
  //       </div>
  //     </div>
  //     {tweet.stack!=null && <div className='px-0 mt-5 badgescard2'>{tweet.stack.map(skill => (
  //       <div key={tweet.id}>
  //         <i className={`devicon-${skill}-plain`}></i>
  //       </div>
  //     )
  //     )}  </div>
  //     }
  // </div>
  //   </div>
  // }

  return <div className={className3}>
    <div className={className2}>
      {
        isRetweet === true && <div className='mb-2'>
          <span className='small text-muted'>Retweet via <UserDisplay user={retweeter} /></span>
        </div>
      }
      <div className="tweet-head">
        <div className="tweet-image">
          <UserImage user={tweet.user} />
        </div>
        <div className="tweet-author">
          {/* <div className="name">john_smith</div>
    <div className="handle">@john_smith</div> */}
          <UserDisplay includeFullname user={tweet.user} />
        </div>
      </div>
      <div className="tweet-body">
        <p id="tweet-text">{tweet.content}</p>
        {tweet.image && <p><img className='image-adjust' src={tweet.image}></img></p>}
      </div>
      <ParentTweet tweet={tweet} retweeter={tweet.user} />
      <div className='btn btn-group px-0'>
        {(actionTweet && HideActions !== true) && <React.Fragment>
          <ActionBtn tweet={actionTweet} didperformAction={handlePerformAction} action={{ type: "like", display: "Likes" }} />
          <ActionBtn tweet={actionTweet} didperformAction={handlePerformAction} action={{ type: "unlike", display: "Unlike" }} />
          <ActionBtn tweet={actionTweet} didperformAction={handlePerformAction} action={{ type: "retweet", display: "Retweet" }} />
        </React.Fragment>}
        {isDetail === true ? null : <button className='btn btn-outline-primary btn-sm button' onClick={handleLink}>View</button>}
      </div>
      {tweet.stack != null && <div className='px-0 badgescard2'>{tweet.stack.map(skill => (
        <div>
          <i className={`devicon-${skill}-plain hello`}></i>
        </div>
      )
      )}</div>
      }
    </div>

  </div>
}
