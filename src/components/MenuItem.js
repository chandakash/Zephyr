import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
  const { name, subMenus, icon, expandClick, to } = props;
  const [expand, setExpand] = useState(false);

  return (
    <li onClick={expandClick}>
      <NavLink to={to} onClick={() => setExpand(!expand)} className="menu-item">
        <div className="menu-icon">{icon}</div>
        <span>{name}</span>
        {/*    <div className="dropdown">
            {subMenus.length > 0 ? (
            <i class="bi bi-caret-down-square-fill"></i>
            ) : (
            ""
            )}
            </div>*/}
      </NavLink>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu ${expand ? "active" : ""}`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
