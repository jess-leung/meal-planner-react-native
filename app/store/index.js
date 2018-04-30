import { combineReducers } from 'redux';
import session from './session/reducer';
import addMealReducer from './addMeal/reducer';

const rootReducer = combineReducers({
  session,
  addMealReducer
});

export default rootReducer;