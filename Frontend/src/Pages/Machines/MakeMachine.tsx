import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Translate } from '../../Components/Languages/Translator';

export type problem = {
  problem: string,
  solution: string;
}

export type Machine = {
  type: string,
  name: string,
  problems: problem[];
}

export function MakeMachine(mach: Machine) {
  const navigate = useNavigate();
  const solver = () => {navigate('/problemSolver')};
  const [isActive, setIsActive] = useState(false);
  return (
    <div className='py-5'>
      <div className='bg-slate-300 dark:bg-slate-600 dark:text-cyan-400 mx-auto w-full md:w-3/5'>
        <h1 className='header text-xl text-center bg-slate-400 dark:bg-slate-700 cursor-pointer hover:bg-slate-500 dark:hover:bg-sky-900 ease-in-out duration-150 select-none' onClick={() => setIsActive(!isActive)}>{mach.name}</h1>
        {isActive && <>{mach.problems.map((problem) => 
            <>
            <div className='border-b border-slate-700 ease-in-out duration-150'>
              <h2 className='text-left ml-4'>{problem.problem}</h2>
              <p className='ml-10 text-left'>{problem.solution}</p>
            </div>
            </>
        )}
        <div className='flex'><button onClick={solver} className='bg-red-800 self-auto mx-auto p-0.5 px-1.5 rounded-md hover:rounded-lg ease-in-out duration-150 text-white text-sm my-2'>{Translate("Still not resolved")}?</button></div>
        </>}
      </div>
    </div>
  )
}
