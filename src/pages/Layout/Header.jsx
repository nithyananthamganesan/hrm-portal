import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CHAT, DROPDOWN, NOTIFICATION, PROFILE_LOGO, SEARCH } from '../../utils/constants';
import './layout.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Header = ({handleSignout}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className='header-section'>
      <div className="header-layout">
      <div className={`menu-toggle ${isNavOpen ? "rotate" : ""}`} onClick={toggleNav}>
            {isNavOpen ? <IoClose className="ham-icon"/> : <GiHamburgerMenu className="ham-icon"/>} 
            <span className="search-icon"><img src={SEARCH} alt="SEARCH" /></span>
          </div>
        <div className="searchbar-section">
          <div className="searchbar-form">
            <input type='text' placeholder='Search Employees' />
            <span className="search-icon"><img src={SEARCH} alt="SEARCH" /></span>
          </div>
        </div>
        
        <div className="profile-section">
          <div className="notification icon">
            <img src={NOTIFICATION} alt="NOTIFICATION" />
          </div>
          <div className="chat icon">
            <img src={CHAT} alt="CHAT" />
          </div>
          
          {/* Show Profile Logo on large screens, Hamburger icon on smaller screens */}
          {/* <div className="menu-toggle" onClick={toggleNav}> */}
            {/* <img src="... " alt="Menu" className="ham-icon" /> */}
            {/* <GiHamburgerMenu className="ham-icon"/>
          </div> */}

          
          <div className="profile">
            <div className="profile-img">
              <img src={PROFILE_LOGO} alt="PROFILE_LOGO" />
            </div>
            <div className="username"><p>Admirra John</p></div>
            <div className="dropdown icon">
              <img src={DROPDOWN} alt="DROPDOWN" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Drawer */}
      {isNavOpen && (
        <div className="nav-menu">
          <div className="profile-img">
              <img src={PROFILE_LOGO} alt="PROFILE_LOGO" />
              <div className="username"><p>Admirra John</p></div>
            </div>
          <ul>
            <li><Link to="/dashboard" onClick={toggleNav}>Dashboard</Link></li>
            <li><Link to="/employee" onClick={toggleNav}>Employee</Link></li>
            <li><Link to="/attendance" onClick={toggleNav}>Attendance</Link></li>
            <li><Link to="/dashboard" onClick={toggleNav}>Payroll</Link></li>
            <li><Link to="/dashboard" onClick={toggleNav}>Task</Link></li>
            <li><Link to="/dashboard" onClick={toggleNav}>Announcement</Link></li>
            <li><Link to="/dashboard" onClick={toggleNav}>Support</Link></li>
            <li><Link to="/dashboard" onClick={toggleNav}>Settings</Link></li>
            <li><Link to="/" onClick={()=>{
              toggleNav();
              handleSignout();
            
            }
              }>Logout</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
