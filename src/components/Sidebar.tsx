import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.nav`
  position: fixed;
  width: 250px;
  height: 100vh;
  background-color: #111;
  color: #fff;
  padding-top: 20px;
`;

const SidebarLink = styled(Link)`
  display: block;
  padding: 15px 20px;
  color: #fff;
  text-decoration: none;
  &:hover {
    background-color: #333;
  }
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/">Home</SidebarLink>
      <SidebarLink to="/about">About</SidebarLink>
      <SidebarLink to="/downloads">Downloads</SidebarLink>
      <SidebarLink to="/contact">Contact</SidebarLink>
      <SidebarLink to="/opensource">Open Source</SidebarLink> {/* New link */}
    </SidebarContainer>
  );
};

export default Sidebar;
