import React from 'react'
import {MoreVertical,Heart,MessageCircle } from "lucide-react"
import {BiShare} from "react-icons/bi"

const PostCard = (props) => {
  const {backgroundImg,profileImg,name,username,disc,likes,comments,share} = props
  console.log(backgroundImg,profileImg,name,username,)
  return (
    <div className='post-card'>
      <div className='profile-details'>
      <div className='profile-left'>
      <div className='profile-pic'>
      <img src={profileImg} alt='post-profile'/>
      </div>
      <div className='profile-name'>
      <p>{name}</p>
      <p>{username}</p>
      </div>
      </div>
      <div className='profile-right'>
      <MoreVertical className='more-details' />
      </div>
      
      </div>
      <div className='post-details'>
      <div className='post-content'>
      
      <p>{disc} <span className='pink-btn'>Read more</span> </p>
      </div>
      <div className='post-pic'>
      <img src={backgroundImg} alt='img-post'/>
      <Heart size={30} className='post-pic-heart' />
      </div>
      <div className='post-stats'>
      <div><Heart/>{likes}</div>
      <div><MessageCircle />{comments}</div>
      <div><BiShare className='share'/>{share}</div>
      </div>
      </div>
    </div>
  )
}

export default PostCard
