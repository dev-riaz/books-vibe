import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";

const Mainlayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Mainlayout;
