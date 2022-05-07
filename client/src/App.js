import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

//fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; 

// We import all the components we need in our app
import {
    Navigation,
    Footer,
    Home,
    About,
    AdminPortal,
    StudentPlan,
  } from "./components";
 
const App = () => {
 return (
     <div>
        <Navigation />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/AdminPortal" element={<AdminPortal />} />
        <Route path="/StudentPlan" element={<StudentPlan />} />
        </Routes>
        <Footer />
    </div>
 );
};
 
export default App;