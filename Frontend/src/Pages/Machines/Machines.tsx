import './Machines.css';
import { Machine, problem, listMachines } from './MakeMachine'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Translate } from '../../Components/Languages/Translator';

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

export function Machines() {
  return (
    <>
      < Navbar />
      <div className='grid grid-cols-1 place-content-start min-h-screen h-max bg-white dark:bg-slate-800'>
        <form className='w-[800px] justify-self-center'>   
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <input type="search" id="default-search" className="outline-0 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-vBlue  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required></input>
          <button type="submit" className="absolute right-2.5 bottom-2.5 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 hover:rounded-xl transition-all ease-in-out duration-200 bg-vBlue dark:bg-slate-500 text-lg text-white dark:text-cyan-400 hover:bg-vBlueHover dark:hover:bg-slate-600">Search</button>
        </div>
      </form>

        {listMachines(machTestList)}
      </div>
    </>
  );
}

export default Machines;
