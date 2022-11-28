import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import './UserCreation.css';

//Component
import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'

export function UserCreation() {
  const navigate = useNavigate();
  const create = () => navigate('../userCreation');
  return (
    <body className="usercreation-body">
      < Navbar />
      <div className='usercreation-container bg-white dark:bg-slate-800 h-[90.5vh] grid place-items-center'> 
        <div className="md:text-6xl text-2xl pb-10 text-cyan-800 dark:text-cyan-400 text-center md:pt-16 font-helvetica" >Create a new user</div> 
        <div className='grid md:grid-cols-2 place-items-center max-w-[800px] w-[80vw] '>
          <div className='text-cyan-800 dark:text-cyan-400'>Email
          <textarea className='bg-slate-200 dark:bg-slate-600 dark:text-slate-300 py-1 px-1.5 mb-[2vh] md:w-[20vw] resize-none outline-0'  placeholder=''/></div>
          <div className='text-cyan-800 dark:text-cyan-400'>Email
          <textarea className='bg-slate-200 dark:bg-slate-600 dark:text-slate-300 py-1 px-1.5 mb-[2vh] md:w-[20vw] resize-none outline-0'  placeholder=''/></div>
          <div className='text-cyan-800 dark:text-cyan-400'>Email
          <textarea className='bg-slate-200 dark:bg-slate-600 dark:text-slate-300 py-1 px-1.5 mb-[2vh] md:w-[20vw] resize-none outline-0'  placeholder=''/></div>
          <div className='text-cyan-800 dark:text-cyan-400'>Email
          <textarea className='bg-slate-200 dark:bg-slate-600 dark:text-slate-300 py-1 px-1.5 mb-[2vh] md:w-[20vw] resize-none outline-0'  placeholder=''/></div>
        </div>
        <button className='self-start hover:rounded-2xl transition-all ease-in-out duration-200 rounded-xl bg-vBlue dark:bg-slate-500 md:text-xl text-sm text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600 md:w-[100px] w-[20vw] md:h-[4.5vh] h-[4vh] md:mt-8 md:mb-12' onClick={create}>
          Create
        </button>
      </div>    
      < Footer />
    </body>
  );
}