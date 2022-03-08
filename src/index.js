import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  AdminPortal,
} from "./components";

ReactDOM.render(
  <Router>
  <Navigation />
  <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/AdminPortal" element={<AdminPortal />} />
  </Routes>
  <Footer />
  </Router>,

  document.getElementById("root")
);

reportWebVitals();