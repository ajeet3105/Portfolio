import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";


function App() {
  return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <Outlet/>
        <Footer/>
      </div>
  );
}

export default App;
