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
} from 'react-native-elements';
import PlannedMealsCard from './PlannedMealsCard';
import MealTypeSelectionModal from './MealTypeSelectionModal';
import { addMeal } from '../../store/meal/actions';
import { addPlannedMeal } from '../../store/plannedMeal/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlannedMeals } from '../../store/plannedMeal/actions';

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
    this.state = {
      plannedMeals: {}
    }
    this.onMealAdded = (mealType) => {
      this.props.addPlannedMeal(this.props.navigation.getParam('mealName'),
        this.props.navigation.getParam('dayOfWeek'), mealType);
      this.props.getPlannedMeals();
    }
  }

  componentDidMount() {
    this.props.getPlannedMeals();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.plannedMeals && nextProps.plannedMeals.size > 0) {
      let retrievedMeals = {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: []
      };
      const plannedMealsForDay = nextProps.plannedMeals.forEach((plannedMeal) => {
        let thisMeal = plannedMeal.data();
        retrievedMeals[thisMeal.day].push(thisMeal);
      });
      this.setState({ plannedMeals: retrievedMeals });
    }
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
            <PlannedMealsCard
              meals={this.state.plannedMeals[item.key]}
              navigation={this.props.navigation}
              dayOfWeek={item.key} />
          }
        />
      </View>
    );
  }
}

MealPlanScreen.propTypes = {
  addPlannedMeal: PropTypes.func.isReqsuired
}

const mapDispatchToProps = {
  addPlannedMeal: addPlannedMeal,
  getPlannedMeals: getPlannedMeals
}

const mapStateToProps = state => ({
  loading: state.plannedMeal.loading,
  error: state.plannedMeal.error,
  plannedMeal: state.plannedMeal.plannedMeal,
  plannedMeals: state.plannedMeal.plannedMeals
});

export default connect(mapStateToProps, mapDispatchToProps)(MealPlanScreen)