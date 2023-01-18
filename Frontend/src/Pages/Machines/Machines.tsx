import './Machines.css';
import { Machine, AckProblem, listMachines, MachineType, takeProblems } from './MakeMachine'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Translate } from '../../Components/Languages/Translator';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCompanyId } from '../../Pages/Login/AccountManager';
import { GetMachinesEP, GetAckProblemsEP, GetCompanyIdEP } from '../../BackendManager/endpoints';
import {Guid} from 'guid-typescript';

var verified: boolean = true;
var machinesList: Machine[] = [];
var ackProblems: AckProblem[] = [];
var companyId = "";
var companyName = "";
var token = localStorage.getItem("token")
if (token != null) {
  companyId = getCompanyId(token);
  GetCompanyIdEP({
    jwt: token,
    companyId: companyId
  }).then(response => {
    companyName = response.data;
  }).catch(error => {
    var errMessage: string = error.response.data;
    console.log(errMessage)
    if (errMessage === 'Invalid token') {
      verified = false;
    }
  })
  GetMachinesEP({
    jwt: token,
    companyId: companyId
  }).then(response => {
    machinesList = response.data
      for (var i = 0; i < machinesList.length; i++) {
        if (machineTypeIds.find(m => m === machinesList[i].typeId.toString()) !== undefined) continue;	
        machineTypeIds.push(machinesList[i].typeId.toString());

        if (token != null) {
          GetAckProblemsEP({
            jwt: token,
            machineTypeId: machinesList[i].typeId.toString()
          }).then(response => {
            for (var j = 0; j < response.data.length; j++) {
              ackProblems.push(response.data[j]);
            }
          }).catch(error => {
            var errMessage: string = error.response.data;
            console.log(errMessage)
            if (errMessage === 'Invalid token') {
              verified = false;
            }
          })
        }
      }
  }).catch(error => {
    var errMessage: string = error.response.data;
    console.log(errMessage)
    if (errMessage === 'Invalid token') {
      verified = false;
    }
  })
  var machineTypeIds: string[] = [];
}
else {
  verified = false;
}

function Search (keyword: string) {
  if (keyword === "") return machinesList;
  let res: Machine[] = [];
  machinesList.forEach(m => {
    if (m.name.toLowerCase().search(keyword) !== -1 || m.machineTypeName.toLowerCase().search(keyword) !== -1 ||
     Translate(m.machineTypeName).toLowerCase().search(keyword) !== -1) res.push(m);
  });
  return res;
}

export function Machines() {
  const navigate = useNavigate();

  useEffect(() => {
    if ( verified === false ) {
      navigate('/')
    }
  });
  
  const [keyword, setKeyword] = useState('');
  machinesList.forEach( (mach) => {
    takeProblems(mach, ackProblems);
  })
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setKeyword(event.currentTarget.value.toLowerCase());
  };
  return (
    <>
      <div className='bg-white dark:bg-slate-800 min-h-screen'>
      < Navbar />
        <div className='grid grid-cols-1 place-content-start h-max'>
          {/* Search bar */}
          <form className='flex flex-row max-w-full w-[800px] mt-5 mb-2 justify-self-center gap-x-4'>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative grow">
              <input type="search" id="default-search" onChange={handleChange} className="outline-0 block w-full p-2 text-sm border text-cyan-800 dark:text-slate-300 border-gray-300 rounded-lg bg-gray-50 focus:border-vBlue dark:bg-slate-600 dark:border-slate-500 dark:placeholder-slate-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={Translate("Search for machines or machinetypes") + "..."} required></input>
            </div>
          </form>
          {/* Search bar */}
          <h1 className='justify-self-center text-slate-800 dark:text-cyan-400 md:w-3/5 text-2xl text-start mb-2'>{`${Translate("Machines of")} ${companyName}:`}</h1>
            {listMachines(Search(keyword))}
        </div>
      </div>
    </>
  );
}

export default Machines;
