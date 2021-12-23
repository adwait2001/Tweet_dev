import React, { useEffect, useState } from 'react'

import { apiTweetFeed, loadTweets } from './lookup'
import {Tweet} from './detail';

export function FeedList(props) {
    const [tweetsInit, settweetsInit] = useState([]);
    const [tweets, setTweets] = useState([])
    const [nextUrl, setNextUrl] = useState(null)
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
            setNextUrl(response.next)
            settweetsInit(response.results)
            settweetsDidSet(true)
          } else {
            alert("There was an error")
          }
        }
        apiTweetFeed(myCallback)
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
  
    const handleLoadNext = (event) => {
      event.preventDefault()
      if(nextUrl != null)
      {
        const handleLoadNextResponse=(response,status)=>{
          if(status==200)
          {
            setNextUrl(response.next)
            const newTweets=[...tweets].concat(response.results)
            settweetsInit(newTweets)
            setTweets(newTweets)
          }else{
            alert("There was an error")
          }
        }
        apiTweetFeed(handleLoadNextResponse, nextUrl)
      }
    }

    return <React.Fragment> {tweets.map((item, index) => {
      return <Tweet tweet={item} 
       didRetweet={HandleDidRetweet} 
       className='my-5 py-5 border bg-white text-dark' 
       key={`${index}-{item.id}`} />
    })}
      {nextUrl!==null && <button onClick={handleLoadNext} className='btn btn-outline-primary'>Load Next</button>}
      </React.Fragment>
  
  }