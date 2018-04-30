import * as types from './actionTypes';
import firebase, { firestore } from '../../service/firebase';

export const addMeal = (name) => {
    return (dispatch) => {
        dispatch(addMealLoading())

        firestore.collection("meals").add({
            name: name
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                dispatch(addMealSuccess())
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
                dispatch(addMealError())
            });
    }
}

const addMealLoading = () => ({
    type: types.ADD_MEAL_LOADING
});

const addMealSuccess = meal => ({
    type: types.ADD_MEAL_SUCCESS,
    meal
});

const addMealError = error => ({
    type: types.ADD_MEAL_ERROR,
    error
});