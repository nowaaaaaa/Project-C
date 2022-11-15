import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import{ UserpageButtons } from './UserpageButtons';
import './Userpage.css';
import '../../App.css';

//Component
import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'

export function Userpage() {
  const navigate = useNavigate();
  const problem = () => navigate('../machines');
  return (
    <body className="userpage-body">
      < Navbar />
      <div className='user-container bg-white dark:bg-slate-800 h-[90.5vh] grid place-items-center'> 
        <div className="text-6xl pb-10 text-cyan-800 dark:text-cyan-400 text-center pt-24 font-helvetica" >Welcome, Harm de Boer from Boer Harm BV!</div> 
        <button className='hover:rounded-2xl transition-all ease-in-out duration-200 rounded-xl bg-vBlue dark:bg-slate-500 text-xl text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600 w-1/4 h-[5vh] mt-8 mb-12' onClick={problem}>Do you have a problem with a machine?</button>
        {UserpageButtons("Client")} 
      </div>    
      < Footer />
    </body>
  );
}