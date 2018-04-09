'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class MealPlanScreen extends Component<{}> {
    render() {
      return (
        <View>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Meal Planner', style: { color: '#fff' } }}
          />
          <Text>
            Search for houses to buy!
          </Text>
          <Text>
            Search by place-name or postcode.
          </Text>
        </View>
      );
    }
  }