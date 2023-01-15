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
  companyId: string
}
type LoginDto = {
  email: string,
  password: string
}
type GetMachinesDto = {
  companyId: string
}
type GetAckProblemsDto = {
  machineTypeId: string
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