import React from 'react';
import './ProblemSolver.css';

import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'
import { useNavigate } from 'react-router-dom';

export function ProblemSolver() {
  const navigate = useNavigate();
  const login = () => navigate('../login');
  return (
    <body>
      <Navbar/>
      <div className='filler-space bg-white dark:bg-slate-800'>
          <div className='text-cyan-800 dark:text-cyan-400'>
            <p>Describe the problem with the selected machine:</p>
            <textarea className='input1 bg-gray-200 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-400 py-1 px-1.5'  placeholder=''/>
            <br />
            <p>Describe what the machine is supposed to do:</p>
            <textarea className='input1 bg-slate-200 dark:bg-slate-600 py-1 px-1.5' placeholder=''/>
            <br />
            <label htmlFor="machineOn" className='checkLabel'>Is your machine on?</label>
            <input type="checkbox" className='machineOn' />
            <br />
            <label htmlFor="notStuck" className='checkLabel'>Is nothing stuck in the machine?</label>
            <input type="checkbox" className='notStuck' />
            <br />
            <br />
            <button className='hover:rounded-2xl transition-all ease-in-out duration-200 rounded-xl bg-vBlue dark:bg-slate-500 md:text-xl text-sm text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600 md:w-1/6 w-[30vw] md:h-[5vh] h-[4vh] md:mt-8 md:mb-12' onClick={login}>
              Send report</button>
          </div>
      </div>
      <Footer />
    </body>
  );
}

export default ProblemSolver;
