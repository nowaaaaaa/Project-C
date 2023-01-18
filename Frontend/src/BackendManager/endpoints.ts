import { assertExportNamespaceSpecifier } from '@babel/types';
import axios from 'axios';

const mainURL = 'http://localhost:5001';

const axiosInstance = axios.create({
  baseURL: mainURL,
  headers: {
    'Content-Type': 'application/json',
  }
});

type GetRoleDto = {
  jwt: string
}
type GetCompanyIdDto = {
  jwt: string,
  companyId: string
}
type LoginDto = {
  email: string,
  password: string
}
type GetMachinesDto = {
  jwt: string,
  companyId: string
}
type GetAckProblemsDto = {
  jwt: string,
  machineTypeId: string
}
type CreateTicketDto = {
  jwt: string,
  machineId: string,
  problem: string,
  expected: string,
  tried: string
}
type GetTicketsDto = {
  jwt: string
}

type SignupDto = {
  email: string,
  name: string,
  password: string,
  phone: string,
  companyId: string,
  role: number
}

// axios get endpoints
export function GetInfoEP() {
  return axios.get(mainURL + '/weatherforecast');
}

// axios post endpoints
export function LoginEP(data: LoginDto) {
  return axiosInstance.post('/Authentication/login', data);
}
export function GetRoleEP(data: GetRoleDto) {
  return axiosInstance.post('/Authentication/getrole', data);
}

export function GetCompanyIdEP(data: GetCompanyIdDto) {
  return axiosInstance.post('/Company/getCompanyName', data);
}

export function GetMachinesEP(data: GetMachinesDto) {
  return axiosInstance.post('/Machines/getMachines', data);
}

export function GetAckProblemsEP(data: GetAckProblemsDto) {
  return axiosInstance.post('/Machines/getAckProblems', data);
}

export function SignupEP(data: SignupDto) {
  return axiosInstance.post('/Authentication/signup', data);
}

export function CreateTicketEP(data: CreateTicketDto) {
  return axiosInstance.post('/Ticket/createTicket', data);
}

export function GetTicketsEP(data: GetTicketsDto) {
  return axiosInstance.post('/Ticket/getTickets', data);
}
