import React from 'react';
import './VisconPage.css';

import { Navbar } from '../../Components/Navbar/Navbar'

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
}

export function VisconPage() {
  return (
    <body>
        <Navbar/>
        <div className='bg bg-white dark:bg-slate-800 pt-[5vh]'>
              <div className='reports bg-slate-300 dark:bg-slate-600'>
              <p className='dark:text-cyan-400 text-center'>Pending</p>
              <ul className=''>
                  <li id='origin'>
                    <div className='bg-slate-300 dark:bg-slate-600 rounded-xl pb-2'>
                      <p className='reporterName font-lora rounded-t-xl bg-slate-300 dark:bg-slate-600 text-center border-b border-black '>Boer Harm</p>
                      <p className='reportText pl-2'>My machine broke after loading tomatoes</p>
                      <p className='reportText pl-2'>It should be moving the tomatoes</p>
                      <p className='reportText pl-2'>06 12345678</p>
                      <p className='text-center'><a onClick={moveItem} className='pointer bg-slate-400 dark:bg-slate-700 px-4 rounded-3xl'>{text}</a></p>
                    </div>
                  </li>
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
