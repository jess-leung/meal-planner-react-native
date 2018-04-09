'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';
import {
  Header,
  Card,
  Button
} from 'react-native-elements';

export default class MealPlanScreen extends React.Component {
  static navigationOptions = {
    title: 'Meal Planner',
  };

  render() {
    return (
      <View>
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