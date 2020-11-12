import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";

import Button from "./components/Button.jsx";
import SideNav from "./components/SideNav.jsx";

import { Colors } from "./rules/index";

const AppRouter = () => {
  return (
    <Page>
      <Router>
      <SideNav />
        <Switch>
        </Switch>
      </Router>
    </Page>
  );
};

console.log(Colors, "Colors");

const Page = styled("div")`
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  background-color: ${Colors.main.Black.default};
`;
export default AppRouter;
