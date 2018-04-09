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

export default class MealPlanScreen extends Component<{}> {
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Meal Planner', style: { color: '#fff' } }}
          backgroundColor='#4CAF50'
        />
        <FlatList
          data={[{ title: 'MONDAY', key: 'monday' }, { title: 'TUESDAY', key: 'tuesday' }, { title: 'WEDNESDAY', key: 'wednesday' },
          { title: 'THURSDAY', key: 'thursday' }, { title: 'FRIDAY', key: 'friday' }]}
          renderItem={({ item }) =>
            <Card title={item.title} >
              <Text>No meals</Text>
              <Button
                buttonStyle={{
                  backgroundColor: '#4CAF50',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 5,
                }}
                title='ADD MEAL' />
            </Card>}
        />
      </View>
    );
  }
}