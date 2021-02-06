import React from "react";
import "./NavBar.css";
import { DatePicker } from "antd";
import "antd/dist/antd.css";

const NavBar = () => {
  return (
    <div className='nav'>
      <nav className='navbar'>
        <div className='logo'>
          <img
            src='https://res.cloudinary.com/elijjaaahhhh/image/upload/v1576158338/Group_3_uqrvap.jpg'
            alt='logo'
          />
        </div>
        <div className='links'>
          <ul className='nav-items'>
            <li className='nav-item'>
              <a className='nav-link ' href=''>
                Help
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link-btn' href=''>
                Hire a Truck
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
