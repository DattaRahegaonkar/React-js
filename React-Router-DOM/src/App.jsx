import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import Courses from "./components/Courses";
import MockTest from "./components/MockTest";
import Reports from "./components/Reports";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
    children: [
      {
        path: 'courses',
        element: <Courses/>
      },
      {
        path: 'mocktest',
        element: <MockTest/>
      },
      {
        path: 'reports',
        element: <Reports/>
      },
      {
        path: '*',
        element: <NotFound/>
      }
    ],
  },
  {
    path: "/student/:id",
    element: (
      <>
        <Navbar />
        <ParamComp />
      </>
    ),
  },
  {
    path: '*',
    element: <NotFound/>
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
