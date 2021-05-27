import React from "react";
import "./styles.css";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import Achivements from "./pages/Achivments/Achivements";
import Description from "./pages/Description/Description";
import { Redirect } from "react-router";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/shop" />
        </Route>
        <Route exact path="/description">
          <Description />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/achivements">
          <Achivements />
        </Route>
      </Switch>
    </div>
  );
}
