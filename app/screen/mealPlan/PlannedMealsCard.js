import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import {
    Card,
    Button
} from 'react-native-elements';

class PlannedMealsCard extends Component {
    capitalizeString = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    render() {
        let dayOfWeekTitle = this.capitalizeString(this.props.dayOfWeek);

        return (
            <Card title={dayOfWeekTitle} >
                <Text>No meals</Text>
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

export default PlannedMealsCard