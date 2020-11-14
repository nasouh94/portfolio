import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";

import Button from "./components/Button.jsx";
import SideNav from "./components/SideNav.jsx";
import About from "./components/About.jsx";

import { Colors } from "./rules/index";

const AppRouter = () => {
  const cursor = useRef();

  console.log(cursor, "cursor");

  console.log(cursor.current, "curcursor.current.setAttributesor");
  useEffect(() => {
    if (cursor.current) {
      document.addEventListener("mousemove", (e) => {
        cursor.current.setAttribute(
          "style",
          "top: " + e.pageY + "px; left: " + e.pageX + "px;"
        );
      });
    }
  }, [cursor.current]);

  return (
    <Page>
      <Cursor className="cursor" ref={cursor}>
        <div className="vertical" /> <div className="horizontal" />{" "}
      </Cursor>
      <Router>
        <SideNav />
        <Switch>
          <Route
          path={"/about/"}
          component={About}
          />
          <Route path={"/"} component={Home}/>
        </Switch>
      </Router>
    </Page>
  );
};

function Home() {
  return <h2>Home</h2>;
}

console.log(Colors, "Colors");

const Cursor = styled("div")`
  position:relative;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border 1px solid ${Colors.main.Red.default};
  display:block;

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

const Page = styled("div")`
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  background-color: ${Colors.main.Black.default};
`;
export default AppRouter;
