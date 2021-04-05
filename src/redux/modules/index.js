import { combineReducers } from 'redux';
import greeting from './greeting';
import authReducer from './auth';

const rootReducer = combineReducers({ greeting, auth: authReducer });

export default rootReducer;
