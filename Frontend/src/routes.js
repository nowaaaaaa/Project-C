import { Homepage } from './pages/Homepage';
import { Login } from './pages/Login';

export const routes = [
    { path: '/', name: 'homepage', component: <Homepage />},
    { path: '/login', name: 'login', component: <Login />}
]