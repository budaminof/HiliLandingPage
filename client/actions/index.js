import axios from 'axios';
import { SUBMIT_FORM } from './types';
import { reset } from 'redux-form';

const ROOT_UTL = "http://localhost:3000/api/v1/users";

export function submitForm(props) {
  const request = axios.post(`${ROOT_UTL}`, props).then((data) => {
    console.log("after submmition in ACTIONS", data);
    //need to clean up the form after this happeneds..
  })

  return {
    type: SUBMIT_FORM,
    payload: request
  };

};
