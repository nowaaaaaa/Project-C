import { Homepage } from './Pages/Homepage/Homepage';
import { Login } from './Pages/Login/Login';
import { Machines } from './Pages/Machines/Machines';
import { ProblemSolver } from './Pages/ProblemSolver/ProblemSolver';
import { Userpage } from './Pages/Userpage/Userpage';
import { VisconPage } from './Pages/VisconPage/VisconPage';
import { UserCreation } from './Pages/UserCreation/UserCreation';
import { ViewTickets } from './Pages/ViewTickets/ViewTickets';

export const routes = [
    //global
    { path: '/', name: 'homepage', component: <Homepage />},
    { path: '/login', name: 'login', component: <Login />},
    
    { path: '/machines', name:'machines', component: <Machines />},
    { path: '/userpage', name:'userpage', component: <Userpage />},
    { path: '/problemSolver', name:'problemSolver', component: <ProblemSolver />},
    { path: '/visconPage', name:'visconPage', component: <VisconPage />},
    { path: '/userCreation', name:'userCreation', component: <UserCreation />},
    { path: '/viewTickets', name:'viewTickets', component: <ViewTickets />}
]