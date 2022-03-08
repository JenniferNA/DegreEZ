import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation/>
    <Home/>
    <Footer />
  </Router>,

  document.getElementById("root")
);

reportWebVitals();