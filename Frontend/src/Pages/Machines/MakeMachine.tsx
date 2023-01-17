import React, { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { Translate } from '../../Components/Languages/Translator';
import {Guid} from 'guid-typescript';

export type Machine = {
  id?: Guid,
  name: string,
  type: MachineType,
  typeId: Guid,
  company?: string,
  companyId?: Guid,
  problems?: AckProblem[];
}

export type MachineType = {
  id: Guid,
  name: string,
  drawingNr?: string;
}

export type AckProblem = {
  id?: Guid,
  machineType?: MachineType,
  machineTypeId: Guid,
  problem: string,
  solution: string;
}

export function takeProblems(mach: Machine, prob: AckProblem[]) {
  const needList : AckProblem[] = [];
  console.log(mach.typeId)
  prob.forEach((problem) => {
    console.log(`${problem.machineTypeId} problem`)
    if (problem.machineTypeId === mach.typeId) {
      needList.push(problem);
    }
  });

  mach.problems = needList;
}

export function MakeMachine(mach: Machine) {
  const navigate = useNavigate();
  const solver = () => {navigate('/problemSolver')};
  const [isActive, setIsActive] = useState(false);
  return (
    <div className='py-1 '>
      <div className='bg-slate-200 dark:bg-slate-600 dark:text-cyan-400 mx-auto w-full md:w-3/5'>
        <h1 className='header text-xl text-center bg-slate-300 dark:bg-slate-600 cursor-pointer hover:bg-sky-200 dark:hover:bg-sky-800 ease-in-out duration-150 select-none' onClick={() => setIsActive(!isActive)}>{mach.name}</h1>
        {isActive && <>{mach.problems?.map((problem) => 
            <>
            <div className='border-b border-slate-700 ease-in-out duration-150'>
              <h2 className='text-left ml-4'>{Translate(problem.problem)}</h2>
              <p className='ml-10 text-left'>{Translate(problem.solution)}</p>
            </div>
            </>
        )}
        <div className='flex'><button onClick={solver} className='bg-red-800 self-auto mx-auto p-0.5 px-1.5 rounded-md hover:rounded-lg ease-in-out duration-150 text-white text-sm my-2'>{Translate("Still not resolved")}?</button></div>
        </>}
      </div>
    </div>
  )
}



export function listMachines(machines: Machine[]) {
  return (
    <>
      <div className='max-h-[69vh] overflow-y-scroll scrollbar scrollbar-thumb-slate-400'>
        {machines.map((mach) => 
        <>
          <MakeMachine name={mach.name} type={mach.type} problems={mach.problems} typeId={mach.typeId}/>
        </>
        )}
      </div>
      <MakeOther/>
    </>
  )
}

export function MakeOther() {
  const navigate = useNavigate();
  const solver = () => {navigate('/problemSolver')};
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  return (
    <div className='flex justify-self-center justify-evenly md:w-3/5 w-full gap-2'>
      <div className='py-1 grow'>
        <div className='bg-slate-200 dark:bg-slate-600 dark:text-cyan-400'>
          <h1 className='header text-xl text-center bg-slate-300 dark:bg-slate-600 cursor-pointer hover:bg-sky-200 dark:hover:bg-sky-800 ease-in-out duration-150 select-none' onClick={() => setIsActive(!isActive)}>{Translate("Other")}</h1>
          {isActive && <>{(() => 
              <>
              <div className='border-b border-slate-700 ease-in-out duration-150'>
              </div>
              </>
          )}
          <div className='flex'><button onClick={solver} className='bg-red-800 self-auto mx-auto p-0.5 px-1.5 hover:rounded-sm ease-in-out duration-150 text-white text-sm'>{Translate("Report the problem")}</button></div>
          </>}
        </div>
      </div>
      <div className='py-1 grow'>
        <div className='bg-slate-200 dark:bg-slate-600 dark:text-cyan-400'>
          <h1 className='header text-xl text-center bg-slate-300 dark:bg-slate-600 cursor-pointer hover:bg-sky-200 dark:hover:bg-sky-800 ease-in-out duration-150 select-none' onClick={() => setIsActive1(!isActive1)}>{Translate("Software")}</h1>
          {isActive1 && <>{(() => 
              <>
              <div className='border-b border-slate-700 ease-in-out duration-150'>
              </div>
              </>
          )}
          <div className='flex'><button onClick={solver} className='bg-red-800 self-auto mx-auto p-0.5 px-1.5 hover:rounded-sm ease-in-out duration-150 text-white text-sm'>{Translate("Report the problem")}</button></div>
          </>}
        </div>
      </div>
    </div>
  )
}
