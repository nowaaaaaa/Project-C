import React from 'react';
import './Sidebar.css';

import { FaTimes } from 'react-icons/fa';

export function Sidebar({toggleSide, toggleMode} : {toggleSide:any, toggleMode:any}) {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-icon'>
        <svg className="icon w-20 stroke-black dark:stroke-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={toggleMode}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
        <FaTimes className='w-20' onClick={toggleSide}/>
      </div>
      <div className='sidebar-wrapper'>
        <div className='sidebar-menu'>
          <a href="/machines" className="sidebar-link">
            Machines
          </a>
          <a href="/machines" className="sidebar-link">
            Machines
          </a>
          <a href="/machines" className="sidebar-link">
            Machines
          </a>
          <a href="/machines" className="sidebar-link">
            Machines
          </a>
        </div>
        <div className='sidebar-button'>
          <a href="/login" className="sidebar-button-link bg-vBlue">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
}