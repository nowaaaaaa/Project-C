import React from 'react';
import { useNavigate } from 'react-router-dom';

export function UserpageButtons(user: string) {
  let buttons: [string, () => void][] = [];
  const navigate = useNavigate();
  const employees = () => navigate('../login');
  const tickets = () => navigate('../machines');
  if (user === 'Client') {
    buttons.push(['Manage Employees', employees]);
    buttons.push(['View Tickets', tickets])
  }
  const root = document.getElementsByTagName("html")[0];
  const toggleMode = () => {
    if (localStorage.theme === "light") {
      root.setAttribute("class", "dark");
      localStorage.theme = "dark";
    }
    else {
      root.removeAttribute("class");
      localStorage.theme = "light";
    }
  }

  return (
    <>
      <div className="userpageButtons bg-white dark:bg-slate-900 divide-y">
        <button className="flex w-full h-1/6" onClick={buttons[0][1]}>
          <div className='w-1/3'>{buttons[0][0]}</div>
          <img className='w-1/3 object-scale-down'src='https://www.thebalancemoney.com/thmb/1eNZeoFI_ON4BpTQXdHMihOtMQ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Employees-3117af3d30fa438bb6dd3ad4141a8b4c.jpg'></img> 
          <div className='w-1/3'></div>
        </button>
        <button className="flex w-full h-1/6" onClick={buttons[1][1]}>
          <div className='w-1/3'>{buttons[1][0]}</div>
          <img className='w-1/3 object-scale-down'src='https://ictzaak.nl/wp-content/uploads/2019/06/Helpdesk-ICTzaak-Blogpage.png'></img> 
          <div className='w-1/3'></div>
        </button>
      </div>
    </>
  );
}