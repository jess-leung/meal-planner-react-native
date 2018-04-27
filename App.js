import React from 'react';
import MealPlanScreen from './app/MealPlanScreen';
import AddMealScreen from './app/AddMealScreen';
import LoginScreen from './app/screen/login/LoginScreen';
import RegistrationScreen from './app/screen/registration/RegistrationScreen';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './app/store/index'
import { connect } from 'react-redux'
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const Navigator = StackNavigator({
  Home: {
    screen: LoginScreen,
  },
  Registration: {
    screen: RegistrationScreen,
  },
  AddMeal: {
    screen: AddMealScreen,
  },
  MealPlan: {
    screen: MealPlanScreen,
  }
}, {
    initialRouteName: 'Home',
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

// const AppNavigator = connect(null)(<Navigator />);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}