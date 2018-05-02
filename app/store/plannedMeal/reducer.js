import * as types from './actionTypes'

const initialState = {
    plannedMeal: null,
    error: null,
    loading: false,
    plannedMeals: null
}

const plannedMeal = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_PLANNED_MEAL_SUCCESS:
            return { ...state, plannedMeal: action.plannedMeal, error: null, loading: false, plannedMeals: null }
        case types.ADD_PLANNED_MEAL_ERROR:
            return { ...state, plannedMeal: null, error: action.error, loading: false, plannedMeals: null }
        case types.ADD_PLANNED_MEAL_LOADING:
            return { ...state, plannedMeal: null, error: null, loading: true, plannedMeals: null }
        case types.GET_PLANNED_MEALS_SUCCESS:
            return { ...state, plannedMeals: action.plannedMeals, error: null, plannedMeal: null }
        case types.GET_PLANNED_MEALS_ERROR:
            return { ...state, plannedMeals: null, error: action.error, plannedMeal: null }
        default:
            return state
    }
}

export default plannedMeal