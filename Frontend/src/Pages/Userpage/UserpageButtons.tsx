import React from 'react';
import { useNavigate } from 'react-router-dom';

export function UserpageButtons(user: string) {
  let buttons: [string, () => void, string][] = [];
  const navigate = useNavigate();
  const employees = () => navigate('../login');
  const tickets = () => navigate('../visconPage');
  if (user === 'Client') {
    buttons.push(['Manage Employees', employees, 'You have no new notifications.']);
    buttons.push(['View Tickets', tickets, 'Your company has issued 3 new tickets.'])
  }
  const root = document.getElementsByTagName("html")[0];

  return (
    <>
      <div className="userpageButtons md:self-auto self-start bg-white dark:bg-slate-800">
      {/*<img className='block md:hidden w-1/2 object-cover'src='https://www.thebalancemoney.com/thmb/1eNZeoFI_ON4BpTQXdHMihOtMQ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Employees-3117af3d30fa438bb6dd3ad4141a8b4c.jpg' onClick={buttons[0][1]}></img> 
      */}
        <button className="flex items-center h-1/4 md:flex-nowrap flex-wrap-reverse" onClick={buttons[0][1]}>
          <div className='md:w-1/3 w-1/2 md:text-4xl text-xl text-cyan-800 dark:text-cyan-400'>{buttons[0][0]}</div>
          <img className='md:w-1/3 w-1/2'src='https://www.thebalancemoney.com/thmb/1eNZeoFI_ON4BpTQXdHMihOtMQ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Employees-3117af3d30fa438bb6dd3ad4141a8b4c.jpg'></img> 
          <div className='md:w-1/3 md:mb-0 mb-4 w-full md:text-2xl text-sm text-cyan-800 dark:text-cyan-400'>{buttons[0][2]}</div>
        </button>
        <button className="flex items-center h-1/4 md:flex-nowrap flex-wrap" onClick={buttons[1][1]}>
          <img className='block mb-4 md:hidden w-1/2'src='https://ictzaak.nl/wp-content/uploads/2019/06/Helpdesk-ICTzaak-Blogpage.png'></img> 
          <div className='md:w-1/3 w-1/2 md:text-4xl text-xl text-cyan-800 dark:text-cyan-400'>{buttons[1][0]}</div>
          <img className='md:block hidden w-1/3'src='https://ictzaak.nl/wp-content/uploads/2019/06/Helpdesk-ICTzaak-Blogpage.png'></img> 
          <div className='md:w-1/3 w-full md:text-2xl text-sm text-cyan-800 dark:text-cyan-400'>{buttons[1][2]}</div>
        </button>
      </div>
    </>
  );
}