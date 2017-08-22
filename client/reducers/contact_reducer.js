import { SUBMIT_FORM, SUCCESS } from '../actions/types';

export default function (state = { msg: null, conversion: false }, action) {

  switch(action.type) {
    case SUBMIT_FORM:
      return { ...state, msg: action.payload.msg };
    case SUCCESS:
      return { ...state, conversion: true };

    default:
      return state;
  }
}
