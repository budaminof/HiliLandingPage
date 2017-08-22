import { SUBMIT_FORM } from '../actions/types';

export default function (state = { msg: null }, action) {
  switch(action.type) {
    case SUBMIT_FORM:
      return { ...state, msg: action.payload.data.msg[0] };

    default:
      return state;
  }
}
