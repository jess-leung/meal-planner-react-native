import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loginUser } from '../../store/session/actions';
import { connect } from 'react-redux'
import LoginFormComponent from './LoginFormComponent';

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    render() {
        return (
            <LoginFormComponent
                loginUser={this.props.loginUser}
                user={this.props.user}
                navigation={this.props.navigation}
                goToRegistration={() => this.props.navigation.navigate('Registration')} />
        );
    }
}

LoginScreen.propTypes = {
    loginUser: PropTypes.func.isReqsuired
}

const mapDispatchToProps = {
    loginUser: loginUser,
}

const mapStateToProps = state => ({
    loading: state.session.loading,
    error: state.session.error,
    user: state.session.user,
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)