import { Homepage } from './Pages/Homepage/Homepage';
import { Login } from './Pages/Login/Login';

export const routes = [
    { path: '/', name: 'homepage', component: <Homepage />},
    { path: '/login', name: 'login', component: <Login />}
]