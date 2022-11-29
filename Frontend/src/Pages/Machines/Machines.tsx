import React from 'react';
import './Machines.css';

import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'

function prob(problem:string, solution:string) {
  return (
    <li className=''>
      <h2>{problem}</h2>
      <p className='dark:text-cyan-500 ml-4'>{solution}</p>
    </li>
  )
}

export function Machines() {
  return (
    <body>
      < Navbar />
      <div className='filler-space bg-white dark:bg-slate-800 ' />
        <div className='centerBox '>
          <h1 className='text-slate-700 dark:text-cyan-400 text-2xl'>Your Machines</h1>
          <div className='machine bg-slate-200 dark:bg-slate-600 transition-all ease-in-out duration-500 hover:bg-slate-300 dark:slate-500 text-slate-700 dark:text-cyan-400'>
            <input type="checkbox" name='machacc' id='mach1' className='checkbox'/>
            <label htmlFor="mach1" className='accordionLabel'>Machine 1</label>
            <ul className='accText text-left flex-col gap-4'>
              {prob("Problem 1", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quis soluta, exercitationem inventore architecto rerum suscipit aut, repellat dolores debitis repudiandae, esse sunt? Minus dolorem iure, quae fuga voluptas quibusdam?")}
              {prob("Problem 2", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quis soluta, exercitationem inventore architecto rerum suscipit aut, repellat dolores debitis repudiandae, esse sunt? Minus dolorem iure, quae fuga voluptas quibusdam?")}
              {prob("Problem 3", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quis soluta, exercitationem inventore architecto rerum suscipit aut, repellat dolores debitis repudiandae, esse sunt? Minus dolorem iure, quae fuga voluptas quibusdam?")}
            </ul>
            <a href="problemsolver" className='accResolve bg-red-600 hover:rounded-2xl transition-all ease-in-out duration-200 hover:bg-rose-800 text-gray-200 rounded-xl'> Problem still not resolved?</a>
            <br className='accBr' />
            <br className='accBr' />
          </div>
          <div className='machine bg-slate-200 dark:bg-slate-600 transition-all ease-in-out duration-500 hover:bg-slate-300 dark:slate-500 text-slate-700 dark:text-cyan-400'>
            <input type="checkbox" name='machacc' id='mach2' className='checkbox'/>
            <label htmlFor="mach2" className='accordionLabel'>Machine 2</label>
            <ul className='accText text-left flex-col gap-4'>
              {prob("Problem 1", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quis soluta, exercitationem inventore architecto rerum suscipit aut, repellat dolores debitis repudiandae, esse sunt? Minus dolorem iure, quae fuga voluptas quibusdam?")}
              {prob("Problem 2", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quis soluta, exercitationem inventore architecto rerum suscipit aut, repellat dolores debitis repudiandae, esse sunt? Minus dolorem iure, quae fuga voluptas quibusdam?")}
              {prob("Problem 3", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quis soluta, exercitationem inventore architecto rerum suscipit aut, repellat dolores debitis repudiandae, esse sunt? Minus dolorem iure, quae fuga voluptas quibusdam?")}
            </ul>
            <a href="problemsolver" className='accResolve bg-red-600 hover:rounded-2xl transition-all ease-in-out duration-200 hover:bg-rose-800 text-gray-200 rounded-xl'> Problem still not resolved?</a>
            <br className='accBr' />
            <br className='accBr' />
          </div>
          <div className='machine bg-slate-200 dark:bg-slate-600 transition-all ease-in-out duration-500 hover:bg-slate-300 dark:slate-500 text-slate-700 dark:text-cyan-400'>
            <input type="checkbox" name='machacc' id='mach3' className='checkbox'/>
            <label htmlFor="mach3" className='accordionLabel'>Machine 3</label>
            <ul className='accText text-left flex-col gap-4'>
              {prob("Problem 1", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quis soluta, exercitationem inventore architecto rerum suscipit aut, repellat dolores debitis repudiandae, esse sunt? Minus dolorem iure, quae fuga voluptas quibusdam?")}
              {prob("Problem 2", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quis soluta, exercitationem inventore architecto rerum suscipit aut, repellat dolores debitis repudiandae, esse sunt? Minus dolorem iure, quae fuga voluptas quibusdam?")}
              {prob("Problem 3", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quis soluta, exercitationem inventore architecto rerum suscipit aut, repellat dolores debitis repudiandae, esse sunt? Minus dolorem iure, quae fuga voluptas quibusdam?")}
            </ul>
            <a href="problemsolver" className='accResolve bg-red-600 hover:rounded-2xl transition-all ease-in-out duration-200 hover:bg-rose-800 text-gray-200 rounded-xl'> Problem still not resolved?</a>
            <br className='accBr' />
            <br className='accBr' />
          </div>
        </div>
      < Footer />
    </body>
  );
}

export default Machines;
