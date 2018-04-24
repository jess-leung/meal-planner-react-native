import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { connect } from 'react-redux'
import { signupUser } from '../../store/session/actions';
import RegistrationFormComponent from './RegistrationFormComponent';

class RegistrationScreen extends React.Component {
    static navigationOptions = {
        title: 'Registration',
    };

    render() {
        return (
            <RegistrationFormComponent
                register={this.props.register} />
        );
    }
}

RegistrationScreen.propTypes = {
    register: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    signup: signupUser
  }
   
export default connect(null, mapDispatchToProps)(RegistrationScreen)