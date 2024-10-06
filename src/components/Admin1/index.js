import React from "react";
import SideBar from "./SideBar";
import "./index.scss";

export default function Admin(props) {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar />
      </div>
      <div className="admin-content">Admin</div>
    </div>
  );
}
