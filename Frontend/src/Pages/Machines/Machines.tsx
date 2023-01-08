import './Machines.css';
import { Machine, problem, listMachines, MakeMachine } from './MakeMachine'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Translate } from '../../Components/Languages/Translator';
import { useState, useEffect } from 'react';
import { axios } from '../../Components/Axios/Axios';

const problem1: problem = {
  problem: Translate("The shuttle is stuck."),
  solution: Translate("Move items on the shuttle cable.")
}

const machinenumber1: Machine = {
  type: "Lift",
  name: "Lift5A",
  problems: [problem1, problem1, problem1, problem1, problem1, problem1, problem1]
}
const machinenumber2: Machine = {
  type: "Lift",
  name: "Lift1",
  problems: [problem1]
}
const machinenumber3: Machine = {
  type: "Shuttle",
  name: "Shuttle1",
  problems: [problem1]
}
const machinenumber4: Machine = {
  type: "Shuttle",
  name: "Shuttle2",
  problems: [problem1]
}
const machinenumber5: Machine = {
  type: "Band",
  name: "Band1A",
  problems: [problem1]
}
const machinenumber6: Machine = {
  type: "Band",
  name: "Band1B",
  problems: [problem1]
}
//var machinesList: Machine[] = (Database shit) => in export function {listMachines(machinesList)}

const machTestList: Machine[] = [machinenumber1, machinenumber2, machinenumber3, machinenumber4, machinenumber5, machinenumber6];

function Search (keyword: string) {
  if (keyword === "") return machTestList;
  let res: Machine[] = [];
  machTestList.forEach(m => {
    if (m.name.toLowerCase().search(keyword) !== -1 || m.type.toLowerCase().search(keyword) !== -1) res.push(m);
  });
  return res;
}

export function Machines() {
  const [keyword, setKeyword] = useState('');
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setKeyword(event.currentTarget.value.toLowerCase());
  };

  //https://www.youtube.com/watch?v=AirWT_XpEpM
  
  const [machines, setMachines] = useState([])
  const noMachines = !machines || (machines && machines.length === 0);

  const getMachines = async () => {
    const response = await axios.get('/posts').catch((err) => console.log("Error: ", err));

    if (response && response.data) {setMachines(response.data);}
  }

  useEffect(() => {
    getMachines();
  }, []);

  return (
    <>
      <div className='bg-white dark:bg-slate-800 min-h-screen'>
      < Navbar />
        <>{!noMachines && machines.map((machine, idx) => {<h1 className='bg-white' key={idx}>Hi</h1>})}</>
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
