import { applyMiddleware, combineReducers, createStore } from 'redux';

import { user } from 'src/redux/feature/user';
import { loading } from 'src/redux/feature/loading';
import { developer } from 'src/redux/feature/developer';
import { recruiter } from 'src/redux/feature/recruiter';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  user,
  developer,
  recruiter,
  loading,
});
const composeEnhancers = composeWithDevTools({
  trace: true,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
