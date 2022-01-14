import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA8T2mVlX-tcbPEavCJT1sy6QqIHTolMg4",
  authDomain: "personal-site-a656d.firebaseapp.com",
  projectId: "personal-site-a656d",
  storageBucket: "personal-site-a656d.appspot.com",
  messagingSenderId: "425117033155",
  appId: "1:425117033155:web:df7df8680bc9f486893876",
  measurementId: "G-WD3LYQR907"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 

reportWebVitals();
