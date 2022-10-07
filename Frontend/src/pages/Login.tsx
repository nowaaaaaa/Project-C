import React, { useState} from 'react';
import '../Login.css';
import '../App.css';

export function Login() {
  const root = document.getElementsByTagName("html")[0];

  const toggleMode = () => {
    if (localStorage.theme === "light"){
      root.setAttribute("class", "dark");
      localStorage.theme = "dark";
    }
    else {
      root.removeAttribute("class");
      localStorage.theme = "light";
    }
  }

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div className="container bg-white dark:bg-slate-800">

      <img className="logo" src="viscon-logo.png" draggable="false" alt=''/>

      <form
        className='login-form bg-slate-300 dark:bg-slate-700'
        onSubmit={e => {
          e.preventDefault()
          console.log({ email, password})
        }}
      >
        <input
          className='bg-slate-200 dark:bg-slate-600'
          type='text'
          placeholder='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className='bg-slate-200 dark:bg-slate-600'
          type='password'
          placeholder='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button>Sign In</button>

      </form>
      <button className='py-0 text-cyan-800 dark:text-cyan-400'>Forgot password?</button>

      <footer className="login-footer bg-slate-500 dark:bg-slate-900">
        <img className="icon" src="theme-icon.png" draggable="false" onClick={toggleMode} alt='' />
      </footer>
    </div>
  );
}