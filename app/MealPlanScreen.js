'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class MealPlanScreen extends Component<{}> {
    render() {
      return (
        <View>
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