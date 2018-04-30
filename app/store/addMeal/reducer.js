import * as types from './actionTypes'
 
const initialState = {
  meal: null,
  error: null,
  loading: false
}
 
const addMealReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_MEAL_SUCCESS:
      return { ...state, meal: action.meal, error: null, loading: false }
    case types.ADD_MEAL_ERROR:
      return { ...state, meal: null, error: action.error, loading: false }
    case types.ADD_MEAL_LOADING:
    return { ...state, meal: null, error: null, loading: true }
    default:
      return state
  }
}
 
export default addMealReducer