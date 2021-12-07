import React, { useEffect, useState } from 'react'

import { loadTweets } from './lookup'
import {Tweet} from './detail';

export function TweetsList(props) {
    const [tweetsInit, settweetsInit] = useState([]);
    const [tweets, setTweets] = useState([])
    const [tweetsDidSet, settweetsDidSet] = useState(false);
  
    useEffect(() => {
      const final = [...props.newTweets].concat(tweetsInit)
      if (final.length !== tweets.length) {
        setTweets(final)
      }
    }, [props.newTweets, tweets, tweetsInit]);
  
    useEffect(() => {
      if (tweetsDidSet === false) {
        const myCallback = (response, status) => {
          if (status === 200) {
            settweetsInit(response)
            settweetsDidSet(true)
          } else {
            alert("There was an error")
          }
        }
        console.log(props.username)
        loadTweets(props.username,myCallback)
      }
    }, [tweetsInit, tweetsDidSet, settweetsDidSet,props.username])
  
    const HandleDidRetweet = (newTweet) => {
      const updateTweetsInit = [...tweetsInit]
      updateTweetsInit.unshift(newTweet)
      settweetsInit(updateTweetsInit)
      const updateFinalTweets = [...tweets]
      updateFinalTweets.unshift(tweets)
      setTweets(updateFinalTweets)
    }
  
    return tweets.map((item, index) => {
      return <Tweet tweet={item} didRetweet={HandleDidRetweet} className='my-5 py-5 border bg-white text-dark' key={`${index}-{item.id}`} />
    })
  }