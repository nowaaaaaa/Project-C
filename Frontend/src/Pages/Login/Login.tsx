import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import '../../App.css';

//Component
import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'

export function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate();
  const Userpage = () => {
    navigate("/userpage");
  }

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
          className='login-form bg-slate-300 dark:bg-slate-700'
          onSubmit={e => {
            e.preventDefault()
            navigate("/");
            console.log({ email, password})
          }}
        >
          <input
            className='bg-slate-200 dark:bg-slate-600 dark:text-slate-300'
            type='text'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className='bg-slate-200 dark:bg-slate-600 dark:text-slate-300'
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button className='text-cyan-800 dark:text-cyan-400' onClick={Userpage}>Sign In</button>

        </form>
        <button className='py-1 text-cyan-800 dark:text-cyan-400'>Forgot password?</button>

      </div>
      < Footer />
    </body>
  );
}