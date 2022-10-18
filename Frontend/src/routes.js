import { Homepage } from './Pages/Homepage/Homepage';
import { Login } from './Pages/Login/Login';
import {Machines} from './Pages/Machines/Machines';
import {ProblemSolver} from './Pages/ProblemSolver/ProblemSolver';
import { Machines } from './Pages/Machines/Machines';
import { Userpage } from './Pages/Userpage/Userpage';

export const routes = [
    { path: '/', name: 'homepage', component: <Homepage />},
    { path: '/login', name: 'login', component: <Login />},
    { path: '/machines', name:'machines', component: <Machines />},
    { path: '/userpage', name:'userpage', component: <Userpage />},
    { path: '/problemSolver', name:'problemSolver', component: <ProblemSolver />},
]