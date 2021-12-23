import React from 'react'
import "./profile.css"
import "../tweets/tweet.css"

export function UserLink(props) {
    const { username } = props

    const handleUserLink = (event) => {
        window.location.href = `/profiles/${username}`
    }

    return <span className='pointer' onClick={handleUserLink}>
        {props.children}
    </span>
}

export function UserDisplay(props) {
    const { user, includeFullname, hideLink } = props
    const nameDisplay = includeFullname === true ? `${user.first_name} ${user.last_name}` : null
    return <React.Fragment>
        <span className='name'>{nameDisplay}</span>
        {hideLink === true ? <span className='handle'>@{user.username}</span> : <UserLink username={user.username}>@{user.username}</UserLink>}
    </React.Fragment>
}

export function UserImage(props) {
    const { user, hideLink } = props
    const userIdSpan = <span>
       <img className='avatar' src={user.image}/>
    </span>
    return hideLink === true ? userIdSpan : <UserLink username={user.username}>{userIdSpan}</UserLink>
}