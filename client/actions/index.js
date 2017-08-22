import axios from 'axios';
import { SUBMIT_FORM, SUCCESS } from './types';

let ROOT_UTL;

if(window.location.origin === "http://localhost:8080") {
  ROOT_UTL = 'http://localhost:3000/api/v1/users';
  } else { ROOT_UTL = '/api/v1/users'; }

export function submitForm(data) {
  let request = axios.post(`${ROOT_UTL}`, data)

  return {
      type: SUBMIT_FORM,
      payload: request
    };
};

export function formSubmited() {
  return {
    type: SUCCESS,
    payload: true
  }
}
