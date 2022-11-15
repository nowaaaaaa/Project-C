import React from 'react';
import { useNavigate } from 'react-router-dom';

export function UserpageButtons(user: string) {
  let buttons: [string, () => void][] = [];
  const navigate = useNavigate();
  const employees = () => navigate('../login');
  const tickets = () => navigate('../visconPage');
  if (user === 'Client') {
    buttons.push(['Manage Employees', employees]);
    buttons.push(['View Tickets', tickets])
  }
  const root = document.getElementsByTagName("html")[0];

  return (
    <>
      <div className="userpageButtons bg-white dark:bg-slate-800">
        <button className="flex w-full h-1/6" onClick={buttons[0][1]}>
          <div className='w-1/3 text-cyan-800 dark:text-cyan-400'>{buttons[0][0]}</div>
          <img className='w-1/3 object-scale-down'src='https://www.thebalancemoney.com/thmb/1eNZeoFI_ON4BpTQXdHMihOtMQ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Employees-3117af3d30fa438bb6dd3ad4141a8b4c.jpg'></img> 
          <div className='w-1/3'></div>
        </button>
        <button className="flex w-full h-1/6" onClick={buttons[1][1]}>
          <div className='w-1/3 text-cyan-800 dark:text-cyan-400'>{buttons[1][0]}</div>
          <img className='w-1/3 object-scale-down'src='https://ictzaak.nl/wp-content/uploads/2019/06/Helpdesk-ICTzaak-Blogpage.png'></img> 
          <div className='w-1/3'></div>
        </button>
      </div>
    </>
  );
}