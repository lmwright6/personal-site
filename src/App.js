import logo from './logo.svg';
import './App.css';
import React from "react";
import About from './pages/About';
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import NavBar from './components/NavBar/NavBar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const routeData = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Blogs",
    path: "/blogs"
  }
]
export default function App() {
  return (
    <>

    <Router>
      <NavBar name="Lauren Wright" links={routeData}/>

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

