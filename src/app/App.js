import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header";
import Tarifs from "../components/Tarifs";
import Container from "@material-ui/core/Container/Container";
import { makeStyles } from "@material-ui/core/styles";

const appStyles = makeStyles({
  content: {
    margin: "5px",
    padding: "15px",
  },
});

function App() {
  const appStyle = appStyles();

  return (
    <Router>
      <Header />
      <div className={appStyle.content}>
        <Switch>
          {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path="/tarifs">
            <Tarifs />
          </Route>

          <Route path="/">
            <div>Hello World!</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
