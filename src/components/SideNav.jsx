import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import { Colors, Spacing } from "../rules/index";

const SideNav = () => {
  return (
    <Menu>
      <Link to="#">• About</Link>
      <Link to="#">• Work</Link>
      <Link to="#">• Widgets</Link>
    </Menu>
  );
};

const Menu = styled("div")`
  margin-left: ${Spacing.xxl};
  height: 100vh;
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: ${Colors.main.White.default};
  font-size: 90px;
  font-weight: 600;
  margin-top: ${Spacing.lg};
  box-shadow: inset 0 0 0 0.01px white;   
  transition: all ease 0.5s;

  :hover {
    box-shadow: inset 400px 0 0 0 ${Colors.main.White.default};
    color: ${Colors.main.Black.default};
  }
`;

export default SideNav;
