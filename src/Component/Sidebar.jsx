import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";


import { GrCubes } from "react-icons/gr";
import { GrResources } from "react-icons/gr";
import { MdTableChart } from "react-icons/md";
import { HiNewspaper } from "react-icons/hi2";
import { BsAmd } from "react-icons/bs";
import { MdConfirmationNumber } from "react-icons/md";

import { CgProfile } from "react-icons/cg";
import { FaSignInAlt } from "react-icons/fa";
import { MdFormatTextdirectionLToR } from "react-icons/md";


const Sidebar = () => {
    return (
        <>
       <aside className="position-fixed start-0 top-0">
      <div className="sidenav-header">
        <Link className="navbar-brand" to="/pages/dashboard" target='_blank'>
        <span className="ms-2 fw-bold"><GrCubes size={50} />Soft UI Dashboard</span>
        </Link>
      </div>
      <hr className="horizontal-divider" />
      <nav className="navbar-nav">
        <ul className="nav-list list-unstyled">

          <li className="nav-item">
          <Link to="/pages/dashboard" className="nav-link">
            
            <div className='soso'>
              <div className="icons"><GrResources size={18}/> </div>
             <p>  Dashboard</p>
             </div>
            </Link>
          </li>
          <li className="nav-item">
          <Link to="#!" className="nav-link">
          <div className='soso'>
              <div className="icons"> <MdTableChart  size={18} /> </div>
              <p>
              Tables
              </p>
          </div>
            </Link>
          </li>
          <li className="nav-item">
          <Link to="#!" className="nav-link">
          <div className='soso'>
              <div className="icons"> <HiNewspaper  size={18} /> </div>
              <p>
              Billing
              </p>
          </div>
            </Link>
          </li>
          <li className="nav-item">
          <Link to="#!" className="nav-link">
          <div className='soso'>
              <div className="icons"> <BsAmd  size={18} /> </div>
              <p>
              Virtual Reality
              </p>
          </div>
            </Link>
          </li>
          <li className="nav-item">
          <Link to="#!" className="nav-link">
          <div className='soso'>
              <div className="icons"> <MdConfirmationNumber  size={18} /> </div>
              <p>
              Rtf
              </p>
          </div>
            </Link>
          </li>
          <h6>Account</h6>
          <li className="nav-item">
          <Link to="#!" className="nav-link">
          <div className='soso'>
              <div className="icons"> < CgProfile  size={18}/> </div>
              <p>
              Profile
              </p>
          </div>
            </Link>
          </li>
          <li className="nav-item">
          <Link to="#!" className="nav-link">
          <div className='soso'>
              <div className="icons"> <FaSignInAlt  size={18}/> </div>
              <p>
              Sign Up
              </p>
          </div>
            </Link>
          </li>
          <li className="nav-item">
          <Link to="#!" className="nav-link">
          <div className='soso'>
              <div className="icons"> <MdFormatTextdirectionLToR  size={18} /> </div>
              <p>
              Sign In
              </p>
          </div>
            </Link>
          </li>
          
        </ul>
      </nav>
    </aside>
    </>
  );
};

export default Sidebar;
