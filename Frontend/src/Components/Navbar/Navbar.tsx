import React, {useState} from 'react';
import './Navbar.css';

import { FaBars } from 'react-icons/fa';

//Component
import { Sidebar } from '../../Components/Sidebar/Sidebar'

export function Navbar() {
  const root = document.getElementsByTagName("html")[0];

  const toggleMode = () => {
    if (localStorage.theme === "light") {
      root.setAttribute("class", "dark");
      localStorage.theme = "dark";
    }
    else {
      root.removeAttribute("class");
      localStorage.theme = "light";
    }
  }

  const [sideOpen, setSideOpen] = useState(false)

  const toggleSide = () => {
    setSideOpen(!sideOpen)
  }

  const buttonStyling = `fill-black dark:fill-white`;

  return (
    <>
      {sideOpen && <Sidebar toggleSide={toggleSide} toggleMode={toggleMode}/>}
      <div className="navbar bg-slate-500 dark:bg-slate-900">
        <a href="/" className="navbar-link">
        <img className="h-16" src="viscon_logo_only.png" draggable="false" alt=''/>
        </a>
        <div className="navbar-bars" onClick={toggleSide}>
          <FaBars className=""/>
        </div>
        <div className="navbar-menu text-black dark:text-cyan-400">
          <a href="/machines" className="navbar-link">
            Machines
          </a>
          <a href="/machines" className="navbar-link">
            Machines
          </a>
          <a href="/machines" className="navbar-link">
            Machines
          </a>
          <a href="/machines" className="navbar-link">
            Machines
          </a>
        </div>
        <div className="navbar-button">
          <svg className="icon stroke-black dark:stroke-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={toggleMode}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
          <a href="/login" className="navbar-button-link bg-vBlue">
            Log In
          </a>
        </div>
      </div>
    </>
  );
}