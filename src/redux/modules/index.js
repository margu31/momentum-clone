import { combineReducers } from 'redux';
import greeting from './greeting';
import authReducer from './auth';
import todosReducer from './todos';

const rootReducer = combineReducers({
  greeting,
  auth: authReducer,
  todos: todosReducer,
});

export default rootReducer;
