import React from "react";
import "./Admin.css";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

const sidebarData = [
  { title: "Products", icon: <MdOutlineProductionQuantityLimits />, link: "/products" },
  { title: "Add Product", icon: <MdOutlineAddCircleOutline />, link: "/manageProduct" },
  { title: "Manage Users", icon: <BsGraphUpArrow />, link: "/users" },
];

function AdminSidebar() {
  return (
    <div className="AdminSideBar">
      <ul className="SidebarList" aria-label="Admin navigation">
        {sidebarData.map((el) => (
          <NavLink to={el.link} key={el.title} activeClassName="active-link">
            <li className="row" role="menuitem">
              <div className="icon">{el.icon}</div>
              <div className="title">{el.title}</div>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default AdminSidebar;
