import React from 'react';
import './ProblemSolver.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import { Translate } from '../../Components/Languages/Translator';
import { useState } from 'react';

const MySwal = withReactContent(Swal)

function swalA() {
  var color = ''
  if (localStorage.theme === "light") {
    var color = "#FFFFFF"
  }
  else {
    var color = "#1e293b"
  }
  MySwal.fire({
    title: <p className='dark:text-cyan-400'>{Translate('Checkbox left unchecked')}</p>,
    icon: 'error',
    confirmButtonText: 'Continue',
    confirmButtonColor: '#2F80ED',
    background: color,
    width: '400px',
    padding: '3em',
  })}

function swalB() {
  var color = ''
  if (localStorage.theme === "light") {
    var color = "#FFFFFF"
  }
  else {
    var color = "#1e293b"
  }
  MySwal.fire({
    title: <p className='dark:text-cyan-400'>{Translate('Succesfully sent report')}</p>,
    icon: 'success',
    showConfirmButton: false,
    background: color,
    timer: 800
  })}



export function ProblemSolver() {
  const navigate = useNavigate();
  const login = () => navigate('../login');
  const sendData = () => console.log(problem, expected, tried)

  const [problem, setProblem] = useState<string>('')
  const [expected, setExpected] = useState<string>('')
  const [tried, setTried] = useState<string>('')
  const [machineOn, setMachineOn] = useState<boolean>(false)
  const [notStuck, setNotStuck] = useState<boolean>(false)

  const handleStuck = (checked: boolean) => {
    setNotStuck(!checked)
  }
  const handleOn = (checked: boolean) => {
    setMachineOn(!checked)
  }

  return (
    <body>
      <div className='bg-white dark:bg-slate-800 min-h-screen md:h-max justify-center text-center'>
        <Navbar/>
          <div className='text-cyan-800 dark:text-cyan-400 py-4'>
            <p className='self-left'>{Translate('Describe the problem with the selected machine')}:</p>
            <textarea
            onChange={e => setProblem(e.target.value)}
            className='input1 bg-slate-200 dark:bg-slate-600 dark:text-slate-300 py-1 px-1.5 md:mb-3 focus:border-vBlue border-slate-300 border' 
            placeholder=''/>
            <br />
            <p>{Translate('Describe what the machine is supposed to do')}:</p>
            <textarea
            onChange={e => setExpected(e.target.value)}
            className='input1 bg-slate-200 dark:bg-slate-600 dark:text-slate-300 py-1 px-1.5 md:mb-3 focus:border-vBlue border-slate-300 border'
            placeholder=''/>
            <br />
            <p>{Translate('What have you tried to fix the problem')}:</p>
            <textarea
            onChange={e => setTried(e.target.value)}
            className='input1 bg-slate-200 dark:bg-slate-600 dark:text-slate-300 py-1 px-1.5 md:mb-3 focus:border-vBlue border-slate-300 border'
            placeholder=''/>
            <br />
            <label htmlFor="machineOn" className='checkLabel'>{Translate("Is your machine on")}?</label>
            <input type="checkbox" className='machineOn' onChange={e => {handleOn(machineOn)}}/>
            <br />
            <label htmlFor="notStuck" className='checkLabel'>{Translate("Is nothing stuck in the machine")}?</label>
            <input type="checkbox" className='notStuck md:mb-4 mb-6' onChange={e => {handleStuck(notStuck)}}/>
            <br />
            <button
            className='hover:rounded-2xl transition-all ease-in-out duration-200 rounded-xl bg-vBlue dark:bg-slate-500 md:text-xl text-md text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600 md:w-1/6 w-[35vw] md:h-[5vh] h-[4.5vh]'
            onClick={() => {
              if (notStuck && machineOn) {
                sendData()
                swalB()
                login()
              }
              else {return (
                swalA()
              )}
              }
            }>
              {Translate("Send report")}</button>
          </div>
      </div>
      <Footer />
    </body>
  );
}

export default ProblemSolver;
