import React, { useState } from 'react';

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
  const [isActive, setIsActive] = useState(false);
  return (
    <div className='pt-5'>
      <div className='bg-slate-300 dark:bg-slate-600 dark:text-cyan-400 mx-auto w-1/2'>
        <h1 className='header text-xl text-center bg-slate-400 dark:bg-slate-700 cursor-pointer hover:bg-slate-500 dark:hover:bg-sky-900' onClick={() => setIsActive(!isActive)}>{mach.name}</h1>
        {isActive && <>{mach.problems.map((problem) => 
            <>
            <div className='border-b border-slate-700'>
              <h2 className='text-left ml-4'>{problem.problem}</h2>
              <p className='ml-10 text-left'>{problem.solution}</p>
            </div>
            </>
        )}
        </>}
      </div>
    </div>
  )
}
