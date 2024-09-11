import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Component/Navbar';
import Dashboard from './Pages/Dashboard';
import Tables from './Pages/Tables';
import Sidebar from './Component/Sidebar';

function App() {
  const [showSidebar, setSidebar] = useState(true);

  const sidebarHandler = () => {
    setSidebar(!showSidebar);
  };

  return (
    <BrowserRouter>
      <div className="container-fluid py-5">
        <div className={showSidebar ? "sidebar-main ps showSidebar my-4" : "sidebar-main ps"}>
          <Sidebar />
        </div>
        <div className="main-content ps-3 pe-3">
          <Navbar onClick={sidebarHandler} tag="Dashboard" />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pages/Dashboard" element={<Dashboard />} />
            <Route path="/pages/Tables" element={<Tables />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
