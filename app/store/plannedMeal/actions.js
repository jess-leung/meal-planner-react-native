import * as types from './actionTypes';
import firebase, { firestore } from '../../service/firebase';

export const addPlannedMeal = (name, day, mealType) => {
    return (dispatch) => {
        dispatch(addPlannedMealLoading())

        let plannedMeal = {
            name: name,
            mealType: mealType,
            day: day
        };

        firestore.collection("planned-meals").add(plannedMeal)
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                dispatch(addPlannedMealSuccess(plannedMeal))
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
                dispatch(addPlannedMealError(error))
            });
    }
}

export const getPlannedMealsGivenDay = (day) => {
    return (dispatch) => {
        firestore.collection("planned-meals")
            .where("day", "==", day)
            .get()
            .then(function (querySnapshot) {
                console.log(querySnapshot);
                dispatch(getPlannedMealsSuccess(querySnapshot));
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
                dispatch(getPlannedMealsError(error));

            });
    }
}

const addPlannedMealLoading = () => ({
    type: types.ADD_PLANNED_MEAL_LOADING
});

const addPlannedMealSuccess = meal => ({
    type: types.ADD_PLANNED_MEAL_SUCCESS,
    meal
});

const addPlannedMealError = error => ({
    type: types.ADD_PLANNED_MEAL_ERROR,
    error
});

const getPlannedMealsSuccess = plannedMeals => ({
    type: types.GET_PLANNED_MEALS_SUCCESS,
    plannedMeals
});

const getPlannedMealsError = error => ({
    type: types.GET_PLANNED_MEALS_ERROR,
    error
})