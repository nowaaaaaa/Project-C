import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Translate } from '../../Components/Languages/Translator';

export function UserpageButtons(user: number) {
  let buttons: [string, () => void, string, string][] = [];
  const navigate = useNavigate();
  const employees = () => navigate('../userCreation');
  const tickets = () => navigate('../visconPage');
  const companies = () => navigate('../employees');
  const viscon = () => navigate('../visconPage');
  if (user === 2) {
    buttons.push([`${Translate('Manage Employees')}`, employees, `${Translate("You have")} ${Translate("no")} ${Translate("new notifications")}.`, 'https://www.thebalancemoney.com/thmb/1eNZeoFI_ON4BpTQXdHMihOtMQ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Employees-3117af3d30fa438bb6dd3ad4141a8b4c.jpg']);
    buttons.push([`${Translate('View Tickets')}`, tickets, `${Translate('Your company has issued')} 3 ${Translate('new tickets')}.`, 'https://ictzaak.nl/wp-content/uploads/2019/06/Helpdesk-ICTzaak-Blogpage.png'])
  } else if (user === 1) {
    buttons.push([`${Translate('Manage Companies')}`, companies, `${Translate("You have")} ${Translate("no")} ${Translate("new notifications")}.`, 'https://www.thebalancemoney.com/thmb/1eNZeoFI_ON4BpTQXdHMihOtMQ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Employees-3117af3d30fa438bb6dd3ad4141a8b4c.jpg']);
    buttons.push([`${Translate('View Tickets')}`, viscon, `${Translate('There are')} 3 ${Translate('unclaimed tickets')}.`, 'https://ictzaak.nl/wp-content/uploads/2019/06/Helpdesk-ICTzaak-Blogpage.png'])
  }
  const root = document.getElementsByTagName("html")[0];

  return (
    <>
      <div className="userpageButtons md:self-auto self-start bg-white dark:bg-slate-800">
        <button className="flex items-center h-1/4 md:flex-nowrap flex-wrap-reverse" onClick={buttons[0][1]}>
          <div className='md:w-1/3 w-1/2 md:text-4xl text-xl text-cyan-800 dark:text-cyan-400'>{buttons[0][0]}</div>
          <img className='md:w-1/3 w-1/2'src={buttons[0][3]}></img> 
          <div className='md:w-1/3 md:mb-0 mb-4 w-full md:text-2xl text-sm text-cyan-800 dark:text-cyan-400'>{buttons[0][2]}</div>
        </button>
        <button className="flex items-center h-1/4 md:flex-nowrap flex-wrap" onClick={buttons[1][1]}>
          <img className='block mb-4 md:hidden w-1/2'src={buttons[1][3]}></img> 
          <div className='md:w-1/3 w-1/2 md:text-4xl text-xl text-cyan-800 dark:text-cyan-400'>{buttons[1][0]}</div>
          <img className='md:block hidden w-1/3'src={buttons[1][3]}></img> 
          <div className='md:w-1/3 w-full md:text-2xl text-sm text-cyan-800 dark:text-cyan-400'>{buttons[1][2]}</div>
        </button>
      </div>
    </>
  );
}