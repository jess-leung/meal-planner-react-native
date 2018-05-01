import { combineReducers } from 'redux';
import session from './session/reducer';
import addMeal from './addMeal/reducer';

const rootReducer = combineReducers({
  session,
  addMeal,
});

export default rootReducer;