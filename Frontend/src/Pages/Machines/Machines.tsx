import './Machines.css';
import { Machine, AckProblem, listMachines, MachineType, takeProblems } from './MakeMachine'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Translate } from '../../Components/Languages/Translator';
import { useState } from 'react';
import { getCompanyId } from '../../Pages/Login/AccountManager';
import { GetMachinesEP, GetAckProblemsEP } from '../../BackendManager/endpoints';
import {Guid} from 'guid-typescript';

var machinesList: Machine[] = [];
var ackProblems: AckProblem[] = [];
var companyId = "";
var token = localStorage.getItem("token")
if (token != null) {
  companyId = getCompanyId(token);
}
GetMachinesEP({
  companyId: companyId
}).then(response => {
  machinesList = response.data
    for (var i = 0; i < machinesList.length; i++) {
      if (machineTypeIds.find(m => m === machinesList[i].typeId.toString()) !== undefined) continue;	
      machineTypeIds.push(machinesList[i].typeId.toString());
      GetAckProblemsEP({
        machineTypeId: machinesList[i].typeId.toString()
      }).then(response => {
        for (var j = 0; j < response.data.length; j++) {
          ackProblems.push(response.data[j]);
        }
      }).catch(error => {
        console.error(error)
      })
    }
}).catch(error => {
  console.error(error)
})
var machineTypeIds: string[] = [];

function Search (keyword: string) {
  if (keyword === "") return machinesList;
  let res: Machine[] = [];
  machinesList.forEach(m => {
    if (m.name.toLowerCase().search(keyword) !== -1 || m.machineTypeName.toLowerCase().search(keyword) !== -1
    ) res.push(m);
  });
  return res;
}

export function Machines() {
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
          <form className='flex flex-row w-[800px] mt-5 mb-2 justify-self-center gap-x-4'>   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative grow">
              <input type="search" id="default-search" onChange={handleChange} className="outline-0 block w-full p-2 text-sm border text-cyan-800 dark:text-slate-300 border-gray-300 rounded-lg bg-gray-50 focus:border-vBlue dark:bg-slate-600 dark:border-slate-500 dark:placeholder-slate-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={Translate("Search for machines or machinetypes") + "..."} required></input>
            </div>
            <button type="submit" className="focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-3 py-1 hover:rounded-xl transition-all ease-in-out duration-200 bg-vBlue dark:bg-slate-500 text-lg text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600">{Translate("Search")}</button>
          </form>
          {/* Search bar */}
            {listMachines(Search(keyword))}
        </div>
      </div>
    </>
  );
}

export default Machines;
