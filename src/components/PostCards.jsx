import React from 'react'
import PostCard from './PostCard'
import { posts } from '../utils/constants'
import CarouselContainer from "./CarouselContainer"
const PostCards = () => {
  return (
    <div className='post-container'>
    <div className='cards-container'>
      {posts.map((item, index)=>(
          <PostCard key={index} 
          backgroundImg={item.backgroundImg}
          profileImg={item.profileImg}
          name={item.name}
          username={item.username}
          disc={item.disc}
          likes={item.likes}
          comments={item.comments}
          share={item.share}/>
  ))}
    
    </div>
    <div className='bottom-carousel'>
    <CarouselContainer/>
    </div>
    </div>
  )
}

export default PostCards
