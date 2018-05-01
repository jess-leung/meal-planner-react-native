import * as types from './actionTypes'

const initialState = {
  plannedMeal: null,
  error: null,
  loading: false
}

const plannedMeal = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PLANNED_MEAL_SUCCESS:
      return { ...state, plannedMeal: action.plannedMeal, error: null, loading: false }
    case types.ADD_PLANNED_MEAL_ERROR:
      return { ...state, plannedMeal: null, error: action.error, loading: false }
    case types.ADD_PLANNED_MEAL_LOADING:
      return { ...state, plannedMeal: null, error: null, loading: true }
    default:
      return state
  }
}

export default plannedMeal