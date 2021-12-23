import React, { useEffect, useState } from 'react'
import {UserDisplay, UserImage} from './components'
import { apiProfileDetail ,apiProfileFollowToggle} from './lookup'
import './profile.css'


// function SkillsBadge(props){
//   const {skills} =props
//   {skills.map(({skill})=>{
//     return <i className={`devicon-${skill}-plain`}></i>
//   })}
// }

function ProfileBadge(props) {
  const { user, didFollowToggle, profileLoading } = props
  let currentVerb = (user && user.is_following) ? "Unfollow" : "Follow"
  currentVerb = profileLoading ? "Loading..." : currentVerb
  const handleFollowToggle = (event) => {
    event.preventDefault()
    if (didFollowToggle && !profileLoading) {
      didFollowToggle(currentVerb)
    }
  }
  // return user ?
  // <div className='back'>
  //   <h3 className='title-pen'>User Profile</h3>
  //   <div className=' user-profile'>
  //   <div className='avatar'><UserImage user={user} hideLink /></div>
  //   <p className="username"><UserDisplay  user={user} includeFullName hideLink /></p>
  //       {/* <p>{user.follower_count} followers</p>
  //       <p>{user.following_count} following</p>
  //       <p>{user.location}</p> */}
  //   <div className='bio'>{user.bio}</div>
  //  <button className=' btn btn-primary' onClick={handleFollowToggle}>{currentVerb}</button>
  //   </div>
  // </div>: null

 return user ?
 <div className='body1'>
  <div class="content">
  <div class="card">
    <div class="firstinfo"><img src={user.image}/>
      <div class="profileinfo">
        <h1><UserDisplay  user={user} includeFullName hideLink /></h1>
        <h3>{user.job_Profile}</h3>
        <p className='bio'>{user.follower_count} followers &nbsp;&nbsp;  {user.following_count} following</p> 
        <p className="bio">{user.bio}</p>
        <button className='btn btn-outline-primary' onClick={handleFollowToggle}>{currentVerb}</button>
      </div>
    </div>
  </div>
  <div className='badgescard'>{user.skills.map(skill=>(
       <div>
            <i className={`devicon-${skill}-plain`}></i>
        </div>    
  )
  )}</div>
  </div>
</div> :null
}

export function ProfileBadgeComponent(props) {
  const { username } = props

  const [didLookup, setDidLookup] = useState(false)
  const [profile, setProfile] = useState(null)
  const [profileLoading, setProfileLoading] = useState(false)
  const handleBackendLookup = (response, status) => {
    if (status === 200) {
      setProfile(response)
    }
  }
  useEffect(() => {
    if (didLookup === false) {
      apiProfileDetail(username, handleBackendLookup)
      setDidLookup(true)
    }
  }, [username, didLookup, setDidLookup])

  const handleNewFollow = (actionVerb) => {
    apiProfileFollowToggle(username, actionVerb, (response, status) => {
      if (status === 200) {
        console.log(response)
        setProfile(response)
          // apiProfileDetail(username, handleBackendLookup)

      }
      setProfileLoading(false)
    })
    setProfileLoading(true)

  }
  return didLookup === false ? "Loading..." : profile ? <ProfileBadge user={profile} didFollowToggle={handleNewFollow} profileLoading={profileLoading} /> : null
}

