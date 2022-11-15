import React from 'react';
import './ProblemSolver.css';

import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'

export function ProblemSolver() {
  return (
    <body>
      <Navbar/>
      <div className='filler-space bg-white dark:bg-slate-800'>
        <div className='centerbox bg-white dark:bg-slate-600'>
          <div>
            <p>Describe the problem with the selected machine:</p>
            <textarea className='input1 bg-gray-200 dark:bg-sky-900' placeholder=''/>
            <br />
            <p>Describe what the machine is supposed to do:</p>
            <textarea className='input1 bg-gray-200 dark:bg-sky-900' placeholder=''/>
            <br />
            <label htmlFor="machineOn" className='checkLabel'>Is your machine on?</label>
            <input type="checkbox" className='machineOn' />
            <br />
            <label htmlFor="notStuck" className='checkLabel'>Is nothing stuck in the machine?</label>
            <input type="checkbox" className='notStuck' />
            <br />
            <br />
            <a href="login" className='send bg-vBlue hover:bg-sky-600 active:bg-sky-500'>Send report</a>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default ProblemSolver;
