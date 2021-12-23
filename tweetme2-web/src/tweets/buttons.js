
import React from 'react'

import { TweetAction } from './lookup'
import "./tweet.css"

export function ActionBtn(props) {
    const { tweet, action ,didperformAction} = props
    const className = props.className ? props.className : 'btn btn-outline-primary btn-sm button'
    const likes = tweet.likes ? tweet.likes : 0
    const actionDisplay = action.display ? action.display : 'Action'
  
    const HandleBackendAction = (response, status) => {
      console.log(response, status)
      if ((status == 200 || status==201 ) && didperformAction) {
        didperformAction(response,status);
      }
    }
  
    const handleClick = (event) => {
      event.preventDefault()
      TweetAction(tweet.id, action.type, HandleBackendAction)
  
    }
    const display = action.type === 'like' ? `${likes} ${actionDisplay}` : actionDisplay
    return <button className={className} onClick={handleClick}>{display}</button>
  }
