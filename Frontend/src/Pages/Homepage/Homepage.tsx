import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import '../../App.css';
import { getRole } from '../../Pages/Login/AccountManager';

//Component
import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'

export function Homepage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  }
  const role = getRole();

  useEffect(() => {
    if (role != null) {
      if (role === 0) {
        //not logged in
        navigate("/login")
      }
      if (role === 1) {
        //admin
        navigate("/userpage")
      }
      if (role === 2 || role === 3 || role === 4) {
        //client
        navigate("/userpage")
      }
    }
  })

  return (
    <>
      < Navbar />
      <div className="homepage-container bg-white dark:bg-slate-800">
        <img src="viscon-group-logo.png" className="App-logo" alt="logo" />
        <button className='start-text bg-slate-300 dark:bg-slate-700' onClick={handleClick}>
          <p className="text-cyan-800 dark:text-cyan-400">Log In</p>
        </button>
      </div>
      < Footer />
    </>
  );
}

