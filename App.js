import React from 'react';
import MealPlanScreen from './app/MealPlanScreen';
import AddMealScreen from './app/AddMealScreen';
import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator({
  Home: {
    screen: MealPlanScreen,
  },
  AddMealScreen: {
    screen: AddMealScreen,
  },
}, {
    initialRouteName: 'Home',
  });

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
