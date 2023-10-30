import React from 'react'
import {Dot } from 'lucide-react'

const SideCard = (props) => {
    const {backgroundImg,profileImg,name, username} =props
  return (
    <div className='side-parent'>
    <div className='side-card'>
      <img src={backgroundImg} alt=''/>
    </div>
    <div className='side-profile'>
    <img src={profileImg} alt=''/>
     <Dot size={50} className='active-dot' />
     <div>
     <p className='side-name'>{name}</p> 
     <p className='side-profile-name'>{username}</p>
     </div>
    </div>
    </div>
  )
}

export default SideCard
