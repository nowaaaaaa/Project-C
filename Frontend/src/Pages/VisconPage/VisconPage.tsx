import React from 'react';
import './VisconPage.css';

import { Navbar } from '../../Components/Navbar/Navbar'
import { report } from 'process';

let text = "Claim";

function moveItem() {
  const
    origin = document.getElementById('origin'),
    target = document.getElementById('target'),
    last = document.getElementById('last'),
    el = origin?.firstElementChild,
    ol = target?.firstElementChild;
    if (el) {
      target?.append(el);
    }
    if (ol) {
      last?.append(ol);
    }
};

function rep(reporter: string, problem: string, should:string, tried:string, phone:string) {
  return(
    <li id="origin">
      <div>
        <p className='reporterName font-lora bg-slate-300 dark:bg-slate-700 text-center'>{reporter}</p>
        <p className='reportText pl-2'>{problem}</p>
        <p className='reportText pl-2'>{should}</p>
        <p className='reportText pl-2'>{tried}</p>
        <p className='reportText pl-2'>{phone}</p>
        <p className='text-center pb-2 mb-3 border-b border-black'><a onClick={moveItem} className='pointer bg-slate-400 dark:bg-slate-700 px-4 rounded-3xl'>{text}</a></p>
      </div>
    </li>
  )
}

export function VisconPage() {
  return (
    <body>
        <Navbar/>
        <div className='bg bg-white dark:bg-slate-800 pt-[5vh]'>
              <div className='reports bg-slate-300 dark:bg-slate-600'>
              <p className='dark:text-cyan-400 text-center'>Pending</p>
              <ul className=''>
                    {rep("Harry", "My machine broke while trying to load my apples", "It should have moved the apples to the shuttle", "I tried to move the basket", "06 12345678")}
                    {rep("Peter", "My machine broke while trying to load my eggs", "It should have moved the eggs to the shuttle", "I tried to move the basket", "06 87654321")}
                    {rep("Harm", "My machine broke while trying to load my tomatoes", "It should have moved the tomatoes to the shuttle", "I tried to move the basket", "06 0192837")}
                </ul>
              </div>
              <div className='reports bg-slate-300 dark:bg-slate-600'>
                <p className='dark:text-cyan-400 text-center'>Active</p>
                <ul className='' id='target'>
                </ul>
              </div>
              <div className='reports bg-slate-300 dark:bg-slate-600'>
              <p className='dark:text-cyan-400 text-center'>Closed</p>
                <ul className='' id='last'>
                  <li></li>
                </ul>
              </div>
        </div>
    </body>
  );
}

export default VisconPage;
