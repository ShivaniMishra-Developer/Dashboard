import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaTools } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { TbReport } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo"></div>
      <nav className="sidebar-navigation">
        <div className="blankBox">
</div>
        <ul>
          <li>
            <a href="#">
              <IoMdHome className="menu-icon" />
             
            </a>
          </li>
          <li>
            <a href="#">
              <FaTools className="menu-icon" />
             
            </a>
          </li>
          <li>
            <a href="#">
              <GiGears className="menu-icon" />
             
            </a>
          </li>
          <li>
            <a href="#">
              <TbReport className="menu-icon" />
             
            </a>
          </li>
        </ul>
      </nav>
      <div className="sidebar-settings">
        <a href="#">
          <MdOutlineSettings className="menu-icon" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
