import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { GrCubes } from 'react-icons/gr';
import { GrResources } from 'react-icons/gr';
import { MdTableChart } from 'react-icons/md';
import { HiNewspaper } from 'react-icons/hi';
import { BsAmd } from 'react-icons/bs';
import { MdConfirmationNumber } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { FaSignInAlt } from 'react-icons/fa';
import { MdFormatTextdirectionLToR } from 'react-icons/md';

const Sidebar = () => {
  return (
    <aside className="position-fixed top-0 start-0 vh-100 bg-light p-3" style={{ width: '250px', zIndex: 10 }}>
      <div className="sidenav-header mb-4">
        <Link className="navbar-brand d-flex align-items-center" to="/pages/dashboard">
          <GrCubes size={50} className="me-2" />
          <span className="fw-bold">Soft UI Dashboard</span>
        </Link>
      </div>
      <hr className="mb-4" />
      <nav className="navbar-nav">
        <ul className="nav-list list-unstyled">
          <li className="nav-item mb-2">
            <Link to="/pages/dashboard" className="nav-link d-flex align-items-center">
              <GrResources size={18} className="me-2" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="#!" className="nav-link d-flex align-items-center">
              <MdTableChart size={18} className="me-2" />
              <span>Tables</span>
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="#!" className="nav-link d-flex align-items-center">
              <HiNewspaper size={18} className="me-2" />
              <span>Billing</span>
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="#!" className="nav-link d-flex align-items-center">
              <BsAmd size={18} className="me-2" />
              <span>Virtual Reality</span>
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="#!" className="nav-link d-flex align-items-center">
              <MdConfirmationNumber size={18} className="me-2" />
              <span>Rtf</span>
            </Link>
          </li>
          <h6 className="mt-4">Account</h6>
          <li className="nav-item mb-2">
            <Link to="#!" className="nav-link d-flex align-items-center">
              <CgProfile size={18} className="me-2" />
              <span>Profile</span>
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="#!" className="nav-link d-flex align-items-center">
              <FaSignInAlt size={18} className="me-2" />
              <span>Sign Up</span>
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="#!" className="nav-link d-flex align-items-center">
              <MdFormatTextdirectionLToR size={18} className="me-2" />
              <span>Sign In</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
