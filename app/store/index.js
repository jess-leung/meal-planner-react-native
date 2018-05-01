import { combineReducers } from 'redux';
import session from './session/reducer';
import addMeal from './meal/reducer';
import plannedMeal from './plannedMeal/reducer';

const rootReducer = combineReducers({
  session,
  addMeal,
  plannedMeal
});

export default rootReducer;