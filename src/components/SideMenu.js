import React, { useEffect, useState } from "react";
import logo from "../assets/logo/snow.png";
import user1 from "../assets/user1.jpeg";
import MenuItem from "./MenuItem";

const menuItems = [
  { name: "Dashboard", icon: <i class="bi bi-speedometer2"></i>, to: "/" },
  {
    name: "Authentication",
    icon: <i class="bi bi-apple"></i>,
    to: "/authentication",
    subMenus: [
      { name: "Login", to: "/authentication/login" },
      { name: "SignUp", to: "/authentication/signUp" },
    ],
  },
  {
    name: "Records",
    icon: <i class="bi bi-journal-richtext"></i>,
    to: "/records",
  },
  {
    name: "Mail Sender",
    icon: <i class="bi bi-envelope-check-fill"></i>,
    to: "/mail",
  },
  {
    name: "File Operations",
    icon: <i class="bi bi-cloud-upload"></i>,
    to: "/file",
    subMenus: [
      { name: "Upload", to: "/file/upload" },
      { name: "Download", to: "/file/download" },
    ],
  },
];
const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    /* to remove the sub-menu for inactive state in sidebar*/
    if (inactive) {
      document.querySelectorAll(".sub-menu").forEach((el) => {
        console.log(el);
        el.classList.remove("active");
      });
    }
    props.onCollapse(inactive);
  }, [inactive]);
  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="snow" />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>
      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>
        <input type="text" placeholder="search" />
      </div>
      <div className="divider"></div>
      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              icon={menuItem.icon}
              expandClick={() => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
          {/*
           <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-speedometer2"></i>
              </div>
              <span>DashBoard</span>
            </a>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-apple"></i>
              </div>
              <span>Authentication</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a>Login</a>
              </li>
              <li>
                <a>SignUp</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-journal-richtext"></i>
              </div>
              <span>Records</span>
            </a>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-envelope-check-fill"></i>
              </div>
              <span>Mail Sender</span>
            </a>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-cloud-upload"></i>
              </div>
              <span>File Operation</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a>Upload</a>
              </li>
              <li>
                <a>Download</a>
              </li>
            </ul>
          </li>
        */}
        </ul>
      </div>
      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user1} alt="user" />
        </div>
        <div className="user-info">
          <h5>Akash Chand</h5>
          <p>akashchand1703@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
