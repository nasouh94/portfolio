import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import { Colors, Spacing } from "../rules/index";
import cursor from "../public/img/cursor.svg";

const SideNav = () => {
  return (
    <Menu>
      <Link exact to="/about/">
        • About
      </Link>
      <Link exact to="/sss">
        • Work
      </Link>
      <Link exact to="/">
        • Widgets
      </Link>
    </Menu>
  );
};

const Menu = styled("div")`
  margin-left: ${Spacing.xxl};
  height: 100vh;
  width: 400px;
  display: flex;
  flex-direction: column;

  a.active {
    -webkit-text-fill-color: ${Colors.main.White.default};
  }
`;

const Link = styled(NavLink)`
  width: 100%;
  display: inline-block;
  text-decoration: none;
  color: ${Colors.main.White.default};
  font-size: 90px;
  font-weight: 600;
  margin-top: ${Spacing.lg};
  transition: all ease 0.5s;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;

  :hover {
    -webkit-text-fill-color: ${Colors.main.White.default};
    margin-left: 40px;
    transition: all 0.4s cubic-bezier(0.2, 0.6, 0.2, 1);
  }
`;

const Cursor = styled("div")`
  position:relative;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border 1px solid ${Colors.main.Red.default};

  .vertical{
    border-left: 1px solid ${Colors.main.Red.default};
    height: 35px;
    position: absolute;
    left: 50%;
    top: 20px;
}
  }

  .horizontal{
    border-bottom: 1px solid ${Colors.main.Red.default};
    width: 35px;
    position: absolute;
    bottom: 50%;
    top: 18px;
    left: 21px;
  }
`;

export default SideNav;
