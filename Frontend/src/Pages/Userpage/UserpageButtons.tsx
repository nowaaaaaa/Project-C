import { useNavigate } from 'react-router-dom';
import { Translate } from '../../Components/Languages/Translator';
import { getRole } from '../../Pages/Login/AccountManager';
import employeesPic from './Employees.jpg';
import supportPic from './Support.png';

export function UserpageButtons() {
  const navigate = useNavigate();
  var role = 0;
  var token = localStorage.getItem("token")
  if (token != null) {
    role = getRole(token);
  }
  else return <></>;

  const employees = () => navigate('../userCreation');
  const tickets = () => navigate('../viewTickets');
  const companies = () => navigate('../userCreation');
  const viscon = () => navigate('../visconPage');
  let buttons: [string, () => void, string, string][] = [];
  switch (role) {
    case 4:
      buttons.push([`${Translate('View Tickets')}`, tickets, `${Translate('Your company has issued')} 3 ${Translate('new tickets')}.`, supportPic])
    break;
    case 3:
      buttons.push([`${Translate('View Tickets')}`, tickets, `${Translate('Your company has issued')} 3 ${Translate('new tickets')}.`, supportPic])
    break;
    case 2:
      buttons.push([`${Translate('Manage Employees')}`, employees, `${Translate("You have")} ${Translate("no")} ${Translate("new notifications")}.`, employeesPic]);
      buttons.push([`${Translate('View Tickets')}`, tickets, `${Translate('Your company has issued')} 3 ${Translate('new tickets')}.`, supportPic])
    break;
    case 1:
      buttons.push([`${Translate('Manage Companies')}`, companies, `${Translate("You have")} ${Translate("no")} ${Translate("new notifications")}.`, employeesPic]);
      buttons.push([`${Translate('View Tickets')}`, viscon, `${Translate('There are')} 3 ${Translate('unclaimed tickets')}.`, supportPic])
    break;
  }

  return (
    <>
      <div className="userpageButtons md:self-auto self-start bg-white dark:bg-slate-800">
        <button className="flex items-center h-1/4 md:flex-nowrap flex-wrap-reverse" onClick={buttons[0][1]}>
          <div className='md:w-1/3 w-1/2 md:text-4xl text-xl text-cyan-800 dark:text-cyan-400'>{buttons[0][0]}</div>
          <img className='md:w-1/3 w-1/2'src={buttons[0][3]}></img> 
          <div className='md:w-1/3 md:mb-0 mb-4 w-full md:text-2xl text-sm text-cyan-800 dark:text-cyan-400'>{buttons[0][2]}</div>
        </button>
        {buttons.length === 2 && (
        <button className="flex items-center h-1/4 md:flex-nowrap flex-wrap" onClick={buttons[1][1]}>
          <img className='block mb-4 md:hidden w-1/2'src={buttons[1][3]}></img> 
          <div className='md:w-1/3 w-1/2 md:text-4xl text-xl text-cyan-800 dark:text-cyan-400'>{buttons[1][0]}</div>
          <img className='md:block hidden w-1/3'src={buttons[1][3]}></img> 
          <div className='md:w-1/3 w-full md:text-2xl text-sm text-cyan-800 dark:text-cyan-400'>{buttons[1][2]}</div>
        </button>
        )}
      </div>
    </>
  );
}