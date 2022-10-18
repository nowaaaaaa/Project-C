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
            <textarea className='input1 bg-gray-100 dark:bg-sky-900' placeholder='Your problem'/>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}

export default ProblemSolver;
