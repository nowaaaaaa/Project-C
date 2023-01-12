import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import '../../App.css';

import { LoginEP } from '../../BackendManager/endpoints'
import { GetRoleEP } from '../../BackendManager/endpoints';
import { getRole } from './AccountManager';

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

    LoginEP({
      email: email_,
      password: password_
    }).then(response => {
      localStorage.setItem("token", response.data)

      var role = 0;
      GetRoleEP({
        jwt: response.data
      }).then((response: AxiosResponse<any>) => {
        role = parseInt(response.data);
        console.log(role)

        localStorage.setItem("role", role.toString())

        if (role === 0) {
          //not logged in
          navigate("/")
        }
        if (role === 1) {
          //admin
          navigate("/visconpage")
        }
        if (role === 2 || role === 3 || role === 4) {
          //client
          navigate("/userpage")
        }
      }).catch(error => {
        console.error(error)
      })
    }).catch(error => {
      console.error(error)
    })
  }

  // const token = localStorage.getItem("token");
  // const role = getRole();
  // useEffect(() => {
  //   if (role != null) {
  //     if (token != null) {
  //       //not logged in
  //       navigate("/")
  //     }
  //     if (role === 1) {
  //       //admin
  //       navigate("/visconpage")
  //     }
  //     if (role === 2 || role === 3 || role === 4) {
  //       //client
  //       navigate("/userpage")
  //     }
  //   }
  // })

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

          <button className='text-cyan-800 dark:text-cyan-400 transition-all ease-in-out duration-200 hover:bg-slate-400 dark:hover:bg-slate-700' type="submit">Sign In</button>

        </form>
        <button className='py-1 text-cyan-800 dark:text-cyan-400'>Forgot password?</button>

      </div>
      < Footer />
    </body>
  );
}