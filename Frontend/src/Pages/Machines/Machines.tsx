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

//var machinesList: Machine[] = (Database shit) => in export function {listMachines(machinesList)}

const machTestList: Machine[] = [machinenumber1, machinenumber1, machinenumber1, machinenumber1, machinenumber1];

export function Machines() {
  return (
    <>
      < Navbar />
      <div className='a min-h-screen h-max bg-white dark:bg-slate-800'>
        {listMachines(machTestList)}
      </div>
    </>
  );
}

export default Machines;
