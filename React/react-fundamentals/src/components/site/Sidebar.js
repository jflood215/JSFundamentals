import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Resources from "./Resources";
import Home from "./Home";
import FunctionalComponentDemo from "../concepts/FunctionalComponentDemo";
import JSXRules from "../concepts/JSXRules";
import State from "../concepts/State";
import Effects from "../concepts/Effects";
import PropsDemo from "../concepts/PropsDemo";
import Hooks from "../concepts/Hooks";
import TimePiecesApp from "../apps/timer-apps/TimePiecesApp";
import NytApp from "../apps/nyt-app/NytApp";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-list-styling">
        <ul className="sidebar-list-unstyled">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/functionalcomponent">Functional Component</Link>
          </li>
          <li>
            <Link to="/jsxrules">JSX Rules</Link>
          </li>
          <li>
            <Link to="/state">useState</Link>
          </li>
          <li>
            <Link to="/effects">useEffect</Link>
          </li>
          <li>
            <Link to="/propsdemo">Props Demo</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
          <li>
            <Link to="/timer">Timer</Link>
          </li>
          <li>
            <Link to="/nyt">NYT App</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-route">
        {/* SWITCH */}
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/resources">
            <Resources />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/JSXRules">
            <JSXRules />
          </Route>

          <Route exact path="/functionalcomponent">
            <FunctionalComponentDemo />
          </Route>

          <Route exact path="/state">
            <State />
          </Route>

          <Route exact path="/effects">
            <Effects />
          </Route>

          <Route exact path="/propsdemo">
            <PropsDemo />
          </Route>

          <Route exact path="/hooks">
            <Hooks />
          </Route>

          <Route exact path="/timer">
            <TimePiecesApp />
          </Route>
          <Route exact path="/timer">
            <NytApp />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;
