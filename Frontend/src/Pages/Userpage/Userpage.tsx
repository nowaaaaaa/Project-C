import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import{ UserpageButtons } from './UserpageButtons';
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
      <div className='user-container bg-white dark:bg-slate-800 h-[90.5vh]'> 
        <div className="text-6xl pb-10 text-cyan-800 dark:text-cyan-400 text-center pt-24 font-roboto" >Welcome, Harm de Boer from Boer Harm BV!</div> 
        <button className='w-1/5 h-1/12 rounded-md' onClick={problem}>Do you have a problem with a machine?</button>
        {UserpageButtons("Client")} 
      </div>    
      < Footer />
    </body>
  );
}