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
            <textarea className='input1 bg-gray-100 dark:bg-sky-900' placeholder='Describe your problem'/>
            <br />
            <textarea className='input1 bg-gray-100 dark:bg-sky-900' placeholder='Describe what is supposed to happen'/>
            <br />
            <label htmlFor="machineOn dark:accent-slate-600">Is your machine on?</label>
            <br />
            <input type="checkbox" className='machineOn dark:accent-slate-600' />
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default ProblemSolver;
