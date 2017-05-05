import axios from 'axios';
import { SUBMIT_FORM } from './types';

const ROOT_UTL = "http://localhost:3000/api/v1/users";

export function submitForm(data) {
  const request = axios.post(`${ROOT_UTL}`, data);

  return {
    type: SUBMIT_FORM,
    payload: request
  };

};
