
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from"./Component/Navbar";
import Dashboard from "./Pages/Dashboard";
import Tables from "./Pages/Tables";
import Sidebar from "./Component/Sidebar";


function App() {
  const [showSidebar, setSidebar] = useState(true);

  const sidebarHandler = () => {
    setSidebar(!showSidebar);
  };
<Sidebar />
  return (
   <div >
      <div className='container-fluid py-5'>
         <BrowserRouter>
        <div className={showSidebar ? "sidebar-main ps showSidebar my-4" : "sidebar-main ps"}>
       
          
        </div>
        <div className="main-content ps-3 pe-3">
          <Navbar sidebarHandler={sidebarHandler} tag="Dashboard" />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pages/Dashboard" element={<Dashboard />} />
            <Route path="/pages/Tables" element={<Tables />} />
          </Routes>
        </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
