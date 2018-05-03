import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import {
    Card,
    Button
} from 'react-native-elements';
import { connect } from 'react-redux';
import { getPlannedMealsGivenDay } from '../../store/plannedMeal/actions';
import PlannedMealsList from './PlannedMealsList';

class PlannedMealsCard extends Component {
    capitalizeString = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    constructor(props) {
        super(props);
        this.state = {
            plannedMeals: []
        };
    }

    componentDidMount() {
        this.props.getPlannedMealsGivenDay(this.props.dayOfWeek);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.plannedMeals && nextProps.plannedMeals.size > 0) {
            let retrievedMeals = [];
            const plannedMealsForDay = nextProps.plannedMeals.forEach((plannedMeal) => {
                let thisMeal = plannedMeal.data();
                if (thisMeal.day === this.props.dayOfWeek) {
                    retrievedMeals.push(thisMeal);
                }
            });
        this.setState({ plannedMeals: retrievedMeals });
    }
}

render() {
    let dayOfWeekTitle = this.capitalizeString(this.props.dayOfWeek);

    return (
        <Card title={dayOfWeekTitle} >
            <PlannedMealsList plannedMeals={this.state.plannedMeals} />
            <Button
                buttonStyle={{
                    backgroundColor: '#3F51B5',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 5,
                }}
                onPress={() => this.props.navigation.navigate('AddMeal', { dayOfWeek: this.props.dayOfWeek })}
                title='ADD MEAL' />
        </Card>
    );
}
}

PlannedMealsCard.propTypes = {
    dayOfWeek: PropTypes.string
}

const mapStateToProps = state => ({
    loading: state.plannedMeal.loading,
    error: state.plannedMeal.error,
    plannedMeals: state.plannedMeal.plannedMeals
});

const mapDispatchToProps = {
    getPlannedMealsGivenDay: getPlannedMealsGivenDay
}

export default connect(mapStateToProps, mapDispatchToProps)(PlannedMealsCard)