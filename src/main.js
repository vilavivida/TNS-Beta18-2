import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import MyInfo from "./components/MyInfo";
import SimpleMap from "./components/Map";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AboutUs from "./components/About";
import QuizWidget from "./components/Quiz";

const Main = () => {
  return (
    <Switch>
      {" "}
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route component={MyInfo} exact={true} path="/">
        {/* <MyInfo /> */}
      </Route>
      <Route component={SimpleMap} exact path="/neighborhood">
        {/* <SimpleMap /> */}
      </Route>
      <Route exact path="/signIn">
        <SignIn />
      </Route>
      <Route exact path="/signUp">
        <SignUp />
      </Route>
      <Route exact path="/quiz">
        <QuizWidget />
      </Route>
      <Route exact path="/about">
        <AboutUs />
      </Route>
    </Switch>
  );
};

export default Main;
