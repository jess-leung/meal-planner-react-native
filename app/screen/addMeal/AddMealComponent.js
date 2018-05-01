import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Button, Input } from 'react-native-elements';
import PropTypes from 'prop-types';

class AddMealComponent extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.error && this.props.error) {
            Alert.alert('Error', this.props.error);
        }

        if (!prevProps.error && this.props.meal) {
            this.props.navigation.navigate('MealPlan', { 
                'addMealModalVisible': true, 
                'mealName': this.state.mealName,
                'dayOfWeek': this.props.navigation.getParam('dayOfWeek') 
            });
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            mealName: '',
        };
        this.onMealNameChange = (mealName) => {
            this.setState({ mealName: mealName });
            this.props.callbackFromParent(mealName);
        }
    }

    render() {
        return (
            <Input
                containerStyle={{ margin: 16 }}
                placeholder='Meal name'
                onChangeText={this.onMealNameChange}
                shake={true}
                value={this.state.mealName}
            />
        )
    }
}

AddMealComponent.propTypes = {
    error: PropTypes.string,
    meal: PropTypes.string, 
}

export default AddMealComponent