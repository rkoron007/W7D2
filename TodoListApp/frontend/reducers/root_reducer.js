import { combineReducers } from 'redux';

import todosReducer from './todos_reducer';
import errorsReducer from './errors_reducer';
import stepsReducer from './steps_reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  errors: errorsReducer,
  steps: stepsReducer
});

export default rootReducer;
