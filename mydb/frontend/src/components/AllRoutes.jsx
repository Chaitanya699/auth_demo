import React from 'react';
import { Route,Routes } from 'react-router-dom'; // Remove Router import

import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Login from '../pages/Login'
import Signup from '../pages/Signup';
const AllRoutes = () => {
  return (
    <Routes> {/* Wrap your routes in <Routes> */}
    <Route path="/" element={<Home />} /> {/* Use the "element" prop instead of "component" */}
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
  );
};

export default AllRoutes;
