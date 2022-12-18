import axios from 'axios';

const mainURL = 'http://localhost:5001';

const axiosInstance = axios.create({
  baseURL: mainURL,
  headers: {
    'Content-Type': 'application/json',
  }
});

type PostData = {
  email: string,
  password: string
}

// axios get endpoints
export const info = mainURL + '/weatherforecast';

// axios post endpoints
export function postData(data: PostData) {
  return axiosInstance.post('/Authentication/login', data)
}