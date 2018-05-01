'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Modal,
  InteractionManager
} from 'react-native';
import {
  Header,
  Card,
  Button
} from 'react-native-elements';
import MealTypeSelectionModal from './MealTypeSelectionModal';
import { addMeal } from '../../store/addMeal/actions';

class MealPlanScreen extends React.Component {
  static navigationOptions = {
    title: 'Meal Planner',
  };

  constructor(props) {
    super(props);
    this.isAddingMeal = () => {
      if (this.props.navigation.state.params) {
        return this.props.navigation.getParam('addMealModalVisible');
      }
      return false;
    }
  }

  render() {
    return (
      <View>
        <MealTypeSelectionModal
          isAddingMeal={this.isAddingMeal()} />
        <FlatList
          data={[{ title: 'MONDAY', key: 'monday' }, { title: 'TUESDAY', key: 'tuesday' }, { title: 'WEDNESDAY', key: 'wednesday' },
          { title: 'THURSDAY', key: 'thursday' }, { title: 'FRIDAY', key: 'friday' }]}
          renderItem={({ item }) =>
            <Card title={item.title} >
              <Text>No meals</Text>
              <Button
                buttonStyle={{
                  backgroundColor: '#3F51B5',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 5,
                }}
                onPress={() => this.props.navigation.navigate('AddMeal')}
                title='ADD MEAL' />
            </Card>}
        />
      </View>
    );
  }
}

export default MealPlanScreen