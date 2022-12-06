import './Machines.css';
import React from 'react';
import { MakeMachine, Machine, problem } from './MakeMachine'
import { Navbar } from '../../Components/Navbar/Navbar'

const problem1: problem = {
  problem: "The shuttle is stuck",
  solution: "Move items on the shuttle cable"
}

const machinenumber1: Machine = {
  type: "Lift",
  name: "Lift5A",
  problems: [problem1, problem1, problem1, problem1, problem1, problem1, problem1]
}

const pro = [problem1, problem1];

export function Machines() {
  return (
    <>
      < Navbar />
      <div className='a min-h-screen h-max bg-white dark:bg-slate-800'>
        <MakeMachine type="Shuttle" name="Shuttle F6" problems={pro}/>
        <MakeMachine type="Shuttle" name="Shuttle F6" problems={pro}/>
        <MakeMachine type="Shuttle" name="Shuttle F6" problems={pro}/>
        <MakeMachine type="Shuttle" name="Shuttle F6" problems={pro}/>
        <MakeMachine type="Shuttle" name="Shuttle F6" problems={pro}/>
        <MakeMachine type="Shuttle" name="Shuttle F6" problems={pro}/>
      </div>
    </>
  );
}

export default Machines;
