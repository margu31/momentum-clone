import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer from './modules';

const middlewares = [logger];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export const StoreProvider = props => {
  return <Provider store={store} {...props} />;
};
