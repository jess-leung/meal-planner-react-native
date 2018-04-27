import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BasicLoginFormComponent from '../login/BasicLoginFormComponent';
import { Alert } from 'react-native'

class RegistrationFormComponent extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.error && this.props.error) {
            Alert.alert('Error', this.props.error);
        }
    }

    render() {
        return (
            <BasicLoginFormComponent
                buttonTitle='Register'
                onButtonPress={this.props.signupUser} />
        )
    }
}

RegistrationFormComponent.propTypes = {
    signupUser: PropTypes.func.isRequired,
    error: PropTypes.string,
}

export default RegistrationFormComponent