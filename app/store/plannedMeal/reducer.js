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
            return { ...state, plannedMeal: null, error: null, loading: true, plannedMeals: action.plannedMeals }
        case types.GET_PLANNED_MEALS_ERROR:
            return { ...state, plannedMeal: null, error: action.error, loading: true, plannedMeals: null }
        default:
            return state
    }
}

export default plannedMeal