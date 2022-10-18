import { Homepage } from './Pages/Homepage/Homepage';
import { Login } from './Pages/Login/Login';
import {Machines} from './Pages/Machines/Machines';
import {ProblemSolver} from './Pages/ProblemSolver/ProblemSolver';

export const routes = [
    { path: '/', name: 'homepage', component: <Homepage />},
    { path: '/login', name: 'login', component: <Login />},
    { path: '/machines', name:'machines', component: <Machines />},
    {path: '/problemsolver', name:'problemsolver', component: <ProblemSolver />},
]