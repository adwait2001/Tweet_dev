import React, { useState, useEffect } from 'react'


import { TweetsList } from './list';

import { TweetCreate } from './create';
import { TweetDetailView } from './lookup'
import { Tweet } from './detail'
export function TweetComponent(props) {

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
    <TweetsList newTweets={newTweets} {...props} />
  </div>
}



export function DetailComponent(props) {
  const { tweetId } = props;
  console.log(props)
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

  return tweet===null ? null : <Tweet tweet={tweet} className={props.className}/>
}


