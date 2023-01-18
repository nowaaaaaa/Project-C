import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Translate } from '../../Components/Languages/Translator';
import { getRole, getName, getCompanyId } from '../../Pages/Login/AccountManager';
import { GetCompanyIdEP } from '../../BackendManager/endpoints'
import './Userpage.css';
import '../../App.css';

//Component
import { Navbar } from '../../Components/Navbar/Navbar'
import{ Footer } from '../../Components/Footer/Footer'
import{ UserpageButtons } from '../../Components/Userpage/UserpageButtons';

var verified: boolean = true;

export function Userpage() {
  const navigate = useNavigate();
  var role = 0;
  var name = "";
  var companyId = "";
  const [companyName, setCompanyName] = useState<string>('')
  var token = localStorage.getItem("token")
  if (token != null) {
    role = getRole(token);
    name = getName(token);
    companyId = getCompanyId(token);
    GetCompanyIdEP({
      jwt: token,
      companyId: companyId
    }).then(response => {
      setCompanyName(response.data)
    }).catch(error => {
      var errMessage: string = error.response.data;
      console.log(errMessage)
      if (errMessage === 'Invalid token') verified = false;
    })
  } else verified = false;
  useEffect(() => {
    if ( verified === false ) navigate('/')
  });
  const problem = () => navigate('../machines');
  return (
    <body className="userpage-body">
      < Navbar />
      <div className='user-container bg-white dark:bg-slate-800 grid place-items-center'> 
        <div className="md:text-6xl text-2xl pb-10 text-cyan-800 dark:text-cyan-400 text-center md:pt-16 font-helvetica" >{`${Translate("Welcome")}, ${name} ${Translate("from")} ${companyName}!`}</div> 
        <button className='self-start hover:rounded-2xl transition-all ease-in-out duration-200 rounded-xl bg-vBlue dark:bg-slate-500 text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600 md:text-xl text-sm md:w-1/4 w-[65vw] md:h-[5vh] h-[4vh] md:mt-8 md:mb-12' onClick={problem}>
          {Translate("Do you have a problem to report?")}
        </button>
        {UserpageButtons()} 
      </div>    
      < Footer />
    </body>
  );
}