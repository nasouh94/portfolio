import React, { useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import {
  CSSTransition
} from "react-transition-group";
import styled from "@emotion/styled";

import SideNav from "./components/SideNav.jsx";
import About from "./components/About.jsx";

import { Colors, Animation } from "./rules/index";

const AppRouter = () => {
  const cursor = useRef();

  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
    { path: "/work", name: "work", Component: Work }
  ];

  console.log(Animation, "sada");
  useEffect(() => {
    if (cursor.current) {
      document.addEventListener("mousemove", (e) => {
        cursor.current.setAttribute(
          "style",
          "top: " + e.pageY + "px; left: " + e.pageX + "px;"
        );
      });
    }
  }, []);

  return (
    <Page className="App">
      <Cursor className="cursor" ref={cursor}>
        <div className="vertical" /> <div className="horizontal" />{" "}
      </Cursor>
      <SideNav />
      {routes.map(({ path, Component, name }) => {
        return (
          <Route key={name} path={path} exact>
            {({ match }) => {
              return (
                <CSSTransition
                  in={match != null}
                  timeout={1200}
                  classNames="page"
                  unmountOnExit
                  onEnter={Animation.onEnter}
                  onExit={Animation.onExit}
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              );
            }}
          </Route>
        );
      })}
    </Page>
  );
};

function Home() {
  return (
    <Container>
      <div className="content">
        <div className="content--inner">home</div>
      </div>
    </Container>
  );
}

function Work() {
  return (
    <Container>
      <div className="content">
        <p className="content--inner">work</p>
      </div>
    </Container>
  );
}

const Page = styled("div")`
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  background-color: ${Colors.main.Black.default};

  .page-enter {
    opacity: 0;
  }
  .page-enter-active {
    opacity: 1;
    transition: opacity 400ms;
    transition-delay: 600ms;
  }
  .page-exit {
    opacity: 1;
  }
  .page-exit-active {
    opacity: 0;
    transition: opacity 400ms;
  }
`;

const Container = styled("div")`
  width: 500px;
  height: 400px;
  background: white;
  top: 97px;
  bottom: 0;
  right: 220px;
  position: absolute;
  transition: all 0.4s cubic-bezier(0.2, 0.6, 0.2, 1);
`;

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

export default AppRouter;
