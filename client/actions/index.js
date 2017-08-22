import axios from 'axios';
import { SUBMIT_FORM, SUCCESS } from './types';

let ROOT_URL;
if(window.location.origin === "http://localhost:8080") {
  ROOT_URL = 'http://localhost:3000/api/v1/users';
} else { ROOT_URL = '/api/v1/users'; }


export function submitForm(data) {
  let request = axios.post(`${ROOT_URL}`, data);

  return {
      type: SUBMIT_FORM,
      payload: request
    };
};
