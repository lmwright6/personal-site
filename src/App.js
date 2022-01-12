import logo from './logo.svg';
import './App.css';
import React from "react";
import About from './pages/About';
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import NavBar from './components/NavBar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <>

    <Router>
      <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/" exact component={Home}>
          </Route>
          <Route path="/about" component={About}>
          </Route>
          <Route path="/blogs" component={Blogs}>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

