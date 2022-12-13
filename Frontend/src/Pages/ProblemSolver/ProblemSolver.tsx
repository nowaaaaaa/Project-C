import React from 'react';
import './ProblemSolver.css';

import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import { Translate } from '../../Components/Languages/Translator';

export function ProblemSolver() {
  const navigate = useNavigate();
  const login = () => navigate('../login');
  return (
    <body>
      <Navbar/>
      <div className='filler-space bg-white dark:bg-slate-800'>
          <div className='text-cyan-800 dark:text-cyan-400'>
            <p className='self-left'>{Translate('Describe the problem with the selected machine')}:</p>
            <textarea className='input1 bg-slate-200 dark:bg-slate-600 dark:text-slate-300 py-1 px-1.5 mb-[2vh] focus:border-vBlue border-slate-300 border'  placeholder=''/>
            <br />
            <p>{Translate('Describe what the machine is supposed to do')}:</p>
            <textarea className='input1 bg-slate-200 dark:bg-slate-600 dark:text-slate-300 py-1 px-1.5 md:mb-3 focus:border-vBlue border-slate-300 border' placeholder=''/>
            <br />
            <label htmlFor="machineOn" className='checkLabel'>{Translate("Is your machine on")}?</label>
            <input type="checkbox" className='machineOn' />
            <br />
            <label htmlFor="notStuck" className='checkLabel'>{Translate("Is nothing stuck in the machine")}?</label>
            <input type="checkbox" className='notStuck' />
            <br />
            <br />
            <button className='hover:rounded-2xl transition-all ease-in-out duration-200 rounded-xl bg-vBlue dark:bg-slate-500 md:text-xl text-sm text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600 md:w-1/6 w-[30vw] md:h-[5vh] h-[4vh]' onClick={login}>
              {Translate("Send report")}</button>
          </div>
      </div>
      <Footer />
    </body>
  );
}

export default ProblemSolver;
