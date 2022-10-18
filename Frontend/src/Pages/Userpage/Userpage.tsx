import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import{ UserpageButtons } from './UserpageButtons';
import '../../App.css';


//Component
import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'

export function Userpage() {
  const navigate = useNavigate();
  return (
    <body className="userpage-body">
      < Navbar />
      <div className='user-container bg-white dark:bg-slate-800 h-[90.5vh]'> 
        <div className="text-6xl pb-10 text-cyan-800 dark:text-cyan-400 text-center pt-24" >Welcome, Harm de Boer from Boer Harm BV!</div> 
        < UserpageButtons /> 
      </div>    
      < Footer />
    </body>
  );
}