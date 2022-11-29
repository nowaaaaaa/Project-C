import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Userpage.css';
import '../../App.css';

//Component
import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'
import{ UserpageButtons } from '../../Components/Userpage/UserpageButtons';

export function Userpage() {
  const navigate = useNavigate();
  const problem = () => navigate('../machines');
  return (
    <body className="userpage-body">
      < Navbar />
      <div className='user-container bg-white dark:bg-slate-800 grid place-items-center'> 
        <div className="md:text-6xl text-2xl pb-10 text-cyan-800 dark:text-cyan-400 text-center md:pt-16 font-helvetica" >Welcome, Harm de Boer from Boer Harm BV!</div> 
        <button className='self-start hover:rounded-2xl transition-all ease-in-out duration-200 rounded-xl bg-vBlue dark:bg-slate-500 md:text-xl text-sm text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600 md:w-1/4 w-[65vw] md:h-[5vh] h-[4vh] md:mt-8 md:mb-12' onClick={problem}>
          Do you have a problem to report?
        </button>
        {UserpageButtons("Client")} 
      </div>    
      < Footer />
    </body>
  );
}