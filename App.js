import React from 'react';
import MealPlanScreen from './app/screen/mealPlan/MealPlanScreen';
import AddMealScreen from './app/screen/addMeal/AddMealScreen';
import AuthLoadingScreen from './app/screen/authLoading/AuthLoadingScreen';
import LoginScreen from './app/screen/login/LoginScreen';
import RegistrationScreen from './app/screen/registration/RegistrationScreen';
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './app/store/index'
import { connect } from 'react-redux'
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const AuthStack = StackNavigator({
  Login: { screen: LoginScreen },
  Registration: { screen: RegistrationScreen },
}, {
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3F51B5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });

const AppStack = StackNavigator({
  AddMeal: { screen: AddMealScreen },
  MealPlan: { screen: MealPlanScreen }
}, {
    initialRouteName: 'MealPlan',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3F51B5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });

const AppNavigator = SwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack,
}, {
    initialRouteName: 'AuthLoading',
  });

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}