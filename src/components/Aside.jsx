import React from 'react'
import SideCard from './SideCard'
import { sideUsers } from '../utils/constants'
const Aside = () => {
  return (

    <aside className='aside'>
    <div className='filter-two'>
     <p>Artists</p>
     <p>Photographers</p>
    </div>
{sideUsers.map((user,index)=>(
    <SideCard key={index}
    backgroundImg={user.backgroundImg}
          profileImg={user.profileImg}
          name={user.name}
          username={user.username}
    />
))}
  <div className='r-footer'>
    <p className='footer-link'>Privacy Cookie Notice</p>
    <p className='footer-link'> Terms of Service</p>
    <p className='footer-link'> Terms of Service</p>
  </div>
    </aside>
   
    
    
  )
}

export default Aside
