import React from "react";
import {auth} from "../utils/firebase"
import { signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom"
import {
  Home,
  BellDot,
  Heart,
  Mail,
  Wallet2,
  Star,
  User2,
  Settings,
  ArrowDownLeftFromCircle

} from "lucide-react";

function Sidebar({ openSidebarToggle, OpenSidebar }) {

  const navigate = useNavigate()

  const handleSignOut = () =>{
  
 signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((error) => {
  // An error happened.
  navigate("/error")
});
  }




  return (
    <div className="sidebar-grid">
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : "sidebar-one"}
    >
      <div className="sidebar-title">
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Home strokeWidth={1} className="icon" /> Home
        </li>
        <li className="sidebar-list-item">
            <BellDot strokeWidth={1} className="icon" /> Notifications
        </li>
        <li className="sidebar-list-item">
            <Heart strokeWidth={1} className="icon" /> Shop
        </li>
        <li className="sidebar-list-item">
            <Mail strokeWidth={1} className="icon" /> Conversation
        </li>
        <li className="sidebar-list-item">
            <Wallet2 strokeWidth={1} className="icon" /> Wallet
        </li>
        <li className="sidebar-list-item">
            <Star strokeWidth={1} className="icon" />Subscription
        </li>
        <li className="sidebar-list-item">
            <User2 strokeWidth={1} className="icon" />My Profile
        </li>
        <li className="sidebar-list-item">
            <Settings strokeWidth={1} className="icon" />Settings
        </li>
        <li className="sidebar-list-item logout" onClick={handleSignOut}>
            <ArrowDownLeftFromCircle strokeWidth={2} size={15} className="icon logout-icon" />Logout   
        </li>
      </ul>
    </aside>
    <div className="left-footer">
      <p className="footer-link">2022©logo name</p>
      <p className="footer-link">Developed by ivan Infotech</p>
    </div>
    </div>
  );
}

export default Sidebar;
