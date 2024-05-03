import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Public from "./Public";
import Protected from "./Protected";
import Profile from "./Profile";
import About from "./About";

const AppRouter = () => {
   const [current, setCurrent] = useState("home");

   useEffect(() => {
      setRoute();
      window.addEventListener("popstate", setRoute);
      return () => window.removeEventListener("popstate", setRoute);
   }, []);

   const setRoute = () => {
      const location = window.location.pathname.split("/");
      const pathname = location[location.length - 1];
      setCurrent(pathname ? pathname : "home");
   };

   return (
      <Router>
         <Nav current={current} />
         <Routes>
            <Route exact path="/" element={<Public />} />
            <Route exact path="/protected" element={<Protected />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/about" element={<About />} />
            <Route element={<Public />} />
         </Routes>
      </Router>
   );
};

export default AppRouter;
