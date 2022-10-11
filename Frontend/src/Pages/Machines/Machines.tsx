import React from 'react';
import './Machines.css';

import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'

export function Machines() {
  return (
    <body>
      <Navbar/>
    <div className='list bg-white dark:bg-slate-800'>
      <div className='item'>
      <a href="#">Machine 1</a>
        <p>Problem 1</p>
        <p>Problem 2</p>
        <p>Problem 3</p>
      </div>
      <div className='item'>
      <a href="#">Machine 2</a>
        <p>Problem 1</p>
        <p>Problem 2</p>
        <p>Problem 3</p>
      </div>
      <div className='item'>
        <a href="#">Machine 3</a>
        <p>Problem 1</p>
        <p>Problem 2</p>
        <p>Problem 3</p>
      </div>
      <div className='item'>
      <a href="#">Machine 4</a>
        <p>Problem 1</p>
        <p>Problem 2</p>
        <p>Problem 3</p>
      </div>
    </div>
    <Footer></Footer>
    </body>
  );
}

export default Machines;
