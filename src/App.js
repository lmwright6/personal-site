import './App.css';
import React from "react";
import About from './pages/About';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import { NavBar } from 'lmw-gui-components';
import { getDocs, getFirestore, collection } from 'firebase/firestore'
import { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AboutContext, AboutContextProvider } from './context/AboutContext';

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
  const [navName, setNavName] = useState('');
  useEffect(() => { 
    const getAboutName = async () => {
      const aboutTitle = await getDocs(collection(getFirestore(), 'about'));
      aboutTitle?.docs.map((a) => {
        setNavName(a.data().name);
        
      })
    }
    getAboutName();
  }, [])

  return (
    <>
      <AboutContextProvider>
        <Router>
        <NavBar name="Lauren testWright" fontColor="#2E2E2E" backgroundColor="#CCCCFF"  links={routeData}/>
          <Switch>
            <Route path="/" exact component={Home}>
            </Route>
            <Route path="/about" component={About}>
            </Route>
            <Route path="/blogs" component={Blogs}>
            </Route>
          </Switch>
        </Router>
      </AboutContextProvider>
    </>
  );
}

