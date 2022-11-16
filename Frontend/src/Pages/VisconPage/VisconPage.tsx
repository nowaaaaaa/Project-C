import React from 'react';
import './VisconPage.css';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'
import './VisconPage'

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
                <ul className='reports bg-gray-200 dark:bg-sky-800'>
                  <p>Pending</p>
                  <li className='report bg-gray-100 dark:bg-sky-500' id='origin'>
                    <div className='reporterName font-lora bg-vBlue'>Boer Harm <br />
                    <p>My machine broke after loading tomatoes</p>
                    <p>It should be moving the tomatoes</p>
                    <p>06 12345678</p>
                    <a onClick={moveItem}>click here</a>
                    </div>
                  </li>
                </ul>
                <p>Active</p>
                <ul className='doing bg-gray-200 dark:bg-sky-800' id='target'>
                  <li>

                  </li>
                </ul>
                <ul className='done bg-gray-200 dark:bg-sky-800' id='last'>
                  <p>Closed</p>
                  <li>

                  </li>
                </ul>
            </div>
        </div>
    </body>
  );
}

export default VisconPage;
