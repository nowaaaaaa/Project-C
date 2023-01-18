import React from 'react';
import './ProblemSolver.css';

import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'
import { useNavigate } from 'react-router-dom';
import { Translate } from '../../Components/Languages/Translator';
import { useState } from 'react';
import { swalA, swalB, swalC } from './SwalFunctions';

import { CreateTicketEP } from '../../BackendManager/endpoints'

export function ProblemSolver() {
  const navigate = useNavigate();
  const login = () => navigate('/userPage');

  //hier backend shit vv
  const sendData = () => {
    var token = localStorage.getItem("token")
    if (token != null) {
      var machineId = localStorage.getItem("machineId")
      if (machineId != null) {
        CreateTicketEP({
          jwt: token,
          machineId: machineId,
          problem: problem,
          expected: expected,
          tried: tried
        }).then(response => {

          console.log(response.data)

          swalA()
          login()

        }).catch(error => {
        var errMessage: string = error.response.data;
        console.log(errMessage)
        if (errMessage === 'Invalid token') {
          navigate('/')
      }
    })
      }
      else {
        navigate('../machines')
      }
    }
    else {
      navigate('/')
    }
  }

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
              if (notStuck && machineOn && problem !== '' && expected !== '') {
                sendData()
              }
              else if (problem === '' || expected === '') {
                swalB(problem, expected)
              }
              else {return (
                swalC()
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
