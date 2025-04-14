// components/Layout.js
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    
    </>
  );
};

export default Layout;
