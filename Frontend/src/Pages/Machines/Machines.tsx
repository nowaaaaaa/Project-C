// import './Machines.css';
import React from 'react';


import { Navbar } from '../../Components/Navbar/Navbar'


type problem = {
  problem: string,
  solution: string;
}

type Machine = {
  type: string,
  name: string,
  problems: problem[];
}

function getMachine(mach: Machine) {
  return (
    <div className='bg-slate-300 dark:bg-slate-600 dark:text-cyan-400 mx-auto w-1/2 mb-4'>
      <h1 className='text-xl bg-slate-400 dark:bg-slate-700'>{mach.name}</h1>
      <>{mach.problems.map((problem) => 
          <>
          <div className='border-b border-slate-700 mb-2 pb-2'>
            <h2 className='text-left ml-4'>{problem.problem}</h2>
            <p className='ml-10 text-left'>{problem.solution}</p>
          </div>
          </>
      )}
      </>
    </div>
  )
}

const problem1: problem = {
  problem: "The lift is stuck",
  solution: "Press the button"
}

const machinenumber1: Machine = {
  type: "Lift",
  name: "Lift5A",
  problems: [problem1, problem1, problem1, problem1, problem1, problem1, problem1]
}

export function Machines() {
  return (
    <>
      < Navbar />
      <div className='filler-space bg-white dark:bg-slate-800'>
      {getMachine(machinenumber1)}
      </div>
    </>
  );
}

export default Machines;
