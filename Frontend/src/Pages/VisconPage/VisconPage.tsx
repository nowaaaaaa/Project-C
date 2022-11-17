import React from 'react';
import './VisconPage.css';

import { Navbar } from '../../Components/Navbar/Navbar'

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
        <div className='bg bg-white dark:bg-slate-800'>
            <div className='centerbox bg-white dark:bg-slate-600'>
              <div className='list'>
              <p>Pending</p>
              <ul className='reports bg-gray-200 dark:bg-sky-800 rounded-t-lg'>
                  <li id='origin'>
                    <div className='bg-sky-400 rounded-3xl'>
                      <p className='reporterName font-lora rounded-t-3xl bg-vBlue text-center border-b border-black '>Boer Harm</p>
                      <p className='reportText pl-2'>My machine broke after loading tomatoes</p>
                      <p className='reportText pl-2'>It should be moving the tomatoes</p>
                      <p className='reportText pl-2'>06 12345678</p>
                      <p className='text-center'><a onClick={moveItem} className='bg-vBlue px-4 rounded-3xl'>Claim</a></p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='list'>
                <p>Active</p>
                <ul className='reports bg-gray-200 dark:bg-sky-800 rounded-t-lg py-2' id='target'>
                </ul>
              </div>
              <div className='list'>
                <p>Closed</p>
                <ul className='reports bg-gray-200 dark:bg-sky-800 rounded-t-lg' id='last'>
                  <li></li>
                </ul>
              </div>
            </div>
        </div>
    </body>
  );
}

export default VisconPage;
