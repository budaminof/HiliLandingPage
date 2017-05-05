import { SUBMIT_FORM } from '../actions/index';

const INITIAL_STATE = { contact: {} };

export default function (state = INITIAL_STATE, action) {
  console.log("REDUCER", action.type, action.payload);
  switch(action.type) {
    case SUBMIT_FORM:
      return { ...state, contact: action.payload.data };

    default:
      return state;
  }
}
