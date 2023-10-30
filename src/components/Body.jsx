import React,{useState} from 'react'
import Header from "./Header"
import Sidebar from "./Sidebar"
import Home from "./Home"
import Aside from "./Aside"
const Body = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <Home />
    <Aside/>
   
  </div>
  )
}

export default Body
