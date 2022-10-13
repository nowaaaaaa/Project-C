import React from 'react';
import './Machines.css';

import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'

export function Machines() {
  return (
    <body>
      < Navbar />
      <div className='filler-space bg-white dark:bg-slate-800' />
      <div className='list bg-vBlue dark:bg-slate-600'>
        <div className='item bg-white dark:bg-slate-500'>
          <p>Machine 1</p>
          <p className='problem'>Problem 1</p>
          <p className='problem'>Problem 2</p>
          <p className='problem'>Problem 3</p>
          <br></br>
          <a href="#">Problem not Resolved</a>
        </div>
        <div className='item bg-white dark:bg-slate-500'>
          <p>Machine 2</p>
          <p className='problem'>Problem 1</p>
          <p className='problem'>Problem 2</p>
          <p className='problem'>Problem 3</p>
          <br></br>
          <a href="#">Problem not Resolved</a>
        </div>
        <div className='item bg-white dark:bg-slate-500'>
          <p>Machine 3</p>
          <p className='problem'>Problem 1</p>
          <p className='problem'>Problem 2</p>
          <p className='problem'>Problem 3</p>
          <br></br>
          <a href="#">Problem not Resolved</a>
        </div>
        <div className='item bg-white dark:bg-slate-500'>
          <p>Machine 4</p>
          <p className='problem'>Problem 1</p>
          <p className='problem'>Problem 2</p>
          <p className='problem'>Problem 3</p>
          <br></br>
          <a href="#">Problem not Resolved</a>
        </div>
      </div>
      < Footer />
    </body>
  );
}

export default Machines;
