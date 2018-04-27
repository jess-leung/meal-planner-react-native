import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
                signupUser={this.props.signupUser}
                error={this.props.error}
            />
        );
    }
}

RegistrationScreen.propTypes = {
    signupUser: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    signupUser: signupUser,
}

const mapStateToProps = state => ({
    loading: state.session.loading,
    error: state.session.error,
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen)