import React, { Component } from 'react';
import { Button, Input } from 'react-native-elements';
import PropTypes from 'prop-types';

class AddMealComponent extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.error && this.props.error) {
            Alert.alert('Error', this.props.error);
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
    error: PropTypes.string
}

export default AddMealComponent