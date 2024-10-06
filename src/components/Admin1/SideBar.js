import React from "react";
// import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  Menu,
  SubMenu,
  MenuItem,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

export default function SideBar() {
  return (
    <ProSidebar>
      <SidebarHeader>
        <div>
          {/* Header content */}
          Admin Dashboard
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="square">
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Profile</MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter>
        {/* Footer content */}
        Footer
      </SidebarFooter>
    </ProSidebar>
  );
}
