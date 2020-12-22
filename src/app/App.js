import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "../components/Header";
import Tarifs from "../components/Tarifs";
import Team from "../components/Team";
import { makeStyles } from "@material-ui/core/styles";
import { TrainerCard } from "./../components/Team";
import DataTeam from "./../data/team";

const trainerStyles = makeStyles({
  content: {
    margin: "5px",
    padding: "15px",
  },
});

function App() {
  const appStyle = trainerStyles();

  return (
    <Router>
      <Header />
      <div className={appStyle.content}>
        <Switch>
          {/* The Switch decides which component to show based on the current URL.*/}
          <Route exact path="/tarifs">
            <Tarifs />
          </Route>
          <Route path="/equipe">
            <Team />
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
