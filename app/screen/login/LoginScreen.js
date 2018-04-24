import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginFormComponent from './LoginFormComponent';
import { loginUser } from '../../store/session/actions';
import { connect } from 'react-redux'

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LoginFormComponent
                login={this.props.login}
                goToRegistration={() => this.props.navigation.navigate('Registration')} />
        );
    }
}

LoginScreen.propTypes = {
    login: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    login: loginUser
}

export default connect(null, mapDispatchToProps)(LoginScreen)