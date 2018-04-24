import React from 'react';
import MealPlanScreen from './app/MealPlanScreen';
import AddMealScreen from './app/AddMealScreen';
import LoginScreen from './app/screen/login/LoginScreen';
import RegistrationScreen from './app/screen/registration/RegistrationScreen';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combineReducers from './app/store/reducer'

const store = createStore(combineReducers)


const RootStack = StackNavigator({
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

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
     </Provider>
    )
  }
}