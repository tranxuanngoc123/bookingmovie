import React, { Fragment } from "react";
import Header from "./Layout/Header";
import { Route } from "react-router";
import HomeCarousel from "./Layout/HomeCarousel";
import Footer from "./Layout/Footer";
import New from "./Layout/News";
export const HomeTemplate = (props)=> {
  const { exact, path, Component } = props;
  return <Route
    exact={exact}
    path={path}
    render={(propRoute) => {
      return <Fragment>
        <Header {...propRoute}/>
        <HomeCarousel {...propRoute}/>
        <br/>
        <Component {...propRoute} />
        <New/>
        <br/>
        <Footer/>
      </Fragment>
    }} />
}
