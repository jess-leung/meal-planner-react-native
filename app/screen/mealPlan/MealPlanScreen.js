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
import { addMeal } from '../../store/meal/actions';
import { addPlannedMeal, getPlannedMeals } from '../../store/plannedMeal/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    this.onMealAdded = (mealType) => {
      this.props.addPlannedMeal(this.props.navigation.getParam('mealName'),
        this.props.navigation.getParam('dayOfWeek'), mealType);
    }
    this.props.getPlannedMeals();
  }

  render() {
    return (
      <View>
        <MealTypeSelectionModal
          onMealAdded={this.onMealAdded.bind(this)}
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
                onPress={() => this.props.navigation.navigate('AddMeal', { dayOfWeek: item.key })}
                title='ADD MEAL' />
            </Card>}
        />
      </View>
    );
  }
}

MealPlanScreen.propTypes = {
  addPlannedMeal: PropTypes.func.isReqsuired,
  getPlannedMeals: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  addPlannedMeal: addPlannedMeal,
  getPlannedMeals: getPlannedMeals,
}

const mapStateToProps = state => ({
  loading: state.plannedMeal.loading,
  error: state.plannedMeal.error,
  plannedMeal: state.plannedMeal.plannedMeal,
})

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanScreen)