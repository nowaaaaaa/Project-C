import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import '../../App.css';

import { postData } from '../../BackendManager/endpoints'

//Component
import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'
import { getPositionOfLineAndCharacter } from 'typescript';

export function Login() {
  const [email_, setEmail] = useState<string>('')
  const [password_, setPassword] = useState<string>('')
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    postData({
      email: email_,
      password: password_
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.error(error)
      })

  }
  // const Userpage = () => {
  //   navigate("/userpage");
  // }

  return (
    <body className="homepage-body">
      < Navbar />
      <div className="login-container bg-white dark:bg-slate-800">
        <div className="logo">
          <img className="block dark:hidden" src="viscon-group-logo-light.png" draggable="false" alt='Viscon Group logo'/>
          <img className="dark:block hidden" src="viscon-group-logo-dark.png" draggable="false" alt='Viscon Group logo'/>
        </div>
        {/* <h1 className="text-6xl mb-10 text-cyan-800 dark:text-cyan-400">Service Application</h1> */}
        <form
          className='login-form bg-slate-300 dark:bg-slate-600'
          onSubmit={handleSubmit}
        >
          <input
            className='dark:placeholder:text-slate-400 bg-slate-200 dark:bg-slate-500 dark:text-slate-300'
            type='text'
            placeholder='Email'
            value={email_}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className='dark:placeholder:text-slate-400 bg-slate-200 dark:bg-slate-500 dark:text-slate-300'
            type='password'
            placeholder='Password'
            value={password_}
            onChange={e => setPassword(e.target.value)}
          />

          <button className='text-cyan-800 dark:text-cyan-400 transition-all ease-in-out duration-200 hover:bg-slate-400 dark:hover:bg-slate-700'>Sign In</button>

        </form>
        <button className='py-1 text-cyan-800 dark:text-cyan-400' type="submit">Forgot password?</button>

      </div>
      < Footer />
    </body>
  );
}