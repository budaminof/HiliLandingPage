import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ContactReducer from './contact_reducer';
import { ACCOUNT_SAVE_SUCCESS } from '../actions/types';

const rootReducer = combineReducers({
  form: formReducer,
  contact: ContactReducer
});

export default rootReducer;
