import React from "react";
import Cookies from "universal-cookie";
import App from "../App";
import Home from "../layout/home/Home";
import { Navigate, Outlet } from "react-router-dom";
const cookies = new Cookies();
// { component: Component, ...rest }

export default function ProtectedRoutes() {
  const token = cookies.get("token");
  
  return (
        <>
        {token ? <Outlet/>:<Navigate to={'/'}/>}
        </>
  );
}