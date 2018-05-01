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