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
    return <RootStack />;
  }
}
