import React from "react";
import "./css/Home.css";

import Banner from "./Banner";
import Body from "./Body";
import Footer from "./Footer";
import Result from "./Result";
import { Route, Switch } from "react-router-dom";

const Home = () => {
  return (
    <div className="home mt-0">
      <Banner />
      <Switch>
        <Route path="/result">
          <Result />
        </Route>
        <Route path="/">
          <Body />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default Home;
