import React from 'react';
import './VisconPage.css';
/*import Draggable from "react-draggable"*/

import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'

export function VisconPage() {
  return (
    <body>
        <Navbar/>
        <div className='bg bg-white dark:bg-slate-800'>
            <div className='centerbox bg-white dark:bg-slate-600'>
                <div className='reports bg-vBlue dark:bg-sky-800'>Pending</div>
                <div className='doing bg-vBlue dark:bg-sky-800'>Active</div>
                <div className='done bg-vBlue dark:bg-sky-800'>Closed</div>
            </div>
        </div>
    </body>
  );
}

export default VisconPage;
