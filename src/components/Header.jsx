import React from 'react'
import {SlidersHorizontal} from 'lucide-react'
import { BsSearch, BsJustify} from 'react-icons/bs'




function Header({OpenSidebar}) {
  



  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        

        <div className='header-right'>
           LOGO
        
        </div>
        <div className='header-left'>
            <div>
            <BsSearch  className='icon search-btn'/>
            <input type='search' placeholder='search here...' />
            </div>
            <div className='filter'>
            <SlidersHorizontal  size={20} className='icon' />
            <label>Filters</label>
            </div>
          
        </div>
        <div className='seller'>
        Become a Seller
        </div>
    </header>
  )
}

export default Header