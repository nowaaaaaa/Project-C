import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import '../../App.css';

import { LoginEP } from '../../BackendManager/endpoints'
import { getRole } from './AccountManager';

//Component
import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'
import { Translate } from '../../Components/Languages/Translator';

export function Login() {
  const [email_, setEmail] = useState<string>('')
  const [password_, setPassword] = useState<string>('')
  const [showWrong_, setShowWrong] = useState<boolean>(false)
  const [message_, setMessage] = useState<string>('')
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email_ === '' && password_ === '') {
      setShowWrong(false)
    }
    else {
      LoginEP({
        email: email_,
        password: password_
      }).then(response => {
        localStorage.setItem("token", response.data)

        var role = getRole(response.data);

        if (role === 0) {
          //not logged in
          navigate("/")
        }
        if (role === 1 || role === 2 || role === 3 || role === 4) {
          //client
          navigate("/userpage")
        }
      }).catch(error => {
        var errMessage: string = error.response.data;
        console.log(errMessage)
        if (errMessage === 'User not found' || errMessage === 'Wrong password') {
          setShowWrong(true)
          setMessage(Translate(errMessage))
          console.log(message_)
        } 
        else {
          setShowWrong(false)
        }
      })
    }
  }
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => setIsHovering(true);
  const handleMouseOut = () => setIsHovering(false);

  return (
    <body className="homepage-body">
      < Navbar />
      <div className="login-container bg-white dark:bg-slate-800">
        <div className="logo">
          <img className="block dark:hidden" src="viscon-group-logo-light.png" draggable="false" alt='Viscon Group logo'/>
          <img className="dark:block hidden" src="viscon-group-logo-dark.png" draggable="false" alt='Viscon Group logo'/>
        </div>
        <form
          className='login-form bg-slate-300 dark:bg-slate-600'
          onSubmit={handleSubmit}
        >
          <input
            className='dark:placeholder:text-slate-400 bg-slate-200 dark:bg-slate-500 dark:text-slate-300'
            type='text'
            placeholder={Translate('Email')}
            value={email_}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className='dark:placeholder:text-slate-400 bg-slate-200 dark:bg-slate-500 dark:text-slate-300'
            type='password'
            placeholder={Translate('Password')}
            value={password_}
            onChange={e => setPassword(e.target.value)}
          />
          <button className='text-cyan-800 dark:text-cyan-400 transition-all ease-in-out duration-200 hover:bg-slate-400 dark:hover:bg-slate-700' type="submit">{Translate('Sign In')}</button>
        </form>
        {showWrong_ && <div className='py-1 text-red-500'>{message_}</div>}
        <div className='py-1 cursor-default text-cyan-800 dark:text-cyan-400' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{Translate('Forgot password')}?</div>
        {isHovering && 
          <div className='bg-slate-300 dark:bg-slate-600 rounded-lg'>
            <p className='px-2 py-1 text-cyan-800 dark:text-cyan-400'>{Translate('In order to change your password, please contact your system administrators')}.</p>
          </div>
        }
      </div>
      < Footer />
    </body>
  );
}