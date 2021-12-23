import React, { useState, useEffect } from 'react'


import { TweetsList } from './list';

import { TweetCreate } from './create';
import { TweetDetailView } from './lookup'
import { Tweet } from './detail'
import { FeedList } from './feed';
import "./tweet.css"
import { UserImage } from '../profiles';

export function TweetComponent(props) {

  const [newTweets, setnewTweets] = useState([]);
  const canTweet = props.canTweet === "false" ? false : true
  const HandlenewTweet = (newTweet) => {
    let tempnewTweets = [...newTweets]
    tempnewTweets.unshift(newTweet)
    setnewTweets(tempnewTweets)
  }


  return <div className='container'>
    <div className='feed'>
      {canTweet && <TweetCreate didTweet={HandlenewTweet} className={"margin"} />
      }
      <TweetsList newTweets={newTweets} {...props} />
    </div>
    <div className='follow'>
      <div className='following'>
        <h3 className='font'>Developer's You Follow</h3>
        <div className='thumbnail'>
          <img className='avatar' src='https://adwaitshareit.s3.ap-south-1.amazonaws.com/images/tweet_qizO7XC.jpeg'></img>
          <div className='small-flex'>
            <span className='name'>Adwait Deshmukh</span>
            <span className='tag'>@adwait</span>
          </div>
          <button className='btn small btn-light'>Profile</button>
        </div>
        <div className='thumbnail'>
          <img className='avatar' src='https://adwaitshareit.s3.ap-south-1.amazonaws.com/images/tweet_qizO7XC.jpeg'></img>
          <div className='small-flex'>
            <span className='name'>Adwait Deshmukh</span>
            <span className='tag'>@adwait</span>
          </div>
          <button className='btn small btn-light'>Profile</button>
        </div>
        <div className='thumbnail'>
          <img className='avatar' src='https://adwaitshareit.s3.ap-south-1.amazonaws.com/images/tweet_qizO7XC.jpeg'></img>
          <div className='small-flex'>
            <span className='name'>Adwait Deshmukh</span>
            <span className='tag'>@adwait</span>
          </div>
          <button className='btn small btn-light'>Profile</button>
        </div>
        <div className='thumbnail'>
          <img className='avatar' src='https://adwaitshareit.s3.ap-south-1.amazonaws.com/images/tweet_qizO7XC.jpeg'></img>
          <div className='small-flex'>
            <span className='name'>Adwait Deshmukh</span>
            <span className='tag'>@adwait</span>
          </div>
          <button className='btn small btn-light'>Profile</button>
        </div>
        <div className='thumbnail'>
          <img className='avatar' src='https://adwaitshareit.s3.ap-south-1.amazonaws.com/images/tweet_qizO7XC.jpeg'></img>
          <div className='small-flex'>
            <span className='name'>Adwait Deshmukh</span>
            <span className='tag'>@adwait</span>
          </div>
          <button className='btn small btn-light'>Profile</button>
        </div>      </div>
    </div>
  </div>
}

export function FeedComponent(props) {

  const [newTweets, setnewTweets] = useState([]);
  const canTweet = props.canTweet === "false" ? false : true
  const HandlenewTweet = (newTweet) => {
    let tempnewTweets = [...newTweets]
    tempnewTweets.unshift(newTweet)
    setnewTweets(tempnewTweets)
  }


  return <div className={props.className}>
    {canTweet && <TweetCreate didTweet={HandlenewTweet} className={"col-12 mb-3"} />
    }
    <FeedList newTweets={newTweets} {...props} />
  </div>
}


export function DetailComponent(props) {
  const { tweetId } = props;
  const [lookup, setlookup] = useState(false);
  const [tweet, settweet] = useState(null);

  const HandleTweet = (response, status) => {
    if (status == 200) {
      settweet(response)
    }
    else {
      alert("There was an error finding your tweet")
    }
  }

  useEffect(() => {
    if (lookup === false) {
      TweetDetailView(tweetId, HandleTweet)
      setlookup(true);
    }
  }, [tweetId, lookup, setlookup]);

  return tweet === null ? null : <Tweet tweet={tweet} className={props.className} />
}


