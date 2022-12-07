import React, {useState} from 'react';
import './Navbar.css';
import './Sidebar.css';

import { HiOutlineMenu } from 'react-icons/hi';
import { HiOutlineX } from 'react-icons/hi'

//Component
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { LanguageSwitch } from '../../Components/Languages/LanguageSwitch'
import { NavbarContent } from './NavManager'

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

  const [sideOpen, setSideOpen] = useState(false);
  var sidebar;
  const toggleSide = () => {
    setSideOpen(!sideOpen)
    sidebar = document.getElementById("sidebar");
    if (sidebar != null) {
      if (sideOpen) {
        sidebar.style.top = '-100vh';
      }
      else {
        sidebar.style.top = '0';
      }
    }
  }

  const buttonStyling = `fill-black dark:fill-white`;

  return (
    <>
      {/* <Sidebar toggleSide={toggleSide} toggleMode={toggleMode} sideOpen={sideOpen} /> */}
      {/* SIDEBAR */}
      <div id="sidebar" className='sidebar-container'>
        <div className='sidebar-icon'>
          <svg className="w-10 stroke-black dark:stroke-white mr-[2vw]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={toggleMode}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
          <HiOutlineX className='h-10 stroke-black dark:stroke-white' onClick={toggleSide}/>
        </div>
        <div className='sidebar-wrapper'>
          <NavbarContent bar={'s'} toggleMode={toggleMode}/>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="navbar bg-slate-300 dark:bg-slate-900">
        <a href="/" className="navbar-link">
          <img className="h-16" src="viscon_logo_only.png" draggable="false" alt=''/>
        </a>
        <div className="navbar-bars" onClick={toggleSide}>
          <HiOutlineMenu className="stroke-black dark:stroke-cyan-400"/>
        </div>
        <NavbarContent bar={'n'} toggleMode={toggleMode}/>
        <LanguageSwitch></LanguageSwitch>
      </div>
    </>
  );
}