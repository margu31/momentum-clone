import { combineReducers } from 'redux';
import todosReducer from './todos';
import greeting from './greeting';

const rootReducer = combineReducers({ todosReducer, greeting });

export default rootReducer;
