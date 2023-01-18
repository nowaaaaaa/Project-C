import './Machines.css';
import { Machine, AckProblem, listMachines, MachineType, takeProblems } from './MakeMachine'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Translate } from '../../Components/Languages/Translator';
import { useState } from 'react';
import { getCompanyId } from '../../Pages/Login/AccountManager';
import { GetMachinesEP, GetAckProblemsEP } from '../../BackendManager/endpoints';
import {Guid} from 'guid-typescript';

//vvvvvvvvv==] Dummy Data [==vvvvvvvvv//

const guid1: Guid = Guid.create();
const guid2: Guid = Guid.create();

const machineType1 : MachineType = {
  name: "Lift",
  id: guid1
}

const machineType2 : MachineType = {
  name: "Shuttle",
  id: guid2
}

const problem1: AckProblem = {
  problem: Translate("The shuttle is stuck."),
  solution: Translate("Move items on the shuttle cable."),
  machineTypeId: machineType1.id
}

const problem2: AckProblem = {
  problem: Translate("The lift is stuck."),
  solution: Translate("Move items on the lift cable."),
  machineTypeId: machineType2.id
}

const problem3: AckProblem = {
  problem: Translate("Lift cable is broken"),
  solution: Translate("Install new cable"),
  machineTypeId: machineType2.id
}

const machinenumber1: Machine = {
  typeId: machineType1.id,
  name: "Lift5A",
  problems: [],
  type: machineType1
}
const machinenumber2: Machine = {
  typeId: machineType1.id,
  name: "Lift1",
  problems: [],
  type: machineType1
}
const machinenumber3: Machine = {
  typeId: machineType1.id,
  name: "Shuttle1",
  problems: [],
  type: machineType1
}
const machinenumber4: Machine = {
  typeId: machineType1.id,
  name: "Shuttle2",
  problems: [],
  type: machineType1
}
const machinenumber5: Machine = {
  typeId: machineType2.id,
  name: "Band1A",
  problems: [],
  type: machineType2
}
const machinenumber6: Machine = {
  typeId: machineType2.id,
  name: "Band1B",
  problems: [],
  type: machineType2
}


var machinesList: Machine[] = [];
var ackProblems: AckProblem[] = [];
var companyId = "";
var token = localStorage.getItem("token")
if (token != null) {
  companyId = getCompanyId(token);
  
}
console.log(companyId)
GetMachinesEP({
  companyId: companyId
}).then(response => {
  machinesList = response.data
    console.log(machinesList)
    console.log(machinesList.length)
    for (var i = 0; i < machinesList.length; i++) {
      console.log("hi")
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
    console.log(ackProblems)
}).catch(error => {
  console.error(error)
})
var machineTypeIds: string[] = [];


const probs : AckProblem[] = [problem1, problem2, problem3];

const machTestList: Machine[] = [machinenumber1, machinenumber2, machinenumber3, machinenumber4, machinenumber5, machinenumber6];

//^^^^^^^^^^==] Dummy Data [==^^^^^^^^^^^//



function Search (keyword: string) {
  if (keyword === "") return machinesList;
  let res: Machine[] = [];
  machinesList.forEach(m => {
    if (m.name.toLowerCase().search(keyword) !== -1 || m.type.name.toLowerCase().search(keyword) !== -1) res.push(m);
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
              <input type="search" id="default-search" onChange={handleChange} className="outline-0 block w-full p-2 text-sm border text-cyan-800 dark:text-slate-300 border-gray-300 rounded-lg bg-gray-50 focus:border-vBlue dark:bg-slate-600 dark:border-slate-500 dark:placeholder-slate-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={Translate("Search for machines") + "..."} required></input>
            </div>
            <button type="submit" className="focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-3 py-1 hover:rounded-xl transition-all ease-in-out duration-200 bg-vBlue dark:bg-slate-500 text-lg text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600">Search</button>
          </form>
          {/* Search bar */}
            {listMachines(Search(keyword))}
        </div>
      </div>
    </>
  );
}

export default Machines;
